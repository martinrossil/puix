import DisplayContainer from '../containers/DisplayContainer';
import IShapeElement from '../interfaces/svg/IShapeElement';
import ShapeElement from '../svg/ShapeElement';
import AnchorLayout from '../layouts/AnchorLayout';
import IRippleElement from '../interfaces/elements/IRippleElement';
import RippleElement from '../elements/RippleElement';
import CornerType from '../consts/CornerType';
import HSL from '../design/color/HSL';
import ShadowFilter from '../svg/filters/ShadowFilter';
import IHitLayer from '../interfaces/elements/IHitlayer';
import HitLayer from '../elements/HitLayer';
import Events from '../consts/Events';

export default class RippleComponent extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'RippleComponent';
        this.layout = new AnchorLayout();
        this.shapeElement.fillColor = this.theme.colors.secondary.c500;
        this.shapeElement.percentWidth = 100;
        this.shapeElement.percentHeight = 100;
        this.shapeElement.cornerType = CornerType.CUT;
        this.shapeElement.cornerSize = 75;
        this.shapeElement.filter = new ShadowFilter(0, 4, 8, '#000', 0.5);
        this.rippleElement.percentWidth = 100;
        this.rippleElement.percentHeight = 100;
        this.rippleElement.cornerType = CornerType.CUT;
        this.rippleElement.cornerSize = 75;
        this.rippleElement.rippleColor = HSL.WHITE;
        this.hitLayer.percentWidth = 100;
        this.hitLayer.percentHeight = 100;
        this.hitLayer.cornerType = CornerType.CUT;
        this.hitLayer.cornerSize = 75;
        this.addEventListener(Events.POINTER_DOWN, this.pointerDown as EventListener);
        this.addEventListener(Events.POINTER_TRIGGERED, this.pointerTriggered as EventListener);
        this.addElement(this.shapeElement);
        this.addElement(this.rippleElement);
        this.addElement(this.hitLayer);
    }

    protected pointerDown(e: CustomEvent): void {
        e.stopPropagation();
        this.rippleElement.show(e.detail);
        console.log(this.name, e.type, e.detail);
    }

    protected pointerTriggered(e: CustomEvent): void {
        e.stopPropagation();
        this.rippleElement.hide();
    }

    private shapeElement: IShapeElement = new ShapeElement();

    private rippleElement: IRippleElement = new RippleElement();

    private hitLayer: IHitLayer = new HitLayer();
}
customElements.define('ripple-component', RippleComponent);
