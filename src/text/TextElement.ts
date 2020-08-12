import DisplayElement from '../core/DisplayElement';
import TextElementInterface from './TextElementInterface';
import TextRendererInterface from './TextRendererInterface';
import TextRenderer from './TextRenderer';
import SizeElement from '../core/SizeElement';
import FontWeight from '../consts/FontWeight';

export default class TextElement extends DisplayElement implements TextElementInterface {
    public constructor() {
        super();
        this.name = 'TextElement';
        this.enabled = false;
        this.fontFamily = 'Verdana';
        this.capHeight = 0.73;
        this.verticalOffset = 0.044;
        this.horizontalOffset = 0.13;
        this.fontSize = 11.68;
        this.lineHeight = 19.2;
        this.fontWeight = FontWeight.REGULAR;
        this.letterSpacing = 0.0;
        this.color = 'black';
        this.appendChild(this.textRenderer as unknown as Node);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.textRenderer.fontSize = this.fontSize / this.capHeight;
        const topPadding = this.lineHeight - this.fontSize;
        const offsetY = -topPadding * 0.5;
        this.textRenderer.y = offsetY - this.fontSize * this.verticalOffset;
        const offsetX = this.fontSize * this.horizontalOffset;
        this.textRenderer.x = -offsetX;
        if (isNaN(this.width) && isNaN(this.height)) {
            if (isNaN(this.percentWidth) && isNaN(this.percentHeight)) {
                this.setActualSize(this.textRenderer.clientWidth - offsetX * 2, this.textRenderer.clientHeight - topPadding);
                this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
            } else if (isNaN(this.percentWidth) && !isNaN(this.percentHeight)) {
                this.textRenderer.actualHeight = this.actualHeight;
                this.actualWidth = this.textRenderer.clientWidth - offsetX * 2;
                this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
            } else if (!isNaN(this.percentWidth) && isNaN(this.percentHeight)) {
                this.textRenderer.actualWidth = this.actualWidth;
                this.actualHeight = this.textRenderer.clientHeight - topPadding;
                this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
            } else {
                this.textRenderer.setActualSize(this.actualWidth, this.actualHeight);
            }
        } else if (isNaN(this.width) && !isNaN(this.height)) {
            this.textRenderer.actualHeight = this.actualHeight;
            this.actualWidth = this.textRenderer.clientWidth - offsetX * 2;
            this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
        } else if (!isNaN(this.width) && isNaN(this.height)) {
            this.textRenderer.actualWidth = this.actualWidth;
            this.actualHeight = this.textRenderer.clientHeight - topPadding;
            this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
        } else {
            this.textRenderer.setActualSize(this.actualWidth, this.actualHeight);
        }
    }

    private _text = '';

    public set text(value: string) {
        if (this._text !== value) {
            this._text = value;
            this.textRenderer.text = value;
            this.invalidateDisplay();
        }
    }

    public get text(): string {
        return this._text;
    }

    private _fontFamily = '';

    public set fontFamily(value: string) {
        if (this._fontFamily !== value) {
            this._fontFamily = value;
            this.textRenderer.fontFamily = value;
            this.invalidateDisplay();
        }
    }

    public get fontFamily(): string {
        return this._fontFamily;
    }

    private _capHeight = NaN;

    public set capHeight(value: number) {
        if (this._capHeight !== value) {
            this._capHeight = value;
            this.invalidateDisplay();
        }
    }

    public get capHeight(): number {
        return this._capHeight;
    }

    private _verticalOffset = NaN;

    public set verticalOffset(value: number) {
        if (this._verticalOffset !== value) {
            this._verticalOffset = value;
            this.invalidateDisplay();
        }
    }

    public get verticalOffset(): number {
        return this._verticalOffset;
    }

    private _horizontalOffset = NaN;

    public get horizontalOffset(): number {
        return this._horizontalOffset;
    }

    public set horizontalOffset(value: number) {
        if (this._horizontalOffset !== value) {
            this._horizontalOffset = value;
            this.invalidateDisplay();
        }
    }

    private _fontSize = NaN;

    public set fontSize(value: number) {
        if (this._fontSize !== value) {
            this._fontSize = value;
            this.invalidateDisplay();
        }
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _lineHeight = NaN;

    public set lineHeight(value: number) {
        if (this._lineHeight !== value) {
            this._lineHeight = value;
            this.textRenderer.lineHeight = value;
            this.invalidateDisplay();
        }
    }

    public get lineHeight(): number {
        return this._lineHeight;
    }

    private _wordwrap = true;

    public set wordwrap(value: boolean) {
        if (this._wordwrap !== value) {
            this._wordwrap = value;
            if (value) {
                this.textRenderer.whiteSpace = 'normal';
                this.textRenderer.overflow = 'visible';
                this.textRenderer.textOverflow = 'clip';
            } else {
                this.textRenderer.whiteSpace = 'nowrap';
                this.textRenderer.overflow = 'hidden';
                this.textRenderer.textOverflow = 'ellipsis';
            }
            this.invalidateDisplay();
        }
    }

    public get wordwrap(): boolean {
        return this._wordwrap;
    }

    private _color = '';

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.textRenderer.color = value;
        }
    }

    public get color(): string {
        return this._color;
    }

    private _fontWeight = NaN;

    public set fontWeight(value: number) {
        if (this._fontWeight !== value) {
            this._fontWeight = value;
            this.textRenderer.fontWeight = value;
            this.invalidateDisplay();
        }
    }

    public get fontWeight(): number {
        return this._fontWeight;
    }

    private _letterSpacing = NaN;

    public set letterSpacing(value: number) {
        if (this._letterSpacing !== value) {
            this._letterSpacing = value;
            this.textRenderer.letterSpacing = value;
            this.invalidateDisplay();
        }
    }

    public get letterSpacing(): number {
        return this._letterSpacing;
    }

    private _textRenderer: TextRendererInterface = new TextRenderer();

    protected get textRenderer(): TextRendererInterface {
        return this._textRenderer;
    }
}
customElements.define('text-element', TextElement);
