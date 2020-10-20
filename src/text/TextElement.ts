import DisplayElement from '../core/DisplayElement';
import ITextElement from '../interfaces/text/ITextElement';
import ITextRenderer from '../interfaces/text/ITextRenderer';
import TextRenderer from './TextRenderer';
import { FontWeight } from '../enums/FontWeight';
import { TextAlign } from '../enums/TextAlign';
import { WhiteSpace } from '../enums/WhiteSpace';
import { Overflow } from '../enums/Overflow';
import { TextOverflow } from '../enums/TextOverflow';

/**
 * Verdana 400 capHeight = 0.73, verticalOffset = 0.044, horizontalOffset = 0.13;
 * Inter 400 capHeight = 0.727, verticalOffset = 0.002, horizontalOffset = 0.121;
 * Inter 500 capHeight = 0.727, verticalOffset = 0.000, horizontalOffset = 0.11;
 * Inter 700 capHeight = 0.727, verticalOffset = 0.002, horizontalOffset = 0.086;
 * Montserrat 400 capHeight = 0.7, verticalOffset = -0.013, horizontalOffset = 0.163;
 * SegoeUI 400 capHeight = 0.7, verticalOffset = -0.091, horizontalOffset = 0.13;
 * SegoeUI 600 capHeight = 0.7, verticalOffset = -0.091, horizontalOffset = 0.123;
 */

export default class TextElement extends DisplayElement implements ITextElement {
    public constructor() {
        super();
        this.name = 'TextElement';
        this.enabled = false;
        this.fontFamily = 'Inter';
        this.capHeight = 0.7;
        this.verticalOffset = 0.0;
        this.horizontalOffset = 0.0;
        this.fontSize = 11.68;
        this.lineHeight = 19.2;
        this.fontWeight = FontWeight.REGULAR_400;
        this.letterSpacing = 0.0;
        this.appendChild(this.textRenderer as unknown as Node);
    }

    /* protected updateDisplay(): void {
        super.updateDisplay();
        this.textRenderer.fontSize = this.fontSize / this.capHeight;
        const topPadding = this.lineHeight - this.fontSize;
        const offsetY = -topPadding * 0.5;
        this.textRenderer.y = offsetY - this.fontSize * -this.verticalOffset;
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
    } */

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
                this.textRenderer.whiteSpace = WhiteSpace.NORMAL;
                this.textRenderer.overflowX = Overflow.VISIBLE;
                this.textRenderer.textOverflow = TextOverflow.CLIP;
            } else {
                this.textRenderer.whiteSpace = WhiteSpace.NO_WRAP;
                this.textRenderer.overflowX = Overflow.HIDDEN;
                this.textRenderer.textOverflow = TextOverflow.ELLIPSIS;
            }
            this.invalidateDisplay();
        }
    }

    public get wordwrap(): boolean {
        return this._wordwrap;
    }

    public set textColor(value: string) {
        this.textRenderer.textColor = value;
    }

    public get textColor(): string {
        return this.textRenderer.textColor;
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

    private textRenderer: ITextRenderer = new TextRenderer();

    public set textAlign(value: TextAlign) {
        this.textRenderer.textAlign = value;
    }

    public get textAlign(): TextAlign {
        return this.textRenderer.textAlign;
    }
}
customElements.define('text-element', TextElement);
