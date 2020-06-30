import Icons from '../../design/icon/Icons';
import DisplayContainer from '../../containers/DisplayContainer';
import IIconElement from '../../interfaces/elements/IIconElement';
import IconElement from '../../elements/IconElement';
import ITextElement from '../../interfaces/text/ITextElement';
import TextElement from '../../text/TextElement';
import HSL from '../../design/color/HSL';
import HorizontalLayout from '../../layouts/HorizontalLayout';
import VerticalAlign from '../../consts/VerticalAlign';
import IShapeElement from '../../interfaces/svg/IShapeElement';
import ShapeElement from '../../svg/ShapeElement';
import ShadowFilter from '../../svg/filters/ShadowFilter';
import IDisplayContainer from '../../interfaces/containers/IDisplayContainer';
import AnchorLayout from '../../layouts/AnchorLayout';

export default class Appbar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'AppBar';
        this.layout = new AnchorLayout();
        this.percentWidth = 100;
        this.height = 64;
        this.addElement(this.shapeElement);
        this.addElement(this.horizontalContainer);
    }

    private _horizontalContainer!: IDisplayContainer;

    protected get horizontalContainer(): IDisplayContainer {
        if (!this._horizontalContainer) {
            this._horizontalContainer = new DisplayContainer();
            this._horizontalContainer.percentWidth = 100;
            this._horizontalContainer.percentHeight = 100;
            this._horizontalContainer.layout = new HorizontalLayout(16, VerticalAlign.MIDDLE);
            this._horizontalContainer.layout.paddingLeft = 16;
            this._horizontalContainer.addElements([this.iconElement, this.textElement]);
        }
        return this._horizontalContainer;
    }

    private _shapeElement!: IShapeElement;

    protected get shapeElement(): IShapeElement {
        if (!this._shapeElement) {
            this._shapeElement = new ShapeElement();
            this._shapeElement.fillColor = this.theme.colors.secondary.c500;
            this._shapeElement.percentWidth = 100;
            this._shapeElement.percentHeight = 100;
            this._shapeElement.filter = new ShadowFilter(0, 4, 8, '#000', 0.5);
        }
        return this._shapeElement;
    }

    private _iconElement!: IIconElement;

    protected get iconElement(): IIconElement {
        if (!this._iconElement) {
            this._iconElement = new IconElement();
            this._iconElement.setSize(32, 32);
            this._iconElement.icon = Icons.PUIX;
            this._iconElement.color = this.theme.colors.primary.c500;
        }
        return this._iconElement;
    }

    private _textElement!: ITextElement;

    protected get textElement(): ITextElement {
        if (!this._textElement) {
            this._textElement = new TextElement();
            this._textElement.text = 'Pui/x';
            this._textElement.color = HSL.WHITE;
            this._textElement.fontWeight = 700;
            this._textElement.fontSize = 24;
        }
        return this._textElement;
    }
}
customElements.define('app-bar', Appbar);
