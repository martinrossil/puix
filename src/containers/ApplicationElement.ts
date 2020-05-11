import DisplayContainer from './DisplayContainer';
import Styles from '../enums/Styles';
import Values from '../enums/Values';
import Events from '../enums/Events';
import Overflow from '../enums/Overflow';

export default class ApplicationElement extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ApplicationElement';
        document.body.style.setProperty(Styles.POSITION, Values.ABSOLUTE);
        document.body.style.setProperty(Styles.WEBKIT_OVERFLOW_SCROLLING, Values.TOUCH);
        document.body.style.setProperty(Styles.MARGIN, Values.ZERO);
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
