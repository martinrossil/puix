import DisplayContainer from '../containers/DisplayContainer';
import IButtonComponent from '../interfaces/components/IButtonComponent';
import ITextElement from '../interfaces/text/ITextElement';
import TextElement from '../text/TextElement';
import FontWeight from '../design/typography/FontWeight';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import IIconElement from '../interfaces/elements/IIconElement';
import IconElement from '../elements/IconElement';
import HorizontalLayout from '../layouts/HorizontalLayout';
import VerticalAlign from '../consts/VerticalAlign';
import AnchorLayout from '../layouts/AnchorLayout';
import IColorRange from '../interfaces/design/color/IColorRange';
import HSL from '../design/color/HSL';
import IRippleElement from '../interfaces/elements/IRippleElement';
import RippleElement from '../elements/RippleElement';
import IShapeElement from '../interfaces/svg/IShapeElement';
import ShapeElement from '../svg/ShapeElement';
import PointerElement from '../elements/PointerElement';
import IPoint from '../interfaces/vo/IPoint';

export default class ButtonComponent extends DisplayContainer implements IButtonComponent {
    static FILL = 'fill';
    static OUTLINE = 'outline';
    static TEXT = 'text';

    public constructor() {
        super();
        this.name = 'ButtonComponent';
        this.minWidth = 36;
        this.minHeight = 36;
        this.borderRadius = 4;
        this.backgroundColor = this.colorRange.medium;
        this.layout = new AnchorLayout();
        this.labelColor = HSL.WHITE;
        this.addElement(this.iconLabelContainer);
        this.addElement(this.shapeElement);
        this.addElement(this.rippleElement);
        this.addElement(this.pointerElement)
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

    public set borderRadius(value: number) {
        super.borderRadius = value;
        this.shapeElement.cornerRadius = value;
        this.rippleElement.cornerRadius = value;
        this.pointerElement.cornerRadius = value;
    }

    private _icon = '';

    public set icon(value: string) {
        if (this._icon !== value) {
            this._icon = value;
            this.iconElement.icon = value;
            if (value) {
                this.iconElement.visible = true;
                this.iconElement.includeInLayout = true;
            } else {
                this.iconElement.visible = false;
                this.iconElement.includeInLayout = false;
            }
            if (value && this.label) {
                this.iconLabelContainer.layout.paddingLeft = 12;
            } else {
                this.iconLabelContainer.layout.paddingLeft = 16;
            }
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
            if (value) {
                this.labelElement.visible = true;
                this.labelElement.includeInLayout = true;
            } else {
                this.labelElement.visible = false;
                this.labelElement.includeInLayout = false;
            }
            if (value && this.icon) {
                this.iconLabelContainer.layout.paddingLeft = 12;
            } else {
                this.iconLabelContainer.layout.paddingLeft = 16;
            }
        }
    }

    public get label(): string {
        return this.labelElement.text;
    }

    private _iconLabelContainer!: IDisplayContainer;

    protected get iconLabelContainer(): IDisplayContainer {
        if (!this._iconLabelContainer) {
            this._iconLabelContainer = new DisplayContainer();
            this._iconLabelContainer.layout = new HorizontalLayout(8, VerticalAlign.MIDDLE);
            this._iconLabelContainer.layout.paddingLeft = 16;
            this._iconLabelContainer.layout.paddingRight = 16;
            this._iconLabelContainer.percentHeight = 100;
            this._iconLabelContainer.addElement(this.iconElement);
            this._iconLabelContainer.addElement(this.labelElement);
        }
        return this._iconLabelContainer;
    }

    private _iconElement!: IIconElement;

    protected get iconElement(): IIconElement {
        if (!this._iconElement) {
            this._iconElement = new IconElement();
            this._iconElement.setSize(this.iconSize, this.iconSize);
            this._iconElement.visible = false;
            this._iconElement.includeInLayout = false;
        }
        return this._iconElement;
    }

    private _labelElement!: ITextElement;

    protected get labelElement(): ITextElement {
        if (!this._labelElement) {
            this._labelElement = new TextElement();
            this._labelElement.wordwrap = false;
            this._labelElement.fontWeight = FontWeight.MEDIUM;
            this._labelElement.fontSize = 14;
            this._labelElement.visible = false;
            this._labelElement.includeInLayout = false;
            this._labelElement.letterSpacing = 1;
        }
        return this._labelElement;
    }

    private _shapeElement!: IShapeElement;

    protected get shapeElement(): IShapeElement {
        if (!this._shapeElement) {
            this._shapeElement = new ShapeElement();
            this._shapeElement.strokeWidth = 1.3;
            this._shapeElement.strokeColor = this.colorRange.medium;
            this._shapeElement.fillColor = HSL.NONE;
            this._shapeElement.percentWidth = 100;
            this._shapeElement.percentHeight = 100;
            this._shapeElement.visible = false;
        }
        return this._shapeElement;
    }

    private _rippleElement!: IRippleElement;

    protected get rippleElement(): IRippleElement {
        if (!this._rippleElement) {
            this._rippleElement = new RippleElement();
            this._rippleElement.percentWidth = 100;
            this._rippleElement.percentHeight = 100;
        }
        return this._rippleElement;
    }

    private _pointerElement!: IShapeElement;

    protected get pointerElement(): IShapeElement {
        if (!this._pointerElement) {
            this._pointerElement = new PointerElement();
            this._pointerElement.percentWidth = 100;
            this._pointerElement.percentHeight = 100;
            this._pointerElement.addEventListener(PointerElement.DOWN, this.pointerDown.bind(this) as EventListener);
            this._pointerElement.addEventListener(PointerElement.TRIGGERED, this.pointerTriggered.bind(this) as EventListener);
            this._pointerElement.addEventListener(PointerElement.LEAVE, this.pointerLeave.bind(this) as EventListener);
        }
        return this._pointerElement;
    }

    private _labelColor = '';

    public set labelColor(value: string) {
        if (this._labelColor !== value) {
            this._labelColor = value;
            this.labelElement.color = value;
            this.iconElement.color = value;
            this.rippleElement.rippleColor = value;
        }
    }

    public get labelColor(): string {
        return this._labelColor;
    }

    private _colorRange: IColorRange = this.theme.colors.secondary;

    public set colorRange(value: IColorRange) {
        if (this._colorRange !== value) {
            this._colorRange = value;
            this.backgroundColor = value.medium;
        }
    }

    public get colorRange(): IColorRange {
        return this._colorRange;
    }

    private _buttonType = ButtonComponent.FILL;

    public set buttonType(value: string) {
        if (this._buttonType !== value) {
            this._buttonType = value;
            if (value === ButtonComponent.OUTLINE) {
                this.backgroundColor = '';
                this.shapeElement.visible = true;
                this.iconElement.color = this.colorRange.medium;
                this.labelElement.color = this.colorRange.medium;
                this.rippleElement.rippleColor = this.colorRange.medium;
            }
        }
    }

    public get buttonType(): string {
        return this._buttonType;
    }

    private _iconSize = 18;

    public set iconSize(value: number) {
        if (this._iconSize !== value) {
            this._iconSize = value;
            this.iconElement.setSize(value, value);
        }
    }

    public get iconSize(): number {
        return this._iconSize;
    }
}
customElements.define('button-component', ButtonComponent);
