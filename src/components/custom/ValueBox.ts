import DisplayContainer from '../../containers/DisplayContainer';
import ITextElement from '../../interfaces/text/ITextElement';
import TextElement from '../../text/TextElement';
import VerticalLayout from '../../layouts/VerticalLayout';

export default class ValueBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ValueBox';
        this.layout = new VerticalLayout(12);
        this.addElement(this.titleTextElement);
        this.addElement(this.valueTextElement);
    }

    protected get titleTextElement(): ITextElement {
        const titleTextElement: ITextElement = new TextElement();
        titleTextElement.text = 'Total Subscribers';
        titleTextElement.wordwrap = false;
        titleTextElement.fontWeight = 700;
        titleTextElement.letterHeight = 12;
        titleTextElement.lineHeight = 20;
        titleTextElement.color = this.theme.colors.neutral.c400;
        return titleTextElement;
    }

    protected get valueTextElement(): ITextElement {
        const valueTextElement: ITextElement = new TextElement();
        valueTextElement.text = '71,897';
        valueTextElement.wordwrap = false;
        valueTextElement.fontWeight = 700;
        valueTextElement.letterHeight = 24;
        valueTextElement.lineHeight = 32;
        valueTextElement.color = this.theme.colors.neutral.c900;
        return valueTextElement;
    }
}
customElements.define('value-box', ValueBox);
