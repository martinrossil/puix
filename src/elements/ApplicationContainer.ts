import DisplayContainer from './DisplayContainer';

export default class ApplicationContainer extends DisplayContainer {
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
}
customElements.define('application-container', ApplicationContainer);
