import ApplicationElement from './containers/ApplicationElement';
import DisplayContainer from './containers/DisplayContainer';
import DisplayElement from './core/DisplayElement';
import { Layout } from './enums/Layout';
import IDisplayContainer from './interfaces/containers/IDisplayContainer';
import IDisplayElement from './interfaces/core/IDisplayElement';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = '#F7FAFC';
        const d: IDisplayElement = new DisplayElement();
        d.setSize(200, 200);
        d.backgroundColor = 'red';
        const d2: IDisplayElement = new DisplayElement();
        d2.setSize(100, 100);
        d2.backgroundColor = 'blue';
        const dc: IDisplayContainer = new DisplayContainer();
        dc.backgroundColor = 'green';
        dc.horizontalCenter = 0;
        dc.verticalCenter = 0;
        dc.padding = 20;
        dc.gap = 20;
        dc.layout = Layout.HORIZONTAL;
        dc.addElements([d, d2]);
        this.addElement(dc);
    }
}
customElements.define('puix-dev', PuixDev);
