import DisplayContainer from '../../containers/DisplayContainer';
import TextElementInterface from '../../text/TextElementInterface';
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

    protected get titleTextElement(): TextElementInterface {
        const titleTextElement: TextElementInterface = new TextElement();
        titleTextElement.text = 'Total Subscribers';
        titleTextElement.wordwrap = false;
        titleTextElement.fontWeight = 700;
        titleTextElement.fontSize = 12;
        titleTextElement.lineHeight = 20;
        return titleTextElement;
    }

    protected get valueTextElement(): TextElementInterface {
        const valueTextElement: TextElementInterface = new TextElement();
        valueTextElement.text = '71,897';
        valueTextElement.wordwrap = false;
        valueTextElement.fontWeight = 700;
        valueTextElement.fontSize = 24;
        valueTextElement.lineHeight = 32;
        return valueTextElement;
    }
}
customElements.define('value-box', ValueBox);
