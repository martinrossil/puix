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

export default class ButtonComponent extends DisplayContainer implements IButtonComponent {
    public constructor() {
        super();
        this.backgroundColor = 'hsla(0, 100%, 50%, 0.2)';
        this.name = 'ButtonComponent';
        this.minWidth = 64;
        this.minHeight = 36;
        this.layout = new AnchorLayout();
        this.layout.paddingLeft = 16;
        this.layout.paddingRight = 16
        this.addElement(this.iconLabelContainer);
    }

    private _icon = '';

    public set icon(value: string) {
        if (this._icon !== value) {
            if (this._icon && value) {
                this.iconElement.icon = value;
                this.layout.paddingLeft = 12;
            } else if (!this._icon && value) {
                this.iconLabelContainer.addElementAt(this.iconElement, 0);
                this.iconElement.icon = value;
                this.layout.paddingLeft = 12;
            } else if (this._icon && !value) {
                this.iconLabelContainer.removeElement(this.iconElement);
                this.layout.paddingLeft = 16;
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

    private _iconLabelContainer!: IDisplayContainer;

    protected get iconLabelContainer(): IDisplayContainer {
        if (!this._iconLabelContainer) {
            this._iconLabelContainer = new DisplayContainer();
            this._iconLabelContainer.layout = new HorizontalLayout(8, VerticalAlign.MIDDLE);
            this._iconLabelContainer.verticalCenter = 0;
            this._iconLabelContainer.horizontalCenter = 0;
            this._iconLabelContainer.addElement(this.labelElement);
        }
        return this._iconLabelContainer;
    }

    private _iconElement!: IIconElement;

    protected get iconElement(): IIconElement {
        if (!this._iconElement) {
            this._iconElement = new IconElement();
            this._iconElement.setSize(18, 18);
        }
        return this._iconElement;
    }

    private _labelElement!: ITextElement;

    protected get labelElement(): ITextElement {
        if (!this._labelElement) {
            this._labelElement = new TextElement();
            this._labelElement.wordwrap = false;
            this._labelElement.fontWeight = FontWeight.MEDIUM;
            this._labelElement.fontSize = this.theme.typography.fontSizes.small;
        }
        return this._labelElement;
    }
}
customElements.define('button-component', ButtonComponent);
