import DisplayContainer from '../../containers/DisplayContainer';
import AnchorLayout from '../../layouts/AnchorLayout';
import IShapeElement from '../../interfaces/svg/IShapeElement';
import IDisplayContainer from '../../interfaces/containers/IDisplayContainer';
import IIconElement from '../../interfaces/elements/IIconElement';
import ITextElement from '../../interfaces/text/ITextElement';
import ShapeElement from '../../svg/ShapeElement';
import IconElement from '../../elements/IconElement';
import TextElement from '../../text/TextElement';
import AnchorLayoutData from '../../layouts/AnchorLayoutData';
import HorizontalLayout from '../../layouts/HorizontalLayout';
import VerticalAlign from '../../consts/VerticalAlign';
import IBaseButton from '../../interfaces/components/buttons/IBaseButton';
import CornerType from '../../consts/CornerType';

export default class BaseButton extends DisplayContainer implements IBaseButton {
    public constructor() {
        super();
        this.name = 'BaseButton';
        this.minWidth = 36;
        this.minHeight = 36;
        this.cornerType = CornerType.ROUNDED;
        this.cornerSize = 4;
        this.layout = new AnchorLayout();
        this.shapeElement.percentWidth = 100;
        this.shapeElement.percentHeight = 100;
        this.iconElement.setSize(18, 18);
        this.labelElement.fontSize = 14;
        this.labelElement.fontWeight = 500;
        this.labelElement.wordwrap = false;
        this.iconLabelContainer.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        this.iconLabelContainer.layout = new HorizontalLayout(8, VerticalAlign.MIDDLE);
        this.iconLabelContainer.layout.paddingLeft = 16;
        this.iconLabelContainer.layout.paddingRight = 16;
        this.iconLabelContainer.addElement(this.labelElement);
        this.addElements([this.shapeElement, this.iconLabelContainer]);
    }

    protected shapeElement: IShapeElement = new ShapeElement();

    private iconLabelContainer: IDisplayContainer = new DisplayContainer();

    private iconElement: IIconElement = new IconElement();

    private labelElement: ITextElement = new TextElement();

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

    private _label = '';

    public set label(value: string) {
        if (this._label !== value) {
            this._label = value;
            this.labelElement.text = value;
        }
    }

    public get label(): string {
        return this._label;
    }

    private _color = '';

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.iconElement.color = value;
            this.labelElement.color = value;
        }
    }

    public get color(): string {
        return this._color;
    }

    public set cornerType(value: number) {
        this.shapeElement.cornerType = value;
    }

    public get cornerType(): number {
        return this.shapeElement.cornerType;
    }

    public set cornerSize(value: number) {
        this.shapeElement.cornerSize = value;
    }

    public get cornerSize(): number {
        return this.shapeElement.cornerSize;
    }

    private _backgroundColor = '';

    public set backgroundColor(value: string) {
        if (this._backgroundColor !== value) {
            this._backgroundColor = value;
            this.shapeElement.fillColor = value;
        }
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }
}
customElements.define('base-button', BaseButton);
