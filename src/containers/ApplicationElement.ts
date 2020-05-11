import DisplayContainer from './DisplayContainer';
import Events from '../enums/Events';
import Overflow from '../enums/Overflow';

export default class ApplicationElement extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ApplicationElement';
        document.body.style.setProperty('position', 'absolute');
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
        document.body.style.setProperty('margin', '0');
        window.addEventListener(Events.RESIZE, () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
        this.setSize(window.innerWidth, window.innerHeight);
        this.overflow = Overflow.HIDDEN;
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.dispatchEventWith(Events.APPLICATION_COMPLETE);
    }

    public set backgroundColor(value: string) {
        document.body.style.setProperty('background-color', value);
    }

    public get backgroundColor(): string {
        return document.body.style.getPropertyValue('background-color');
    }
}
customElements.define('application-element', ApplicationElement);
