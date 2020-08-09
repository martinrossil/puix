import EventDispatcherInterface from './EventDispatcherInterface';

export default interface LifeCycleElementInterface extends EventDispatcherInterface {
    connected: boolean;
}
