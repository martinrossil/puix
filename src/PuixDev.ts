import ApplicationElement from './containers/ApplicationElement';
import DisplayElement from './core/DisplayElement';
import IDisplayElement from './core/IDisplayElement';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        const de: IDisplayElement = new DisplayElement();
        de.setSize(300, 300);
        de.horizontalCenter = 0;
        de.verticalCenter = 0;
        this.addElement(de);
    }
}
customElements.define('puix-dev', PuixDev);
