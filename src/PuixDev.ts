import LayoutContainer from './core/LayoutContainer';
import IDisplayElement from './interfaces/IDisplayElement';
import DisplayElement from './core/DisplayElement';
import AnchorLayout from './layouts/AnchorLayout';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import IAnchorLayoutData from './interfaces/IAnchorLayoutData';

export default class PuixDev extends LayoutContainer {
    public constructor() {
        super();
        this.name = 'PuixDev';
        console.log(this.name, 'super()');
        this.backgroundColor = 'red';
        this.setSize(400, 400);
        /* const green: IDisplayElement = new DisplayElement();
        green.setSize(400, 50);
        green.backgroundColor = 'green';
        this.addElement(green);
        const blue: IDisplayElement = new DisplayElement();
        blue.setSize(50, 400);
        blue.backgroundColor = 'blue';
        this.addElement(blue);
        const yellow: IDisplayElement = new DisplayElement();
        yellow.backgroundColor = 'yellow';
        yellow.layoutData = new AnchorLayoutData();
        yellow.layoutData.percentWidth = 100;
        yellow.layoutData.percentHeight = 100;
        this.addElement(yellow);
        */
        const anchorLayoutData: IAnchorLayoutData = new AnchorLayoutData();
        // anchorLayoutData.left = 0;
        // anchorLayoutData.top = 0;
        anchorLayoutData.right = 0;
        anchorLayoutData.bottom = 0;
        anchorLayoutData.percentWidth = 50;
        anchorLayoutData.percentHeight = 50;
        const brown: IDisplayElement = new DisplayElement();
        brown.backgroundColor = 'brown';
        // brown.maxHeight = 200;
        // brown.maxWidth = 200;
        // brown.setSize(100, 100);
        brown.minHeight = 100;
        brown.minWidth = 100;
        brown.layoutData = anchorLayoutData;
        this.addElement(brown);
        this.layout = new AnchorLayout();
        this.layout.padding = 40;
        // this.layout.paddingTop = 40;
    }
}
customElements.define('puix-dev', PuixDev);
