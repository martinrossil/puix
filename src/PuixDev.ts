import ApplicationElement from './containers/ApplicationElement';
import TextElement from './text/TextElement';
import { TextAlign } from './enums/TextAlign';
import FluentTheme from './FluentTheme';
import TextElementInterface from './text/TextElementInterface';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        const te: TextElementInterface = new TextElement();
        te.fontSize = 16;
        te.lineHeight = 28;
        te.fontFamily = FluentTheme.FONT_FAMILY;
        te.capHeight = FluentTheme.FONT_CAP_HEIGHT;
        te.verticalOffset = FluentTheme.FONT_VERICAL_OFFSET;
        te.horizontalOffset = FluentTheme.FONT_400_HORIZONTAL_OFFSET;
        te.percentWidth = 90;
        te.textAlign = TextAlign.JUSTIFY;
        te.textColor = 'hsla(0, 0%, 10%, 1.0)';
        te.text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        te.verticalCenter = 0;
        te.horizontalCenter = 0;
        this.addElement(te);
    }
}
customElements.define('puix-dev', PuixDev);
