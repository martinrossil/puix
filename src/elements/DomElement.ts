import IDomElement from '../interfaces/IDomElement';

export default class DomElement extends HTMLElement implements IDomElement {
    public constructor() {
        super();
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * This will happen each time the node is moved, and may happen before the element's
     * contents have been fully parsed.
     */
    protected connectedCallback(): void {
        this.connected = true;
        if (!this.initialized) {
            this.initialize();
        }
    }

    protected initialized = false;

    protected initialize(): void {
        this.initialized = true;
        this.invalidateProperties();
        // override in sub classes
        // console.log('DomElement initialize()');
    }

    protected commitProperties(): void {
        // override
        // console.log('DomElement commitProperties()', this);
    }

    /**
     * Invoked each time the custom element is disconnected from the document's DOM.
     */
    protected disconnectedCallback(): void {
        this.connected = false;
    }

    public dispatchEventWith(typeArg: string, payload: unknown = null): void {
        const eventInitDict: CustomEventInit = { bubbles: true, detail: payload };
        const customEvent: CustomEvent = new CustomEvent(typeArg, eventInitDict);
        this.dispatchEvent(customEvent);
    }

    /**
     * The connected property of the Connectable interface returns a boolean
     * indicating whether the DomElement is connected (directly or indirectly)
     * to the context object, for example the Document object in the case of the normal DOM,
     * or the ShadowRoot in the case of a shadow DOM.
     */
    private _connected = false;

    public set connected(value: boolean) {
        if (this._connected === value) {
            return;
        }
        this._connected = value;
    }

    public get connected(): boolean {
        return this._connected;
    }

    protected propertiesInvalid = false;

    protected invalidateProperties(): void {
        if (!this.initialized) {
            return;
        }
        if (!this.propertiesInvalid) {
            this.propertiesInvalid = true;
            setTimeout(() => {
                this.propertiesInvalid = false;
                this.commitProperties();
            }, 0);
        }
    }
}
customElements.define('dom-element', DomElement);
