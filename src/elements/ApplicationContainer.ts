import LayoutContainer from './LayoutContainer';

export default class ApplicationContainer extends LayoutContainer {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
        window.addEventListener('resize', () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
        this.setSize(window.innerWidth, window.innerHeight);
    }

    protected internalSizeInvalidChanged(): void {
        super.internalSizeInvalidChanged();
        console.log('ApplicationContainer internalSizeInvalidChanged()');
    }
}
customElements.define('application-container', ApplicationContainer);
