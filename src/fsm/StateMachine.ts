import EventDispatcher from '../core/EventDispatcher';
import IStateMachine from '../interfaces/fsm/IStateMachine';
import IState from '../interfaces/fsm/IState';

export default class StateMachine extends EventDispatcher implements IStateMachine {
    private host: HTMLElement;
    public initial: IState;
    public current: IState;
    public states: Set<IState> = new Set();
    public constructor(initial: IState, host: HTMLElement) {
        super();
        this.host = host;
        this.initial = initial;
        this.current = initial;
        this.states.add(initial);
    }

    public addState(state: IState): IStateMachine {
        this.states.add(state);
        return this;
    }

    public start(): void {
        console.log('start()');
    }

    public stop(): void {
        console.log('stop()');
    }

    public send(e: Event): void {
        console.log('send()', e.type);
        const state: IState = this.current.getState(e.type);
        if (this.current !== state) {
            if (this.current.exit) {
                this.current.exit.call(this.host, e);
            }
            this.current = state;
            if (this.current.enter) {
                this.current.enter.call(this.host, e);
            }
            console.log('state changed', this.current);
        }
    }
}
