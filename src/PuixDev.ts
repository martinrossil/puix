import ApplicationElement from './containers/ApplicationElement';
import { FontWeight } from './enums/FontWeight';
import { TextAlign } from './enums/TextAlign';
import ILabelElement from './interfaces/text/ILabelElement';
import ITextElement from './interfaces/text/ITextElement';
import LabelElement from './text/LabelElement';
import TextElement from './text/TextElement';
import TypeFace from './text/TypeFace';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = '#F7FAFC';
        const textElement: ITextElement = new TextElement();
        textElement.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        textElement.verticalGap = -8;
        textElement.horizontalCenter = 0;
        textElement.verticalCenter = 0;
        textElement.percentWidth = 80;
        textElement.fontSize = 16;
        textElement.textAlign = TextAlign.JUSTIFY;
        textElement.textColor = 'blue';
        textElement.typeFace = new TypeFace('Arial', FontWeight.LIGHT_300, 0.715, 0.11, 0.027);
        this.addElement(textElement);
        const labelElement: ILabelElement = new LabelElement();
        labelElement.text = 'HejÅæH';
        labelElement.horizontalCenter = 0;
        labelElement.verticalCenter = 0;
        labelElement.fontSize = 100;
        labelElement.typeFace = new TypeFace('Arial', FontWeight.LIGHT_300, 0.715, 0.11, 0.027);
        labelElement.textColor = 'hsla(270, 100%, 50%, 0.5)';
        this.addElement(labelElement);
    }
}
customElements.define('puix-dev', PuixDev);
