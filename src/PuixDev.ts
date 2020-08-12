import ApplicationElement from './containers/ApplicationElement';
import TextElementInterface from './text/TextElementInterface';
import TextElement from './text/TextElement';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(this.textElement);
    }

    private _textElement!: TextElementInterface;

    protected get textElement(): TextElementInterface {
        if (!this._textElement) {
            this._textElement = new TextElement();
            // this._textElement.backgroundColor = 'hsla(0, 100%, 50%, 0.2)';
            this._textElement.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            // this._textElement.fontSize = 100;
            // this._textElement.lineHeight = 100;
            // this._textElement.top = 100;
            // this._textElement.horizontalCenter = 0;
            // this._textElement.verticalCenter = 0;
            this._textElement.percentWidth = 80;
            // this._textElement.letterSpacing = 2;
            // this._textElement.capHeight = 0.73;
            // his._textElement.verticalTextOffset = 0.044;
            // this._textElement.lineHeight = 19.2;
            // this._textElement.letterSpacing = 10
            // this.textElement.percentHeight = 100;
            // this.textElement.percentWidth = 100;
        }
        return this._textElement;
    }
}
customElements.define('puix-dev', PuixDev);
