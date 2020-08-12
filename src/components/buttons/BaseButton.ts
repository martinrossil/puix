import DisplayContainer from '../../containers/DisplayContainer';
import AnchorLayout from '../../layouts/AnchorLayout';
import ShapeElementInterface from '../../svg/ShapeElementInterface';
import DisplayContainerInterface from '../../containers/DisplayContainerInterface';
import IconElementInterface from '../../elements/IconElementInterface';
import TextElementInterface from '../../text/TextElementInterface';
import ShapeElement from '../../svg/ShapeElement';
import IconElement from '../../elements/IconElement';
import TextElement from '../../text/TextElement';
import HorizontalLayout from '../../layouts/HorizontalLayout';
import VerticalAlign from '../../consts/VerticalAlign';
import BaseButtonInterface from './BaseButtonInterface';
import RippleElementInterface from '../../elements/RippleElementInterface';
import RippleElement from '../../elements/RippleElement';

export default class BaseButton extends DisplayContainer implements BaseButtonInterface {
    public constructor() {
        super();
        this.name = 'BaseButton';
        this.minWidth = 36;
        this.minHeight = 36;
        this.cornerSize = 4;
        this.rippleColor = 'white';
        this.layout = new AnchorLayout();
        this.shapeElement.percentWidth = 100;
        this.shapeElement.percentHeight = 100;
        this.iconElement.setSize(18, 18);
        this.labelElement.fontSize = 14;
        this.labelElement.fontWeight = 500;
        this.labelElement.wordwrap = false;
        this.rippleElement.percentWidth = 100;
        this.rippleElement.percentHeight = 100;
        this.iconLabelContainer.horizontalCenter = 0;
        this.iconLabelContainer.verticalCenter = 0;
        this.iconLabelContainer.layout = new HorizontalLayout(8, VerticalAlign.MIDDLE);
        this.iconLabelContainer.layout.paddingLeft = 16;
        this.iconLabelContainer.layout.paddingRight = 16;
        this.iconLabelContainer.addElement(this.labelElement);
        this.addElements([this.shapeElement, this.iconLabelContainer, this.rippleElement]);
    }

    protected shapeElement: ShapeElementInterface = new ShapeElement();

    private iconLabelContainer: DisplayContainerInterface = new DisplayContainer();

    private iconElement: IconElementInterface = new IconElement();

    private labelElement: TextElementInterface = new TextElement();

    private rippleElement: RippleElementInterface = new RippleElement();

    private _icon = '';

    public set icon(value: string) {
        if (this._icon !== value) {
            if (this._icon && value) {
                this.iconElement.icon = value;
            } else if (!this._icon && value) {
                this.iconLabelContainer.addElementAt(this.iconElement, 0);
                this.iconElement.icon = value;
            } else if (this._icon && !value) {
                this.iconLabelContainer.removeElement(this.iconElement);
            }
            this._icon = value;
        }
    }

    public get icon(): string {
        return this._icon;
    }

    public set label(value: string) {
        this.labelElement.text = value;
    }

    public get label(): string {
        return this.labelElement.text;
    }

    public set labelColor(value: string) {
        this.labelElement.color = value;
    }

    public get labelColor(): string {
        return this.labelElement.color;
    }

    public set iconColor(value: string) {
        this.iconElement.color = value;
    }

    public get iconColor(): string {
        return this.iconElement.color;
    }

    public set cornerSize(value: number) {
        this.shapeElement.cornerRadius = value;
    }

    public get cornerSize(): number {
        return this.shapeElement.cornerRadius;
    }

    public set backgroundColor(value: string) {
        this.shapeElement.fillColor = value;
    }

    public get backgroundColor(): string {
        return this.shapeElement.fillColor;
    }

    public set backgroundColorOpacity(value: number) {
        this.shapeElement.fillOpacity = value;
    }

    public get backgroundColorOpacity(): number {
        return this.shapeElement.fillOpacity;
    }

    public set strokeColor(value: string) {
        this.shapeElement.strokeColor = value;
    }

    public get strokeColor(): string {
        return this.shapeElement.strokeColor;
    }

    public set strokeOpacity(value: number) {
        this.shapeElement.strokeOpacity = value;
    }

    public get strokeOpacity(): number {
        return this.shapeElement.strokeOpacity;
    }

    public set strokeWidth(value: number) {
        this.shapeElement.strokeWidth = value;
    }

    public get strokeWidth(): number {
        return this.shapeElement.strokeWidth;
    }

    public set rippleColor(value: string) {
        this.rippleElement.rippleColor = value;
    }

    public get rippleColor(): string {
        return this.rippleElement.rippleColor;
    }
}
customElements.define('base-button', BaseButton);
