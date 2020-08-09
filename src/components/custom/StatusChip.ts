import DisplayContainer from '../../containers/DisplayContainer';
import TextElementInterface from '../../text/TextElementInterface';
import TextElement from '../../text/TextElement';
import FontWeight from '../../design/typography/FontWeight';
import AnchorLayout from '../../layouts/AnchorLayout';

export default class StatusChip extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'StatusChip';
        this.layout = new AnchorLayout();
        this.layout.paddingLeft = this.layout.paddingRight = 10;
        this.height = 18;
        this.borderRadius = 9;
        this.right = 12;
        this.verticalCenter = 0;
        this.backgroundColor = this.theme.colors.success.lightest;
        this.addElement(this.textElement);
    }

    protected get textElement(): TextElementInterface {
        const textElement: TextElementInterface = new TextElement();
        textElement.text = 'Inactive';
        textElement.color = this.theme.colors.success.darkest;
        textElement.fontSize = this.theme.typography.fontSizes.xSmall;
        textElement.fontWeight = FontWeight.BOLD;
        textElement.verticalCenter = 0;
        return textElement;
    }
}
customElements.define('status-chip', StatusChip);
