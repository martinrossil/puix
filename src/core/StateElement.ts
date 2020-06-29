import EventDispatcherElement from './EventDispatcherElement';

export default class StateElement extends EventDispatcherElement {
    public constructor() {
        super();
    }
}
customElements.define('state-element', StateElement);
