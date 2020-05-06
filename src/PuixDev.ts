import ApplicationElement from './core/ApplicationElement';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
    }
}
customElements.define('puix-dev', PuixDev);
