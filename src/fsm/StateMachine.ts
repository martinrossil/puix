import EventDispatcher from '../core/EventDispatcher';
import StateMachineInterface from './StateMachineInterface';
import StateInterface from './StateInterface';

export default class StateMachine extends EventDispatcher implements StateMachineInterface {
    public static STATE_CHANGED = 'StateMachine.STATE_CHANGED';

    public initial: StateInterface;
    public current: StateInterface;
    public states: Set<StateInterface> = new Set();

    public constructor(initial: StateInterface) {
        super();
        this.initial = initial;
        this.current = initial;
        this.states.add(initial);
    }

    public addState(state: StateInterface): StateMachineInterface {
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
        const state: StateInterface = this.current.getState(e.type);
        if (this.current !== state) {
            this.current = state;
            this.dispatchEventWith(StateMachine.STATE_CHANGED, state);
        }
    }
}
