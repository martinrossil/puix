import EventDispatcherInterface from '../core/EventDispatcherInterface';
import StateInterface from './StateInterface';

export default interface StateMachineInterface extends EventDispatcherInterface {
    initial: StateInterface;
    current: StateInterface;
    states: Set<StateInterface>;
    addState(state: StateInterface): void;
    start(): void;
    stop(): void;
    send(e: Event): void;
}
