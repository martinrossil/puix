import IEventDispatcher from '../events/IEventDispatcher';

export default interface ILifeCycleElement extends IEventDispatcher {
    connected: boolean;
}
