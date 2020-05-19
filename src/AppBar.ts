import Icons from './Icons';
import DisplayContainer from './containers/DisplayContainer';
import Theme from './design/Theme';
import IIconElement from './interfaces/IIconElement';
import IconElement from './elements/IconElement';
import ITextElement from './interfaces/ITextElement';
import TextElement from './text/TextElement';
import Color from './design/Color';
import LayoutData from './layouts/LayoutData';

export default class Appbar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'AppBar';
        this.layoutData = new LayoutData(100);
        this.height = 64;
        this.backgroundColor = Theme.NEUTRAL_COLOR.index[7];
        this.addElement(this.iconElement);
        this.addElement(this.textElement);
    }

    protected get iconElement(): IIconElement {
        const iconElement: IIconElement = new IconElement();
        iconElement.setSize(32, 32);
        iconElement.setPosition(16, 16);
        iconElement.icon = Icons.PUIX;
        iconElement.color = Theme.PRIMARY_COLOR.index[3];
        return iconElement;
    }

    protected get textElement(): ITextElement {
        const textElement: ITextElement = new TextElement();
        textElement.setPosition(60, 22);
        textElement.text = 'Pui/x';
        textElement.color = Color.WHITE;
        textElement.fontWeight = 700;
        textElement.fontSize = 32;
        return textElement;
    }
}
customElements.define('app-bar', Appbar);
