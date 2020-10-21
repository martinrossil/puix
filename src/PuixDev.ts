import ApplicationElement from './containers/ApplicationElement';
import DisplayContainer from './containers/DisplayContainer';
import DisplayElement from './core/DisplayElement';
import { HorizontalAlign } from './enums/HorizontalAlign';
import { Layout } from './enums/Layout';
import { VerticalAlign } from './enums/VerticalAlign';
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
        dc.padding = 20;
        dc.gap = 20;
        dc.layout = Layout.HORIZONTAL;
        dc.verticalAlign = VerticalAlign.MIDDLE;
        dc.addElements([d, d2]);
        const d3: IDisplayElement = new DisplayElement();
        d3.setSize(150, 150);
        d3.backgroundColor = 'black';
        const d4: IDisplayElement = new DisplayElement();
        d4.setSize(50, 50);
        d4.backgroundColor = 'cyan';
        const dc2: IDisplayContainer = new DisplayContainer();
        dc2.backgroundColor = 'purple';
        dc2.layout = Layout.HORIZONTAL;
        dc2.verticalAlign = VerticalAlign.MIDDLE;
        dc2.padding = 20;
        dc2.gap = 20;
        dc2.addElements([d3, d4]);
        const dc3: IDisplayContainer = new DisplayContainer();
        dc3.backgroundColor = 'yellow';
        dc3.horizontalCenter = 0;
        dc3.verticalCenter = 0;
        dc3.padding = 20;
        dc3.gap = 20;
        dc3.layout = Layout.VERTICAL;
        dc3.horizontalAlign = HorizontalAlign.CENTER;
        dc3.addElements([dc, dc2]);
        this.addElement(dc3);
    }
}
customElements.define('puix-dev', PuixDev);
