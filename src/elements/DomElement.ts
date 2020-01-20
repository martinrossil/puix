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
    }

    protected connectedToDom(): void {
        // override in sub classes
    }

    /**
     * Invoked each time the custom element is disconnected from the document's DOM.
     */
    protected disconnectedCallback(): void {
        this.connected = false;
    }

    protected disconnectedFromDom(): void {
        // override in sub classes
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
        if (value) {
            this.connectedToDom();
        } else {
            this.disconnectedFromDom();
        }
    }

    public get connected(): boolean {
        return this._connected;
    }

    protected propertiesInvalid = false;

    protected invalidateProperties(): void {
        if (!this.propertiesInvalid) {
            this.propertiesInvalid = true;
            setTimeout(() => {
                this.commitProperties();
            }, 0);
        }
    }

    protected commitProperties(): void {
        // override
        console.log('DomElement commitProperties()', this);
    }
}
customElements.define('dom-element', DomElement);
