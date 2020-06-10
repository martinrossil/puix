import DisplayContainer from './DisplayContainer';
import Events from '../consts/Events';
import AnchorLayout from '../layouts/AnchorLayout';
import HSL from '../design/color/HSL';

export default class ApplicationElement extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ApplicationElement';
        this.backgroundColor = this.theme.colors.background;
        this.layout = new AnchorLayout();
        document.body.style.setProperty('position', 'absolute');
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
        document.body.style.setProperty('-webkit-tap-highlight-color', HSL.TRANSPARENT);
        document.body.style.setProperty('-moz-tap-highlight-color', HSL.TRANSPARENT);
        document.body.style.setProperty('margin', '0');
        window.addEventListener('resize', () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
        this.setSize(window.innerWidth, window.innerHeight);
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
