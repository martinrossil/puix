import ApplicationElement from './containers/ApplicationElement';
import Theme from './design/Theme';
import Color from './design/Color';
import IDisplayElement from './interfaces/IDisplayElement';
import DisplayElement from './core/DisplayElement';
import AnchorLayout from './layouts/AnchorLayout';
import { IDisplayContainer, DisplayContainer } from './index';
import AnchorLayoutData from './layouts/AnchorLayoutData';

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
        dc.layoutData = new AnchorLayoutData();
        dc.layoutData.percentWidth = 100;
        dc.layoutData.percentHeight = 100;
        // dc.setSize(300, NaN);
        dc.layout = new AnchorLayout();
        // dc.layout.padding = 10;
        dc.backgroundColor = Color.WHITE;
        dc.z = 2;
        const d: IDisplayElement = new DisplayElement();
        d.backgroundColor = 'red';
        // d.setSize(200, 200);
        dc.addElement(d);
        d.layoutData = new AnchorLayoutData(NaN, NaN, 0, 0, NaN, NaN, 50, 50);
        this.addElement(dc);
    }
}
customElements.define('puix-dev', PuixDev);
