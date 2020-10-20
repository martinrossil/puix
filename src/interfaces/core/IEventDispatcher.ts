import IEventListener from '../events/IEventListener';

export default interface IEventDispatcher {
    dispatchEvent(event: Event): boolean;
    dispatchEventWith<T>(typeArg: string, payload: T | null, bubbles: boolean): void;
    addEventListener(type: string, listener: IEventListener): void;
    removeEventListener(type: string, listener: IEventListener): void;
    name: string;
}
