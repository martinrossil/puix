import IEventDispatcher from '../interfaces/core/IEventDispatcher';

export default class EventDispatcherElement extends HTMLElement implements IEventDispatcher {
    public constructor() {
        super();
        this.style.position = 'absolute';
    }

    public dispatchEventWith(typeArg: string, payload: unknown = null, bubbles = false): void {
        const customEvent: CustomEvent = new CustomEvent(typeArg, { bubbles: bubbles, detail: payload });
        this.dispatchEvent(customEvent);
    }

    private _name = '';

    public set name(value: string) {
        this._name = value;
    }

    public get name(): string {
        return this._name;
    }
}
customElements.define('event-dispatcher-element', EventDispatcherElement);
