import IEventDispatcher from './IEventDispatcher';

export default interface ILifeCycleElement extends IEventDispatcher {
    connected: boolean;
}
