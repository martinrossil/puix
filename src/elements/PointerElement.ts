import Cursor from '../consts/Cursor';
import PointInterface from '../vo/PointInterface';
import Point from '../vo/Point';
import ShapeElement from '../svg/ShapeElement';

export default class PointerElement extends ShapeElement {
    static OVER = 'PointerElement.OVER';
    static DOWN = 'PointerElement.DOWN';
    static TRIGGERED = 'PointerElement.TRIGGERED';
    static LEAVE = 'PointerElement.LEAVE';

    protected didTouchStart = false;

    public constructor() {
        super();
        this.name = 'PointerElement';
        this.appendChild(this.svg);
        this.path.style.fill = '#CC000000';
        this.path.style.cursor = Cursor.POINTER;
        this.path.addEventListener('mouseover', this.mouseOver.bind(this));
        this.path.addEventListener('mouseleave', this.mouseLeave.bind(this));
        this.path.addEventListener('mousedown', this.mouseDown.bind(this));
        this.path.addEventListener('mouseup', this.mouseUp.bind(this));
        this.path.addEventListener('touchstart', this.touchStart.bind(this), { passive: true });
        this.path.addEventListener('touchend', this.touchEnd.bind(this), { passive: true });
    }

    protected touchStart(e: TouchEvent): void {
        this.didTouchStart = true;
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr: ClientRect = this.path.getBoundingClientRect();
            const point: PointInterface = new Point(px - cr.left, py - cr.top);
            this.dispatchEventWith(PointerElement.DOWN, point);
        }
    }

    protected touchEnd(e: TouchEvent): void {
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr = this.path.getBoundingClientRect();
            const cl: number = cr.left;
            const ct: number = cr.top;
            const cw: number = cr.width;
            const ch: number = cr.height;
            if (px > cl && px < cl + cw && py > ct && py < ct + ch) {
                this.dispatchEventWith(PointerElement.TRIGGERED);
            } else {
                this.dispatchEventWith(PointerElement.LEAVE);
            }
        } else {
            this.dispatchEventWith(PointerElement.LEAVE);
        }
    }

    protected mouseOver(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(PointerElement.OVER);
        }
    }

    protected mouseDown(e: MouseEvent): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(PointerElement.DOWN, new Point(e.offsetX, e.offsetY));
        }
    }

    protected mouseUp(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(PointerElement.TRIGGERED);
        }
    }

    protected mouseLeave(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(PointerElement.OVER);
        } else {
            this.didTouchStart = false;
        }
    }
}
customElements.define('pointer-element', PointerElement);
