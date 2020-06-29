import IEventDispatcher from '../core/IEventDispatcher';
import IState from './IState';

export default interface IStateMachine extends IEventDispatcher {
    initial: IState;
    current: IState;
    states: Set<IState>;
    addState(state: IState): void;
    start(): void;
    stop(): void;
    send(e: Event): void;
}
