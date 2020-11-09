import EventDispatcher from '../events/EventDispatcher';
import IEventDispatcher from '../interfaces/events/IEventDispatcher';
import IFSM from '../interfaces/fsm/IFSM';
import IState from '../interfaces/fsm/IState';
import State from './State';

export default class FSM extends EventDispatcher implements IFSM {
    public static STATE_CHANGED = 'stateChanged';
    public current: IState;
    protected host: IEventDispatcher;

    public constructor(host: IEventDispatcher) {
        super();
        this.host = host;
        this.current = this.initial;
        this.send = this.send.bind(this);
    }

    protected readonly initial: IState = new State('initial');

    protected send(e: Event): void {
        const state: IState = this.current.getState(e.type);
        if (this.current !== state) {
            if (this.current.exit) {
                this.current.exit(e);
            }
            this.current = state;
            if (this.current.enter) {
                this.current.enter(e);
            }
            this.dispatchCustomEvent(FSM.STATE_CHANGED, state);
            if (this.current.on) {
                this.current.on(e);
            }
        }
    }
}
