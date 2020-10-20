import { Overflow } from '../enums/Overflow';
import DisplayContainer from './DisplayContainer';

export default class ApplicationElement extends DisplayContainer {
    public static APPLICATION_COMPLETE = 'applicationComplete';

    public constructor() {
        super();
        this.name = 'ApplicationElement';
        // document.body.style.cssText = '*{position: absolute;margin: 0}';
        document.body.style.setProperty('position', 'absolute');
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
        document.body.style.setProperty('-webkit-tap-highlight-color', 'transparent');
        document.body.style.setProperty('-moz-tap-highlight-color', 'transparent');
        document.body.style.setProperty('margin', '0');
        this.overflow = Overflow.HIDDEN;
        window.addEventListener('resize', () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
        this.setSize(window.innerWidth, window.innerHeight);
        this.dispatchEventWith(ApplicationElement.APPLICATION_COMPLETE);
    }

    public set backgroundColor(value: string) {
        document.body.style.setProperty('background-color', value);
    }

    public get backgroundColor(): string {
        return document.body.style.getPropertyValue('background-color');
    }
}
customElements.define('application-element', ApplicationElement);
