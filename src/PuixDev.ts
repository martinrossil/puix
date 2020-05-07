import ApplicationElement from './containers/ApplicationElement';
import ITextElement from './interfaces/ITextElement';
import TextElement from './text/TextElement';
import FontDescription from './text/FontDescription';
import AnchorLayout from './layouts/AnchorLayout';
import IAnchorLayoutData from './interfaces/IAnchorLayoutData';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import FontWeight from './enums/FontWeight';
import WhiteSpace from './enums/WhiteSpace';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.layout = new AnchorLayout();
        const textElement: ITextElement = new TextElement();
        textElement.text = 'HÅÆ ØxTX jgq PTH';
        textElement.fontSize = 64;
        // textElement.truncate = true;
        // textElement.width = 200;
        textElement.fontDescription = new FontDescription('"Montserrat", sans-serif', 0.7013, -0.0117);
        textElement.whiteSpace = WhiteSpace.NO_WRAP;
        textElement.fontWeight = FontWeight.BOLD;
        const layoutData: IAnchorLayoutData = new AnchorLayoutData();
        layoutData.horizontalCenter = 0;
        layoutData.verticalCenter = -50;
        textElement.layoutData = layoutData;
        this.addElement(textElement);
        const montTextElement: ITextElement = new TextElement();
        const ldm: IAnchorLayoutData = new AnchorLayoutData();
        ldm.horizontalCenter = 0;
        ldm.verticalCenter = 50;
        montTextElement.text = 'HÅÆ ØxTX jgq PTH';
        montTextElement.fontSize = 64;
        montTextElement.layoutData = ldm;
        montTextElement.whiteSpace = WhiteSpace.NO_WRAP;
        montTextElement.fontDescription = new FontDescription('"Montserrat", sans-serif', 0.7013, -0.0117);
        this.addElement(montTextElement);
    }
}
customElements.define('puix-dev', PuixDev);
