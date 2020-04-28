import IEventDispatcher from './IEventDispatcher';

export default interface ILifeCycleElement extends IEventDispatcher {
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(): void;
    invalidateProperties(): void;
    validatePropertiesLater(): void;
    commitProperties(): void;
    dispose(): void;
    connected: boolean;
    initialized: boolean;
    hasPropertiesChanged: boolean;
}
