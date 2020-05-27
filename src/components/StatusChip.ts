import DisplayContainer from '../containers/DisplayContainer';
import ITextElement from '../interfaces/text/ITextElement';
import TextElement from '../text/TextElement';
import AnchorLayoutData from '../layouts/AnchorLayoutData';

export default class StatusChip extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'StatusChip';
        this.backgroundColor = this.theme.colors.success.c100;
        this.layout.paddingTop = this.layout.paddingBottom = 7;
        this.layout.paddingLeft = this.layout.paddingRight = 10;
        this.cornerRadius = 12;
        this.layoutData = new AnchorLayoutData(NaN, NaN, 13.5, NaN, NaN, 0);
        this.addElement(this.textElement);
    }

    protected get textElement(): ITextElement {
        const textElement: ITextElement = new TextElement();
        textElement.text = 'Inactive';
        textElement.color = this.theme.colors.success.c600;
        textElement.letterHeight = 9;
        textElement.fontWeight = 700;
        return textElement;
    }
}
customElements.define('status-chip', StatusChip);
