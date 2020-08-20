import ApplicationElement from './containers/ApplicationElement';
import DisplayElement from './core/DisplayElement';
import DisplayElementInterface from './core/DisplayElementInterface';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        const de: DisplayElementInterface = new DisplayElement();
        de.setSize(300, 300);
        de.horizontalCenter = 0;
        de.verticalCenter = 0;
        this.addElement(de);
    }
}
customElements.define('puix-dev', PuixDev);
