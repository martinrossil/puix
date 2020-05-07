import LayoutContainer from './LayoutContainer';
import Styles from '../enums/Styles';
import Values from '../enums/Values';
import Events from '../enums/Events';

export default class ApplicationElement extends LayoutContainer {
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
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.dispatchEventWith(Events.APPLICATION_COMPLETE);
    }
}
customElements.define('application-element', ApplicationElement);
