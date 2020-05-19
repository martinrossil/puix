import DisplayContainer from '../containers/DisplayContainer';
import Theme from '../design/Theme';
import ITextElement from '../interfaces/ITextElement';
import TextElement from '../text/TextElement';

export default class StatusChip extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'StatusChip';
        this.backgroundColor = Theme.SUCCESS_COLOR.index[1]
        this.layout.paddingTop = this.layout.paddingBottom = 7;
        this.layout.paddingLeft = this.layout.paddingRight = 10;
        this.cornerRadius = 12;
        this.x = 310;
        this.y = 14;
        this.addElement(this.textElement);
    }

    protected get textElement(): ITextElement {
        const textElement: ITextElement = new TextElement();
        textElement.text = 'Inactive';
        textElement.color = Theme.SUCCESS_COLOR.index[6];
        textElement.fontSize = 12;
        textElement.fontWeight = 700;
        return textElement;
    }
}
customElements.define('status-chip', StatusChip);
