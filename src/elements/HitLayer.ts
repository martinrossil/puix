import DisplayElement from '../core/DisplayElement';
import IHitLayer from '../interfaces/elements/IHitlayer';
import CornerType from '../consts/CornerType';
import ShapeUtil from '../svg/utils/ShapeUtil';
import Cursor from '../consts/Cursor';
import IPoint from '../interfaces/vo/IPoint';
import Events from '../consts/Events';
import Point from '../vo/Point';

export default class HitLayer extends DisplayElement implements IHitLayer {
    protected didTouchStart = false;

    public constructor() {
        super();
        this.name = 'HitLayer';
        this.appendChild(this.svg);
    }

    protected touchStart(e: TouchEvent): void {
        this.didTouchStart = true;
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr: ClientRect = this.hitPath.getBoundingClientRect();
            const point: IPoint = new Point(px - cr.left, py - cr.top);
            this.dispatchEventWith(Events.POINTER_DOWN, point);
        }
    }

    protected touchEnd(e: TouchEvent): void {
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

    protected mouseOver(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(Events.POINTER_OVER);
        }
    }

    protected mouseDown(e: MouseEvent): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(Events.POINTER_DOWN, new Point(e.offsetX, e.offsetY));
        }
    }

    protected mouseUp(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(Events.POINTER_TRIGGERED);
        }
    }

    protected mouseLeave(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(Events.POINTER_OVER);
        } else {
            this.didTouchStart = false;
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

    private _svg!: SVGSVGElement;

    protected get svg(): SVGSVGElement {
        if (!this._svg) {
            this._svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this._svg.appendChild(this.hitPath);
            this._svg.setAttribute('fill', 'transparent');
        }
        return this._svg;
    }

    private _hitPath!: SVGPathElement;

    protected get hitPath(): SVGPathElement {
        if (!this._hitPath) {
            this._hitPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            this._hitPath.style.fill = '#CC000000';
            this._hitPath.style.cursor = Cursor.POINTER;
            this._hitPath.addEventListener('mouseover', this.mouseOver.bind(this));
            this._hitPath.addEventListener('mouseleave', this.mouseLeave.bind(this));
            this._hitPath.addEventListener('mousedown', this.mouseDown.bind(this));
            this._hitPath.addEventListener('mouseup', this.mouseUp.bind(this));
            this._hitPath.addEventListener('touchstart', this.touchStart.bind(this), { passive: true });
            this._hitPath.addEventListener('touchend', this.touchEnd.bind(this), { passive: true });
        }
        return this._hitPath;
    }

    private _cornerType = CornerType.NONE;

    public set cornerType(value: string) {
        if (this._cornerType !== value) {
            this._cornerType = value;
            this.invalidateDisplay();
        }
    }

    public get cornerType(): string {
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
