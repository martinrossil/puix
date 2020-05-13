import ApplicationElement from './containers/ApplicationElement';
import AnchorLayout from './layouts/AnchorLayout';
import Theme from './design/Theme';
import Color from './design/Color';
import IDisplayContainer from './interfaces/IDisplayContainer';
import DisplayContainer from './containers/DisplayContainer';
import IDisplayElement from './interfaces/IDisplayElement';
import DisplayElement from './core/DisplayElement';
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
        const vdc: IDisplayContainer = new DisplayContainer();
        vdc.backgroundColor = Color.WHITE;
        vdc.z = 2;
        vdc.layout = new VerticalLayout();
        vdc.layout.padding = 20;
        vdc.layout.verticalGap = 20;
        vdc.layout.horizontalAlign = HorizontalAlign.FILL;
        vdc.percentWidth = 100;
        // vdc.horizontalCenter = vdc.verticalCenter = 0;
        const d1: IDisplayElement = new DisplayElement();
        d1.backgroundColor = 'red';
        d1.setSize(300, 100);
        const d2: IDisplayElement = new DisplayElement();
        d2.backgroundColor = 'green';
        d2.setSize(200, 100);
        const d3: IDisplayElement = new DisplayElement();
        d3.backgroundColor = 'blue';
        d3.percentWidth = 50;
        d3.height = 100;
        const d4: IDisplayElement = new DisplayElement();
        d4.backgroundColor = 'yellow';
        d4.height = 100;
        d4.percentWidth = 25;
        vdc.addElements([d1, d2, d3, d4]);
        this.addElement(vdc);
    }
}
customElements.define('puix-dev', PuixDev);
