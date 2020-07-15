import DisplayContainer from '../../containers/DisplayContainer';
import ITextElement from '../../interfaces/text/ITextElement';
import TextElement from '../../text/TextElement';
import FontWeight from '../../design/typography/FontWeight';

export default class StatusChip extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'StatusChip';
        this.layout.paddingTop = this.layout.paddingBottom = 7;
        this.layout.paddingLeft = this.layout.paddingRight = 10;
        this.borderRadius = 12;
        this.right = 12;
        this.verticalCenter = 0;
        this.backgroundColor = this.theme.colors.success.lightest;
        this.addElement(this.textElement);
    }

    protected get textElement(): ITextElement {
        const textElement: ITextElement = new TextElement();
        textElement.text = 'Inactive';
        textElement.color = this.theme.colors.success.darkest;
        textElement.fontSize = 10;
        textElement.fontWeight = FontWeight.BOLD;
        return textElement;
    }
}
customElements.define('status-chip', StatusChip);
