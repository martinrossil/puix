import { Cursor } from '../enums/Cursor';
import PointInterface from '../vo/PointInterface';
import Point from '../vo/Point';
import DisplayElement from '../core/DisplayElement';

export default class TouchLayer extends DisplayElement {
    public static CLICK = 'TouchLayer.CLICK';
    public static MOUSE_OVER = 'TouchLayer.MOUSE_OVER';
    public static MOUSE_LEAVE = 'TouchLayer.MOUSE_LEAVE';
    public static MOUSE_DOWN = 'TouchLayer.MOUSE_DOWN';
    public static MOUSE_UP = 'TouchLayer.MOUSE_UP';
    public static TOUCH_START = 'TouchLayer.TOUCH_START';
    public static TOUCH_END_INSIDE = 'TouchLayer.TOUCH_END_INSIDE';
    public static TOUCH_END_OUTSIDE = 'TouchLayer.TOUCH_END_OUTSIDE';

    protected didTouchStart = false;

    public constructor() {
        super();
        this.name = 'PointerElement';
        this.backgroundColor = 'hsla(0, 0%, 0%, 0.0)';
        this.cursor = Cursor.POINTER;
        this.addEventListener('click', this.clicked.bind(this));
        this.addEventListener('mouseover', this.mouseOver.bind(this));
        this.addEventListener('mouseleave', this.mouseLeave.bind(this));
        this.addEventListener('mousedown', this.mouseDown.bind(this));
        this.addEventListener('mouseup', this.mouseUp.bind(this));
        this.addEventListener('touchstart', this.touchStart.bind(this), { passive: true });
        this.addEventListener('touchend', this.touchEnd.bind(this), { passive: true });
    }

    protected clicked(): void {
        this.dispatchEventWith(TouchLayer.CLICK);
    }

    protected touchStart(e: TouchEvent): void {
        this.didTouchStart = true;
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr: ClientRect = this.getBoundingClientRect();
            const point: PointInterface = new Point(px - cr.left, py - cr.top);
            this.dispatchEventWith(TouchLayer.TOUCH_START, point);
        }
    }

    protected touchEnd(e: TouchEvent): void {
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr = this.getBoundingClientRect();
            const cl: number = cr.left;
            const ct: number = cr.top;
            const cw: number = cr.width;
            const ch: number = cr.height;
            if (px > cl && px < cl + cw && py > ct && py < ct + ch) {
                this.dispatchEventWith(TouchLayer.TOUCH_END_INSIDE);
            } else {
                this.dispatchEventWith(TouchLayer.TOUCH_END_OUTSIDE);
            }
        } else {
            this.dispatchEventWith(TouchLayer.TOUCH_END_OUTSIDE);
        }
    }

    protected mouseOver(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(TouchLayer.MOUSE_OVER);
        }
    }

    protected mouseDown(e: MouseEvent): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(TouchLayer.MOUSE_DOWN, new Point(e.offsetX, e.offsetY));
        }
    }

    protected mouseUp(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(TouchLayer.MOUSE_UP);
        }
    }

    protected mouseLeave(): void {
        if (!this.didTouchStart) {
            this.dispatchEventWith(TouchLayer.MOUSE_LEAVE);
        } else {
            this.didTouchStart = false;
        }
    }
}
customElements.define('touch-layer', TouchLayer);
