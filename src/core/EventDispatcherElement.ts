import IEventDispatcher from '../interfaces/core/IEventDispatcher';

export default class EventDispatcherElement extends HTMLElement implements IEventDispatcher {
    public constructor() {
        super();
    }

    public dispatchEventWith<T>(typeArg: string, payload: T | undefined = undefined, bubbles = false): void {
        const customEvent: CustomEvent<T> = new CustomEvent<T>(typeArg, { bubbles: bubbles, detail: payload });
        this.dispatchEvent(customEvent);
    }

    private _name = '';

    public set name(value: string) {
        if (this._name !== value) {
            this._name = value;
        }
    }

    public get name(): string {
        return this._name;
    }
}
customElements.define('event-dispatcher-element', EventDispatcherElement);
