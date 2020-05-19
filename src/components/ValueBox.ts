import DisplayContainer from '../containers/DisplayContainer';
import ITextElement from '../interfaces/ITextElement';
import TextElement from '../text/TextElement';
import Theme from '../design/Theme';

export default class ValueBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ValueBox';
        this.x = 76;
        this.y = 4;
        this.addElement(this.titleTextElement);
        this.addElement(this.valueTextElement);
    }

    protected get titleTextElement(): ITextElement {
        const titleTextElement: ITextElement = new TextElement();
        titleTextElement.text = 'Total Subscribers';
        titleTextElement.whiteSpace = 'nowrap';
        titleTextElement.fontWeight = 700;
        titleTextElement.color = Theme.NEUTRAL_COLOR.index[4];
        return titleTextElement;
    }

    protected get valueTextElement(): ITextElement {
        const valueTextElement: ITextElement = new TextElement();
        valueTextElement.text = '71,897';
        valueTextElement.whiteSpace = 'nowrap';
        valueTextElement.y = 22;
        valueTextElement.fontWeight = 700;
        valueTextElement.fontSize = 34;
        valueTextElement.color = Theme.NEUTRAL_COLOR.index[9];
        return valueTextElement;
    }
}
customElements.define('value-box', ValueBox);
