import DisplayContainer from '../containers/DisplayContainer';
import IButtonElement from '../interfaces/components/IButtonElement';
import ITextElement from '../interfaces/text/ITextElement';
import TextElement from '../text/TextElement';
import AnchorLayout from '../layouts/AnchorLayout';
import AnchorLayoutData from '../layouts/AnchorLayoutData';
import HSL from '../design/color/HSL';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import HorizontalLayout from '../layouts/HorizontalLayout';
import IIconElement from '../interfaces/elements/IIconElement';
import IconElement from '../elements/IconElement';
import Icons from '../design/icon/Icons';
import VerticalAlign from '../consts/VerticalAlign';

export default class ButtonElement extends DisplayContainer implements IButtonElement {
    public constructor() {
        super();
        this.name = 'ButtonElement';
        this.minWidth = 64;
        this.minHeight = 36;
        this.backgroundColor = this.theme.colors.primary.c500;
        this.borderRadius = 4;
        this.z = 1.2;
        this.layout = new AnchorLayout();
        this.textElement.letterHeight = 11;
        this.textElement.lineHeight = 20;
        this.textElement.text = this.label;
        this.textElement.fontWeight = 500;
        this.textElement.wordwrap = false;
        this.textElement.color = HSL.WHITE;
        this.textElement.letterSpacing = 1.3;
        this.iconElement.setSize(18, 18);
        this.iconElement.color = HSL.WHITE;
        this.iconElement.icon = Icons.PUIX;
        this.iconLabelContainer.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, NaN, 0);
        this.iconLabelContainer.layout = new HorizontalLayout(8, VerticalAlign.MIDDLE);
        this.iconLabelContainer.layout.paddingLeft = 14;
        this.iconLabelContainer.layout.paddingRight = 16;
        this.iconLabelContainer.addElements([this.iconElement, this.textElement]);
        this.addElement(this.iconLabelContainer);
    }

    private iconLabelContainer: IDisplayContainer = new DisplayContainer();

    private iconElement: IIconElement = new IconElement();

    private textElement: ITextElement = new TextElement();

    private _label = 'BUTTON';

    public set label(value: string) {
        if (this._label !== value) {
            this._label = value;
            this.textElement.text = value;
        }
    }

    public get label(): string {
        return this._label;
    }

    private _icon = '';

    public set icon(value: string) {
        if (this._icon !== value) {
            this._icon = value;
            this.iconElement.icon = value;
        }
    }

    public get icon(): string {
        return this._icon;
    }
}
customElements.define('button-element', ButtonElement);
