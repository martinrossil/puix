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
import IPoint from '../interfaces/vo/IPoint';
import { IHitlayer } from '..';

export default class RippleComponent extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'RippleComponent';
        this.layout = new AnchorLayout();
        this.addEventListener(Events.POINTER_DOWN, this.pointerDown as EventListener);
        this.addEventListener(Events.POINTER_TRIGGERED, this.pointerTriggered as EventListener);
        this.addEventListener(Events.POINTER_LEAVE, this.pointerLeave as EventListener);
        this.addElement(this.shapeElement);
        this.addElement(this.rippleElement);
        this.addElement(this.hitLayer);
    }

    protected pointerDown(e: CustomEvent<IPoint>): void {
        e.stopPropagation();
        this.rippleElement.show(e.detail);
    }

    protected pointerTriggered(): void {
        this.rippleElement.hide();
    }

    protected pointerLeave(e: CustomEvent): void {
        e.stopPropagation();
        this.rippleElement.hide();
    }

    private _shapeElement!: IShapeElement;

    protected get shapeElement(): IShapeElement {
        if (!this._shapeElement) {
            this._shapeElement = new ShapeElement();
            this._shapeElement.fillColor = this.theme.colors.secondary.c500;
            this._shapeElement.percentWidth = 100;
            this._shapeElement.percentHeight = 100;
            this._shapeElement.cornerType = CornerType.CUT;
            this._shapeElement.cornerSize = 75;
            this._shapeElement.filter = new ShadowFilter(0, 4, 8, '#000', 0.5);
        }
        return this._shapeElement;
    }

    private _rippleElement!: IRippleElement

    protected get rippleElement(): IRippleElement {
        if (!this._rippleElement) {
            this._rippleElement = new RippleElement();
            this._rippleElement.percentWidth = 100;
            this._rippleElement.percentHeight = 100;
            this._rippleElement.cornerType = CornerType.CUT;
            this._rippleElement.cornerSize = 75;
            this._rippleElement.rippleColor = HSL.WHITE;
        }
        return this._rippleElement;
    }

    private _hitLayer!: IHitLayer;

    protected get hitLayer(): IHitlayer {
        if (!this._hitLayer) {
            this._hitLayer = new HitLayer();
            this._hitLayer.percentWidth = 100;
            this._hitLayer.percentHeight = 100;
            this._hitLayer.cornerType = CornerType.CUT;
            this._hitLayer.cornerSize = 75;
        }
        return this._hitLayer;
    }
}
customElements.define('ripple-component', RippleComponent);
