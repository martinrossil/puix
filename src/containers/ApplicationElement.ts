import DisplayContainer from './DisplayContainer';

export default class ApplicationElement extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ApplicationElement';
        document.body.style.setProperty('position', 'absolute');
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
        document.body.style.setProperty('margin', '0');
        window.addEventListener('resize', () => {
            this.setExplicitSize(window.innerWidth, window.innerHeight);
        });
        this.setExplicitSize(window.innerWidth, window.innerHeight);
        // this.overflow = 'hidden';
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.dispatchEventWith('applicationComplete');
    }

    public set backgroundColor(value: string) {
        document.body.style.setProperty('background-color', value);
    }

    public get backgroundColor(): string {
        return document.body.style.getPropertyValue('background-color');
    }
}
customElements.define('application-element', ApplicationElement);
