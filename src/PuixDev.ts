import ApplicationElement from './containers/ApplicationElement';
import AnchorLayout from './layouts/AnchorLayout';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import HSL from './design/color/HSL';
import IShapeElement from './interfaces/svg/IShapeElement';
import ShapeElement from './svg/ShapeElement';
import ShadowFilter from './svg/filters/ShadowFilter';
import CornerType from './consts/CornerType';
import IShadowFilter from './interfaces/svg/filters/IShadowFilter';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = this.theme.colors.neutral.c50;
        this.layout = new AnchorLayout();
        const shp: IShapeElement = new ShapeElement();
        shp.setSize(150, 150);
        shp.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        shp.fillColor = HSL.CYAN_500;
        shp.cornerSize = 15;
        shp.cornerType = CornerType.CUT;
        const sf: IShadowFilter = new ShadowFilter(0, -2, 2, HSL.CYAN_900, 0.3);
        shp.filter = sf;
        this.addElement(shp);
    }
}
customElements.define('puix-dev', PuixDev);
