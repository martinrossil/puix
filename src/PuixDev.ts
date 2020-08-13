import ApplicationElement from './containers/ApplicationElement';
import TextElementInterface from './text/TextElementInterface';
import TextElement from './text/TextElement';
import FontWeight from './consts/FontWeight';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        // this.addElement(this.textElement);
        this.addElement(this.textElementMedium);
        // this.addElement(this.textElementBold);
    }

    private _textElement!: TextElementInterface;

    protected get textElement(): TextElementInterface {
        if (!this._textElement) {
            this._textElement = new TextElement();
            this._textElement.backgroundColor = 'hsla(0, 100%, 50%, 0.4)';
            this._textElement.text = 'Katrine'; // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            this._textElement.fontSize = 100;
            this._textElement.lineHeight = 100;
            this._textElement.horizontalCenter = 0;
            this._textElement.verticalCenter = -125;
            this._textElement.capHeight = 0.727;
            this._textElement.verticalOffset = 0.002;
            this.textElement.horizontalOffset = 0.121;
            this._textElement.color = 'hsla(180, 100%, 50%, 0.4)';
        }
        return this._textElement;
    }

    private _textElementMedium!: TextElementInterface;

    protected get textElementMedium(): TextElementInterface {
        if (!this._textElementMedium) {
            this._textElementMedium = new TextElement();
            this._textElementMedium.backgroundColor = 'hsla(0, 100%, 50%, 0.4)';
            this._textElementMedium.text = 'HH'; // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            this._textElementMedium.fontSize = 300;
            this._textElementMedium.lineHeight = 300;
            this._textElementMedium.fontWeight = FontWeight.MEDIUM;
            this._textElementMedium.horizontalCenter = 0;
            this._textElementMedium.verticalCenter = 0;
            this._textElementMedium.capHeight = 0.727;
            this._textElementMedium.verticalOffset = 0.000;
            this._textElementMedium.horizontalOffset = 0.11;
            this._textElementMedium.color = 'hsla(180, 100%, 50%, 0.4)';
        }
        return this._textElementMedium;
    }

    private _textElementBold!: TextElementInterface;

    protected get textElementBold(): TextElementInterface {
        if (!this._textElementBold) {
            this._textElementBold = new TextElement();
            this._textElementBold.backgroundColor = 'hsla(0, 100%, 50%, 0.4)';
            this._textElementBold.text = 'Katrine'; // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            this._textElementBold.fontSize = 100;
            this._textElementBold.lineHeight = 100;
            this._textElementBold.fontWeight = FontWeight.BOLD;
            this._textElementBold.horizontalCenter = 0;
            this._textElementBold.verticalCenter = 125;
            this._textElementBold.capHeight = 0.727;
            this._textElementBold.verticalOffset = 0.002;
            this._textElementBold.horizontalOffset = 0.086;
            this._textElementBold.color = 'hsla(180, 100%, 50%, 0.4)';
        }
        return this._textElementBold;
    }
}
customElements.define('puix-dev', PuixDev);
