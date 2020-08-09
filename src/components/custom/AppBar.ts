import DisplayContainer from '../../containers/DisplayContainer';
import IconElementInterface from '../../elements/IconElementInterface';
import IconElement from '../../elements/IconElement';
import TextElementInterface from '../../text/TextElementInterface';
import TextElement from '../../text/TextElement';
import HorizontalLayout from '../../layouts/HorizontalLayout';
import VerticalAlign from '../../consts/VerticalAlign';
import ShapeElementInterface from '../../svg/ShapeElementInterface';
import ShapeElement from '../../svg/ShapeElement';
import DisplayContainerInterface from '../../containers/DisplayContainerInterface';
import AnchorLayout from '../../layouts/AnchorLayout';
import HSL from '../../design/color/HSL';
import Icons from '../../design/icon/Icons';

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

    private _horizontalContainer!: DisplayContainerInterface;

    protected get horizontalContainer(): DisplayContainerInterface {
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

    private _shapeElement!: ShapeElementInterface;

    protected get shapeElement(): ShapeElementInterface {
        if (!this._shapeElement) {
            this._shapeElement = new ShapeElement();
            this._shapeElement.fillColor = this.theme.colors.secondary.medium;
            this._shapeElement.percentWidth = 100;
            this._shapeElement.percentHeight = 100;
        }
        return this._shapeElement;
    }

    private _iconElement!: IconElementInterface;

    protected get iconElement(): IconElementInterface {
        if (!this._iconElement) {
            this._iconElement = new IconElement();
            this._iconElement.setSize(32, 32);
            this._iconElement.icon = Icons.PUIX;
            this._iconElement.color = this.theme.colors.primary.medium;
        }
        return this._iconElement;
    }

    private _textElement!: TextElementInterface;

    protected get textElement(): TextElementInterface {
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
