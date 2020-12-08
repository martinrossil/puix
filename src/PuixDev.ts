import ApplicationElement from './containers/ApplicationElement';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = '#F7FAFC';
        // Testing commit
    }
}
customElements.define('puix-dev', PuixDev);
