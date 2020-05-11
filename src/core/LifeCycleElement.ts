import EventDispatcherElement from './EventDispatcherElement';
import ILifeCycleElement from '../interfaces/ILifeCycleElement';

export default class LifeCycleElement extends EventDispatcherElement implements ILifeCycleElement {
    public constructor() {
        super();
        this.name = 'LifeCycleElement';
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * This will happen each time the node is moved, and may happen before the element's
     * contents have been fully parsed.
     */
    protected connectedCallback(): void {
        this.connected = true;
        // console.log(this.name, 'connectedCallback()');
    }

    /**
     * Invoked each time the custom element is disconnected from the document's DOM.
     */
    protected disconnectedCallback(): void {
        this.connected = false;
    }

    /**
     * The connected property of the Connectable interface returns a boolean
     * indicating whether the DomElement is connected (directly or indirectly)
     * to the context object, for example the Document object in the case of the normal DOM,
     * or the ShadowRoot in the case of a shadow DOM.
     */
    private _connected = false;

    public set connected(value: boolean) {
        this._connected = value;
    }

    public get connected(): boolean {
        return this._connected;
    }
}
customElements.define('lifecycle-element', LifeCycleElement);
