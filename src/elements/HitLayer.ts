import DisplayElement from '../core/DisplayElement';
import IHitLayer from '../interfaces/elements/IHitlayer';
import CornerType from '../consts/CornerType';
import ShapeUtil from '../svg/utils/ShapeUtil';
import Cursor from '../consts/Cursor';
import Events from '../consts/Events';
import IPoint from '../interfaces/vo/IPoint';
import Point from '../vo/Point';

export default class HitLayer extends DisplayElement implements IHitLayer {
    public constructor() {
        super();
        this.name = 'HitLayer';
        this.hitPath.style.fill = '#CC000000';
        this.hitPath.style.cursor = Cursor.POINTER;
        this.svg.appendChild(this.hitPath);
        this.svg.setAttribute('fill', 'transparent');
        this.appendChild(this.svg);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.windowUp = this.windowUp.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.hitPath.addEventListener('mouseover', this.mouseOver);
        this.hitPath.addEventListener('touchstart', this.touchStart);
    }

    protected mouseOver(): void {
        console.log(this.name, 'mouseOver()');
        this.hitPath.removeEventListener('mouseover', this.mouseOver);
        this.hitPath.addEventListener('mouseleave', this.mouseLeave);
        this.hitPath.addEventListener('mousedown', this.mouseDown);
        this.dispatchEventWith(Events.POINTER_OVER);
    }

    protected mouseDown(e: MouseEvent): void {
        this.hitPath.removeEventListener('mousedown', this.mouseDown);
        this.hitPath.addEventListener('mouseup', this.mouseUp);
        window.addEventListener('mouseup', this.windowUp);
        const point: IPoint = new Point(e.offsetX, e.offsetY);
        console.log(this.name, 'mouseDown()', point);
        this.dispatchEventWith(Events.POINTER_DOWN, point);
    }

    protected mouseUp(): void {
        console.log(this.name, 'mouseUp()');
        window.removeEventListener('mouseup', this.windowUp);
        this.hitPath.removeEventListener('mouseup', this.mouseUp);
        this.hitPath.addEventListener('mousedown', this.mouseDown);
        this.dispatchEventWith(Events.POINTER_TRIGGERED);
    }

    protected windowUp(): void {
        console.log(this.name, 'windowUp()');
        window.removeEventListener('mouseup', this.windowUp);
        this.dispatchEventWith(Events.WINDOW_UP);
    }

    protected mouseLeave(): void {
        console.log(this.name, 'mouseLeave()');
        this.hitPath.removeEventListener('mouseleave', this.mouseLeave);
        this.hitPath.removeEventListener('mousedown', this.mouseDown);
        this.hitPath.removeEventListener('mouseup', this.mouseUp);
        this.hitPath.addEventListener('mouseover', this.mouseOver);
        this.dispatchEventWith(Events.POINTER_LEAVE);
    }

    protected touchStart(e: TouchEvent): void {
        e.preventDefault();
        this.hitPath.removeEventListener('touchstart', this.touchStart);
        this.hitPath.addEventListener('touchend', this.touchEnd);
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr: ClientRect = this.hitPath.getBoundingClientRect();
            const point: IPoint = new Point(px - cr.left, py - cr.top);
            console.log(this.name, 'touchStart()', point);
            this.dispatchEventWith(Events.POINTER_DOWN, point);
        }
    }

    protected touchEnd(e: TouchEvent): void {
        e.preventDefault();
        console.log(this.name, 'touchEnd()');
        this.hitPath.removeEventListener('touchend', this.touchEnd);
        this.hitPath.addEventListener('touchstart', this.touchStart);
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr = this.hitPath.getBoundingClientRect();
            const cl: number = cr.left;
            const ct: number = cr.top;
            const cw: number = cr.width;
            const ch: number = cr.height;
            if (px > cl && px < cl + cw && py > ct && py < ct + ch) {
                this.dispatchEventWith(Events.POINTER_TRIGGERED);
            } else {
                this.dispatchEventWith(Events.POINTER_LEAVE);
            }
        } else {
            this.dispatchEventWith(Events.POINTER_LEAVE);
        }
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.updateSvgAttributes();
        this.updatePathData();
    }

    protected updateSvgAttributes(): void {
        this.svg.setAttribute('width', this.actualWidth.toString());
        this.svg.setAttribute('height', this.actualHeight.toString());
    }

    protected updatePathData(): void {
        let d;
        if (this.cornerType === CornerType.NONE) {
            d = ShapeUtil.getNonePath(this.actualWidth, this.actualHeight);
        } else if (this.cornerType === CornerType.ROUNDED) {
            d = ShapeUtil.getRoundedPath(this.actualWidth, this.actualHeight, this.cornerSize);
        } else {
            d = ShapeUtil.getCutPath(this.actualWidth, this.actualHeight, this.cornerSize);
        }
        this.hitPath.setAttribute('d', d);
    }

    private svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    protected hitPath: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    private _cornerType = CornerType.NONE;

    public set cornerType(value: number) {
        if (this._cornerType !== value) {
            this._cornerType = value;
            this.invalidateDisplay();
        }
    }

    public get cornerType(): number {
        return this._cornerType;
    }

    private _cornerSize = 0;

    public set cornerSize(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._cornerSize !== 0) {
                this._cornerSize = 0;
                this.invalidateDisplay();
            }
        } else if (this._cornerSize !== value) {
            this._cornerSize = value;
            this.invalidateDisplay();
        }
    }

    public get cornerSize(): number {
        return this._cornerSize;
    }
}
customElements.define('hit-layer', HitLayer);
