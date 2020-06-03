import DisplayContainer from '../containers/DisplayContainer';
import IButtonElement from '../interfaces/components/IButtonElement';
import ITextElement from '../interfaces/text/ITextElement';
import TextElement from '../text/TextElement';
import IIconElement from '../interfaces/elements/IIconElement';
import IconElement from '../elements/IconElement';
import IShapeElement from '../interfaces/svg/IShapeElement';
import ShapeElement from '../svg/ShapeElement';
import AnchorLayout from '../layouts/AnchorLayout';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import AnchorLayoutData from '../layouts/AnchorLayoutData';
import HorizontalLayout from '../layouts/HorizontalLayout';
import VerticalAlign from '../consts/VerticalAlign';

export default class ButtonElement extends DisplayContainer implements IButtonElement {
    public constructor() {
        super();
        this.name = 'ButtonElement';
        this.setButton();
        this.setShape();
        this.setIcon();
        this.setLabel();
        this.setContainer();
        this.addChildren();
    }

    protected setButton(): void {
        this.minWidth = 36;
        this.minHeight = 36;
        this.layout = new AnchorLayout();
        this.color = this.theme.colors.onSecondary;
    }

    protected setShape(): void {
        this.shapeElement.percentWidth = 100;
        this.shapeElement.percentHeight = 100;
        this.backgroundColor = this.theme.colors.secondary.c500;
    }

    protected setIcon(): void {
        this.iconElement.setSize(18, 18);
    }

    protected setLabel(): void {
        this.labelElement.text = this.label;
        this.labelElement.letterHeight = 10;
        this.labelElement.fontWeight = 500;
        this.labelElement.wordwrap = false;
    }

    protected setContainer(): void {
        this.iconLabelContainer.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        this.iconLabelContainer.layout = new HorizontalLayout(8, VerticalAlign.MIDDLE);
        this.iconLabelContainer.layout.paddingLeft = 16;
        this.iconLabelContainer.layout.paddingRight = 16;
    }

    protected addChildren(): void {
        this.iconLabelContainer.addElement(this.labelElement);
        this.addElements([this.shapeElement, this.iconLabelContainer]);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        console.log(this.name, 'updateDisplay()', this.actualWidth, this.actualHeight);
    }

    private shapeElement: IShapeElement = new ShapeElement();

    private iconLabelContainer: IDisplayContainer = new DisplayContainer();

    private iconElement: IIconElement = new IconElement();

    private labelElement: ITextElement = new TextElement();

    private _label = 'BUTTON';

    public set label(value: string) {
        if (this._label !== value) {
            this._label = value;
            this.labelElement.text = value;
        }
    }

    public get label(): string {
        return this._label;
    }

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
        this._backgroundColor = value;
        this.shapeElement.fillColor = value;
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }
}
customElements.define('button-element', ButtonElement);
