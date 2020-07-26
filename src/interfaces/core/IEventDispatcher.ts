export default interface IEventDispatcher {
    dispatchEventWith(typeArg: string, payload: unknown, bubbles: boolean): void;
    addEventListener(type: string, listener: Function): void;
    removeEventListener(type: string, listener: Function): void;
    name: string;
}
