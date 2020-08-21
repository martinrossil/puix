import EventDispatcher from '../core/EventDispatcher';
import IStateMachine from './IStateMachine';
import IState from './IState';

export default class StateMachine extends EventDispatcher implements IStateMachine {
    public static STATE_CHANGED = 'StateMachine.STATE_CHANGED';

    public initial: IState;
    public current: IState;
    public states: Set<IState> = new Set();

    public constructor(initial: IState) {
        super();
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
        this.dispatchEventWith(StateMachine.STATE_CHANGED, this.current);
    }

    public stop(): void {
        console.log('stop()');
    }

    public send(e: Event): void {
        const state: IState = this.current.getState(e.type);
        if (this.current !== state) {
            this.current = state;
            this.dispatchEventWith(StateMachine.STATE_CHANGED, state);
        }
    }
}
