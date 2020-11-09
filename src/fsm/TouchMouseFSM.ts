import IEventDispatcher from '../interfaces/events/IEventDispatcher';
import IState from '../interfaces/fsm/IState';
import FSM from './FSM';
import State from './State';

export default class TouchMouseFSM extends FSM {
    public constructor(host: IEventDispatcher) {
        super(host);
        this.initial.enter = this.initialEnter.bind(this);
        this.initial.exit = this.initialExit.bind(this);
        this.initial.addTransition('mouseover', this.mouseOver);
        this.initial.addTransition('touchstart', this.touchStart);
        this.host.addEventListener('mouseover', this.send);
        this.host.addEventListener('touchstart', this.send);
    }

    private initialEnter(): void {
        this.host.addEventListener('mouseover', this.send);
        this.host.addEventListener('touchstart', this.send);
    }

    private initialExit(): void {
        this.host.removeEventListener('mouseover', this.send);
        this.host.removeEventListener('touchstart', this.send);
    }

    private _mouseOver!: IState;

    private get mouseOver(): IState {
        if (!this._mouseOver) {
            this._mouseOver = new State('mouseOver');
            this._mouseOver.enter = this.overEnter.bind(this);
            this._mouseOver.exit = this.overExit.bind(this);
            this._mouseOver.addTransition('mouseleave', this.initial);
            this._mouseOver.addTransition('mousedown', this.mouseDown);
        }
        return this._mouseOver;
    }

    private overEnter(): void {
        this.host.addEventListener('mouseleave', this.send);
        this.host.addEventListener('mousedown', this.send);
    }

    private overExit(): void {
        this.host.removeEventListener('mouseleave', this.send);
        this.host.removeEventListener('mousedown', this.send);
    }

    private _mouseDown!: IState;

    private get mouseDown(): IState {
        if (!this._mouseDown) {
            this._mouseDown = new State('mouseDown');
            this._mouseDown.enter = this.mouseDownEnter.bind(this);
            this._mouseDown.exit = this.mouseDownExit.bind(this);
            this._mouseDown.addTransition('mouseup', this.mouseUp);
            this._mouseDown.addTransition('mouseleave', this.initial);
        }
        return this._mouseDown;
    }

    private mouseDownEnter(): void {
        this.host.addEventListener('mouseleave', this.send);
        this.host.addEventListener('mouseup', this.send);
    }

    private mouseDownExit(): void {
        this.host.removeEventListener('mouseleave', this.send);
        this.host.removeEventListener('mouseup', this.send);
    }

    private _mouseUp!: IState;

    private get mouseUp(): IState {
        if (!this._mouseUp) {
            this._mouseUp = new State('mouseUp');
            this._mouseUp.on = this.mouseUpOn.bind(this);
            this._mouseUp.addTransition('mouseTriggered', this.mouseOver);
        }
        return this._mouseUp;
    }

    private mouseUpOn(): void {
        this.send(new Event('mouseTriggered'));
    }

    private _touchStart!: IState;

    private get touchStart(): IState {
        if (!this._touchStart) {
            this._touchStart = new State('touchStart');
            this._touchStart.enter = this.touchStartEnter.bind(this);
            this._touchStart.on = this.touchStartOn.bind(this);
            this._touchStart.exit = this.touchStartExit.bind(this);
            this._touchStart.addTransition('touchend', this.touchEnd);
        }
        return this._touchStart;
    }

    private touchStartEnter(): void {
        this.host.addEventListener('touchend', this.send);
    }

    private touchStartOn(e: Event): void {
        e.preventDefault();
    }

    private touchStartExit(): void {
        this.host.removeEventListener('touchend', this.send);
    }

    private _touchEnd!: IState;

    private get touchEnd(): IState {
        if (!this._touchEnd) {
            this._touchEnd = new State('touchEnd');
            this._touchEnd.on = this.touchEndOn.bind(this);
            this._touchEnd.addTransition('touchEndInside', this.touchEndInside);
            this._touchEnd.addTransition('touchEndOutside', this.touchEndOutside);
        }
        return this._touchEnd;
    }

    private touchEndOn(e: Event): void {
        e.preventDefault();
        const touchEvent: TouchEvent = e as TouchEvent
        if (touchEvent.changedTouches && touchEvent.changedTouches.length > 0) {
            const touch: Touch = touchEvent.changedTouches[0];
            const px = touch.pageX;
            const py = touch.pageY;
            const hostElement: Element = this.host as unknown as Element;
            const rect = hostElement.getBoundingClientRect();
            if (px > rect.x && px < rect.x + rect.width) {
                if (py > rect.y && py < rect.y + rect.height) {
                    this.send(new Event('touchEndInside'));
                    return;
                }
            }
        }
        this.send(new Event('touchEndOutside'));
    }

    private _touchEndInside!: IState;

    private get touchEndInside(): IState {
        if (!this._touchEndInside) {
            this._touchEndInside = new State('touchEndInside');
            this._touchEndInside.on = this.touchEndInsideOn.bind(this);
            this._touchEndInside.addTransition('touchEndedInside', this.initial);
        }
        return this._touchEndInside;
    }

    private touchEndInsideOn(): void {
        this.send(new Event('touchEndedInside'));
    }

    private _touchEndOutside!: IState;

    private get touchEndOutside(): IState {
        if (!this._touchEndOutside) {
            this._touchEndOutside = new State('touchEndOutside');
            this._touchEndOutside.on = this.touchEndOutsideOn.bind(this);
            this._touchEndOutside.addTransition('touchEndedOutside', this.initial);
        }
        return this._touchEndOutside;
    }

    private touchEndOutsideOn(): void {
        this.send(new Event('touchEndedOutside'));
    }
}
