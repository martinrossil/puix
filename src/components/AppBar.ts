import Icons from '../design/icon/Icons';
import DisplayContainer from '../containers/DisplayContainer';
import IIconElement from '../interfaces/elements/IIconElement';
import IconElement from '../elements/IconElement';
import ITextElement from '../interfaces/text/ITextElement';
import TextElement from '../text/TextElement';
import HSL from '../design/color/HSL';
import HorizontalLayout from '../layouts/HorizontalLayout';
import VerticalAlign from '../consts/VerticalAlign';

export default class Appbar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'AppBar';
        this.layout = new HorizontalLayout(16, VerticalAlign.MIDDLE);
        this.layout.paddingLeft = 16;
        this.z = 2;
        this.percentWidth = 100;
        this.height = 64;
        this.backgroundColor = this.theme.colors.neutral.c700;
        this.addElement(this.iconElement);
        this.addElement(this.textElement);
    }

    protected get iconElement(): IIconElement {
        const iconElement: IIconElement = new IconElement();
        iconElement.setSize(32, 32);
        iconElement.icon = Icons.PUIX;
        iconElement.color = this.theme.colors.primary.c500;
        return iconElement;
    }

    protected get textElement(): ITextElement {
        const textElement: ITextElement = new TextElement();
        textElement.text = 'Pui/x';
        textElement.color = HSL.WHITE;
        textElement.fontWeight = 700;
        textElement.letterHeight = 24;
        return textElement;
    }
}
customElements.define('app-bar', Appbar);
