import { Events } from '../enums/Events';
import IApplicationElement from '../interfaces/containers/IApplicationElement';
import DisplayContainer from './DisplayContainer';

export default class ApplicationElement extends DisplayContainer implements IApplicationElement {
    public constructor() {
        super();
        this.name = 'ApplicationElement';
        document.body.style.setProperty('position', 'absolute');
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
        document.body.style.setProperty('-webkit-tap-highlight-color', 'transparent');
        document.body.style.setProperty('-moz-tap-highlight-color', 'transparent');
        document.body.style.setProperty('margin', '0');
        this.clip = true;
        window.addEventListener('resize', this.updateSize.bind(this));
        this.updateSize();
    }

    public connectedCallback(): void {
        super.connectedCallback();
        this.dispatchEventWith(Events.APPLICATION_COMPLETE);
    }

    private updateSize(): void {
        this.setSize(window.innerWidth, window.innerHeight);
    }

    public set backgroundColor(value: string) {
        document.body.style.setProperty('background-color', value);
    }

    public get backgroundColor(): string {
        return document.body.style.getPropertyValue('background-color');
    }
}
customElements.define('application-element', ApplicationElement);
