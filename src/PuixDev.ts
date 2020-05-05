import LayoutContainer from './core/LayoutContainer';

export default class PuixDev extends LayoutContainer {
    public constructor() {
        super();
        this.name = 'PuixDev';
    }
}
customElements.define('puix-dev', PuixDev);
