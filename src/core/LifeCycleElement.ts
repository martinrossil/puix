import EventDispatcherElement from './EventDispatcherElement';
import ILifeCycleElement from '../interfaces/ILifeCycleElement';

export default class LifeCycleElement extends EventDispatcherElement implements ILifeCycleElement {
    public constructor() {
        super();
        this.name = 'LifeCycleElement';
    }

    public connectedCallback(): void {
        console.log(this.name, 'connectedCallback()');
        this.connected = true;
        if (!this.initialized) {
            this.initialized = true;
            this.initialize();
            // this.commitProperties();
        }
    }

    public initialize(): void {
        console.log(this.name, 'initialize()');
        // override
    }

    public invalidateProperties(): void {
        console.log(this.name, 'invalidateProperties()');
        if (!this.hasPropertiesChanged) {
            this.hasPropertiesChanged = true;
            if (this.initialized && this.connected) {
                this.validatePropertiesLater();
            }
        }
        // override
    }

    public validateProperties(): void {
        console.log(this.name, 'validateProperties()');
        if (this.hasPropertiesChanged) {
            this.commitProperties();
        }
    }

    public validatePropertiesLater(): void {
        console.log(this.name, 'validateLater()');
        setTimeout(() => {
            this.commitProperties();
        }, 0);
    }

    public commitProperties(): void {
        console.log(this.name, 'commitProperties()');
        this.hasPropertiesChanged = false;
        // override
    }

    public disconnectedCallback(): void {
        this.connected = false;
    }

    public dispose(): void {
        // override
    }

    private _initialized = false;

    public set initialized(value: boolean) {
        this._initialized = value;
    }

    public get initialized(): boolean {
        return this._initialized;
    }

    private _connected = false;

    public set connected(value: boolean) {
        this._connected = value;
    }

    public get connected(): boolean {
        return this._connected;
    }

    private _hasPropertiesChanged = false;

    public set hasPropertiesChanged(value: boolean) {
        this._hasPropertiesChanged = value;
    }

    public get hasPropertiesChanged(): boolean {
        return this._hasPropertiesChanged;
    }
}
customElements.define('lifecycle-element', LifeCycleElement);