import DisplayContainer from '../containers/DisplayContainer';
import IShapeElement from '../interfaces/svg/IShapeElement';
import ShapeElement from '../svg/ShapeElement';
import AnchorLayout from '../layouts/AnchorLayout';
import IRippleElement from '../interfaces/elements/IRippleElement';
import RippleElement from '../elements/RippleElement';
import CornerType from '../consts/CornerType';
import HSL from '../design/color/HSL';
import ShadowFilter from '../svg/filters/ShadowFilter';
import IHitLayer from '../interfaces/elements/IPointerElement';
import PointerElement from '../elements/PointerElement';
import IPoint from '../interfaces/vo/IPoint';
import IPointerElement from '../interfaces/elements/IPointerElement';

export default class RippleComponent extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'RippleComponent';
        this.layout = new AnchorLayout();
        this.addEventListener(PointerElement.DOWN, this.pointerDown as EventListener);
        this.addEventListener(PointerElement.TRIGGERED, this.pointerTriggered as EventListener);
        this.addEventListener(PointerElement.LEAVE, this.pointerLeave as EventListener);
        this.addElement(this.shapeElement);
        this.addElement(this.rippleElement);
        this.addElement(this.pointerElement);
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
            this._shapeElement.fillColor = this.theme.colors.secondary.medium;
            this._shapeElement.percentWidth = 100;
            this._shapeElement.percentHeight = 100;
            this._shapeElement.cornerType = CornerType.ROUNDED;
            this._shapeElement.cornerSize = 32;
            this._shapeElement.filter = new ShadowFilter(0, 6, 12, this.theme.colors.secondary.medium, 0.7);
        }
        return this._shapeElement;
    }

    private _rippleElement!: IRippleElement

    protected get rippleElement(): IRippleElement {
        if (!this._rippleElement) {
            this._rippleElement = new RippleElement();
            this._rippleElement.percentWidth = 100;
            this._rippleElement.percentHeight = 100;
            this._rippleElement.cornerType = CornerType.ROUNDED;
            this._rippleElement.cornerSize = 32;
            this._rippleElement.rippleColor = HSL.WHITE;
        }
        return this._rippleElement;
    }

    private _pointerElement!: IHitLayer;

    protected get pointerElement(): IPointerElement {
        if (!this._pointerElement) {
            this._pointerElement = new PointerElement();
            this._pointerElement.percentWidth = 100;
            this._pointerElement.percentHeight = 100;
            this._pointerElement.cornerType = CornerType.ROUNDED;
            this._pointerElement.cornerSize = 32;
        }
        return this._pointerElement;
    }
}
customElements.define('ripple-component', RippleComponent);
