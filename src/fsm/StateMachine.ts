import EventDispatcher from '../core/EventDispatcher';
import StateMachineInterface from './StateMachineInterface';
import StateInterface from './StateInterface';

export default class StateMachine extends EventDispatcher implements StateMachineInterface {
    private host: HTMLElement;
    public initial: StateInterface;
    public current: StateInterface;
    public states: Set<StateInterface> = new Set();
    public constructor(initial: StateInterface, host: HTMLElement) {
        super();
        this.host = host;
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
    }

    public stop(): void {
        console.log('stop()');
    }

    public send(e: Event): void {
        console.log('send()', e.type);
        const state: StateInterface = this.current.getState(e.type);
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
