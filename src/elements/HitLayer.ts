import DisplayElement from '../core/DisplayElement';
import Cursor from '../consts/Cursor';
import Events from '../consts/Events';

export default class HitLayer extends DisplayElement {
    public constructor() {
        super();
        this.name = 'HitLayer';
        this.cursor = Cursor.POINTER;
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.addEventListener('mouseover', this.mouseOver);
        this.addEventListener('touchstart', this.touchStart);
    }

    protected mouseOver(e: MouseEvent): void {
        console.log(this.name, e.type);
        this.removeEventListener('mouseover', this.mouseOver);
        this.addEventListener('mouseleave', this.mouseLeave);
        this.addEventListener('mousedown', this.mouseDown);
        this.dispatchEventWith(Events.POINTER_OVER);
    }

    protected mouseDown(e: MouseEvent): void {
        console.log(this.name, e.type, e.offsetX, e.offsetY);
        this.removeEventListener('mousedown', this.mouseDown);
        this.addEventListener('mouseup', this.mouseUp);
        this.dispatchEventWith(Events.POINTER_DOWN, { localX: e.offsetX, localY: e.offsetY });
    }

    protected mouseUp(e: MouseEvent): void {
        console.log(this.name, e.type);
        this.removeEventListener('mouseup', this.mouseUp);
        this.addEventListener('mousedown', this.mouseDown);
        this.dispatchEventWith(Events.POINTER_TRIGGERED);
    }

    protected mouseLeave(e: MouseEvent): void {
        console.log(this.name, e.type);
        this.removeEventListener('mouseleave', this.mouseLeave);
        this.removeEventListener('mousedown', this.mouseDown);
        this.removeEventListener('mouseup', this.mouseUp);
        this.addEventListener('mouseover', this.mouseOver);
        this.dispatchEventWith(Events.POINTER_LEAVE);
    }

    protected touchStart(e: TouchEvent): void {
        console.log(this.name, e.type);
        e.preventDefault();
        this.removeEventListener('touchstart', this.touchStart);
        this.addEventListener('touchend', this.touchEnd);
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch: Touch = e.changedTouches[0];
            const px: number = touch.pageX;
            const py: number = touch.pageY;
            const cr: ClientRect = this.getBoundingClientRect();
            const localX: number = px - cr.left;
            const localY: number = py - cr.top;
            console.log(localX, localY);
            this.dispatchEventWith(Events.POINTER_DOWN, { localX: localX, localY: localY });
        }
    }

    protected touchEnd(e: TouchEvent): void {
        console.log(this.name, e.type);
        e.preventDefault();
        this.removeEventListener('touchend', this.touchEnd);
        this.addEventListener('touchstart', this.touchStart);
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
                this.dispatchEventWith(Events.POINTER_TRIGGERED);
            } else {
                this.dispatchEventWith(Events.POINTER_LEAVE);
            }
        } else {
            this.dispatchEventWith(Events.POINTER_LEAVE);
        }
    }
}
customElements.define('hit-layer', HitLayer);
