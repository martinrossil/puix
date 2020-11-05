import IEventDispatcher from '../interfaces/events/IEventDispatcher';
import IState from '../interfaces/fsm/IState';
import FSM from './FSM';
import State from './State';

export default class InteractiveMachine extends FSM {
    public constructor(host: IEventDispatcher) {
        super(host);
        this.name = 'InteractiveMachine';
        this.initial.enterState = this.initialEnter.bind(this);
        this.initial.exitState = this.initialExit.bind(this);
        this.initial.addTransition('mouseover', this.mouseOver);
        this.initial.addTransition('touchstart', this.touchDown);
        this.addState(this.mouseOver);
        this.addState(this.mouseDown);
        this.addState(this.touchDown);
        host.addEventListener('touchstart', this.send);
        host.addEventListener('mouseover', this.send);
    }

    private initialEnter(previous: IState, e: Event): void {
        if (e.type === 'touchend') {
            e.preventDefault();
        }
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
            this._mouseOver.enterState = this.mouseOverEnter.bind(this);
            this._mouseOver.exitState = this.mouseOverExit.bind(this);
            this._mouseOver.addTransition('mouseleave', this.initial);
            this._mouseOver.addTransition('mousedown', this.mouseDown);
        }
        return this._mouseOver;
    }

    private mouseOverEnter(): void {
        this.host.addEventListener('mouseleave', this.send);
        this.host.addEventListener('mousedown', this.send);
    }

    private mouseOverExit(): void {
        this.host.removeEventListener('mouseleave', this.send);
        this.host.removeEventListener('mousedown', this.send);
    }

    private _mouseDown!: IState;

    private get mouseDown(): IState {
        if (!this._mouseDown) {
            this._mouseDown = new State('mouseDown');
            this._mouseDown.enterState = this.mouseDownEnter.bind(this);
            this._mouseDown.exitState = this.mouseDownExit.bind(this);
            this._mouseDown.addTransition('mouseup', this.mouseOver);
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

    private _touchDown!: IState;

    private get touchDown(): IState {
        if (!this._touchDown) {
            this._touchDown = new State('touchDown');
            this._touchDown.enterState = this.touchDownEnter.bind(this);
            this._touchDown.exitState = this.touchDownExit.bind(this);
            this._touchDown.addTransition('touchend', this.initial);
        }
        return this._touchDown;
    }

    private touchDownEnter(): void {
        window.addEventListener('touchend', this.send);
    }

    private touchDownExit(): void {
        window.removeEventListener('touchend', this.send);
    }
}
