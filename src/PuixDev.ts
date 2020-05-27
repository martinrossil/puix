import ApplicationElement from './containers/ApplicationElement';
import AnchorLayout from './layouts/AnchorLayout';
import DataCard from './components/DataCard';
import Appbar from './components/AppBar';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = this.theme.colors.neutral.c50;
        this.layout = new AnchorLayout();
        this.addElement(new Appbar());
        this.addElement(new DataCard());
    }
}
customElements.define('puix-dev', PuixDev);
