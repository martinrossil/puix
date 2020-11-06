import { Events } from '../enums/Events';
import EventDispatcher from '../events/EventDispatcher';
import IEventDispatcher from '../interfaces/events/IEventDispatcher';
import IFSM from '../interfaces/fsm/IFSM';
import IState from '../interfaces/fsm/IState';
import State from './State';

export default class FSM extends EventDispatcher implements IFSM {
    protected host: IEventDispatcher;
    public current: IState;
    private states: Set<IState> = new Set();
    public constructor(host: IEventDispatcher) {
        super();
        this.host = host;
        this.current = this.initial;
        this.addState(this.initial);
        this.send = this.send.bind(this);
    }

    protected readonly initial: IState = new State('initial');

    protected addState(state: IState): void {
        this.states.add(state);
    }

    protected send(e: Event): void {
        const state: IState = this.current.getState(e.type);
        if (this.current !== state) {
            if (this.current.exitState) {
                this.current.exitState(state, e);
            }
            const previous: IState = this.current;
            this.current = state;
            if (this.current.enterState) {
                this.current.enterState(previous, e);
            }
            this.dispatchCustomEvent(Events.STATE_CHANGED, state);
        }
    }
}
