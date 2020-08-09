import DisplayContainer from '../containers/DisplayContainer';
import ShapeElementInterface from '../svg/ShapeElementInterface';
import ShapeElement from '../svg/ShapeElement';
import AnchorLayout from '../layouts/AnchorLayout';
import RippleElementInterface from '../elements/RippleElementInterface';
import RippleElement from '../elements/RippleElement';
import HSL from '../design/color/HSL';
import PointerElement from '../elements/PointerElement';
import PointInterface from '../vo/PointInterface';

export default class RippleComponent extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'RippleComponent';
        this.layout = new AnchorLayout();
        this.pointerElement.addEventListener(PointerElement.DOWN, this.pointerDown.bind(this) as EventListener);
        this.pointerElement.addEventListener(PointerElement.TRIGGERED, this.pointerTriggered.bind(this) as EventListener);
        this.pointerElement.addEventListener(PointerElement.LEAVE, this.pointerLeave.bind(this) as EventListener);
        this.addElement(this.shapeElement);
        this.addElement(this.rippleElement);
        this.addElement(this.pointerElement);
    }

    protected pointerDown(e: CustomEvent<PointInterface>): void {
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

    private _shapeElement!: ShapeElementInterface;

    protected get shapeElement(): ShapeElementInterface {
        if (!this._shapeElement) {
            this._shapeElement = new ShapeElement();
            this._shapeElement.fillColor = this.theme.colors.secondary.medium;
            this._shapeElement.percentWidth = 100;
            this._shapeElement.percentHeight = 100;
            this._shapeElement.cornerRadius = 32;
        }
        return this._shapeElement;
    }

    private _rippleElement!: RippleElementInterface

    protected get rippleElement(): RippleElementInterface {
        if (!this._rippleElement) {
            this._rippleElement = new RippleElement();
            this._rippleElement.percentWidth = 100;
            this._rippleElement.percentHeight = 100;
            this._rippleElement.cornerRadius = 32;
            this._rippleElement.rippleColor = HSL.WHITE;
        }
        return this._rippleElement;
    }

    private _pointerElement!: ShapeElementInterface;

    protected get pointerElement(): ShapeElementInterface {
        if (!this._pointerElement) {
            this._pointerElement = new PointerElement();
            this._pointerElement.percentWidth = 100;
            this._pointerElement.percentHeight = 100;
            this._pointerElement.cornerRadius = 32;
        }
        return this._pointerElement;
    }
}
customElements.define('ripple-component', RippleComponent);
