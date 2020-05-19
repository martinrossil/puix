import ApplicationElement from './containers/ApplicationElement';
import Theme from './design/Theme';
import Color from './design/Color';
import AnchorLayout from './layouts/AnchorLayout';
import { IDisplayContainer, DisplayContainer } from './index';
import IDisplayElement from './interfaces/IDisplayElement';
import DisplayElement from './core/DisplayElement';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import VerticalLayout from './layouts/VerticalLayout';
import HorizontalAlign from './consts/HorizontalAlign';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        Theme.NEUTRAL_COLOR = new Color(217, 10);
        Theme.PRIMARY_COLOR = new Color(234);
        this.backgroundColor = Theme.NEUTRAL_COLOR.index[0];
        this.name = 'PuixDev';
        this.layout = new AnchorLayout();
        this.layout.padding = 20;
        const dc: IDisplayContainer = new DisplayContainer();
        dc.backgroundColor = Color.WHITE;
        dc.z = 2;
        dc.layout = new VerticalLayout(10, HorizontalAlign.FILL);
        dc.layout.padding = 10;
        dc.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        // dc.width = 300;
        // dc.percentWidth = 75;
        dc.percentHeight = 75;
        const d: IDisplayElement = new DisplayElement();
        d.backgroundColor = 'red';
        // d.setSize(200, 200);
        // d.height = 200;
        d.percentHeight = 100;
        // d.percentWidth = 50;
        const d2: IDisplayElement = new DisplayElement();
        d2.backgroundColor = 'blue';
        d2.setSize(150, 150);
        // d2.height = 150;

        // d2.percentWidth = 100;
        const d3: IDisplayElement = new DisplayElement();
        d3.backgroundColor = 'green';
        d3.percentHeight = 100;
        // d3.percentWidth = 50;
        // d3.setSize(300, 100);
        // d3.layoutData = new AnchorLayoutData(NaN, NaN, 0, 0);
        dc.addElements([d, d2, d3]);
        this.addElement(dc);
    }
}
customElements.define('puix-dev', PuixDev);
