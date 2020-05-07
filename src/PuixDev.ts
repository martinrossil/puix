import ApplicationElement from './containers/ApplicationElement';
import ITextElement from './interfaces/ITextElement';
import TextElement from './text/TextElement';
import AnchorLayout from './layouts/AnchorLayout';
import IAnchorLayoutData from './interfaces/IAnchorLayoutData';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import FontWeight from './enums/FontWeight';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.layout = new AnchorLayout();
        const textElement: ITextElement = new TextElement();
        textElement.text = 'HÅÆ ØxTX jgq PTH';
        textElement.fontSize = 32;
        textElement.truncate = true;
        textElement.width = 200;
        textElement.fontWeight = FontWeight.BOLD;
        const layoutData: IAnchorLayoutData = new AnchorLayoutData();
        layoutData.horizontalCenter = 0;
        layoutData.verticalCenter = 0;
        textElement.layoutData = layoutData;
        this.addElement(textElement);
    }
}
customElements.define('puix-dev', PuixDev);
