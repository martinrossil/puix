import ApplicationElement from './containers/ApplicationElement';
import Appbar from './components/custom/AppBar';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(new Appbar());
    }
}
customElements.define('puix-dev', PuixDev);
