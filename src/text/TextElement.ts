import DisplayElement from '../core/DisplayElement';
import ITextElement from '../interfaces/text/ITextElement';
import ITypeData from '../interfaces/design/typography/ITypeData';
import ITextRenderer from '../interfaces/text/ITextRenderer';
import TextRenderer from './TextRenderer';
import Design from '../design/Design';
import SizeElement from '../core/SizeElement';

export default class TextElement extends DisplayElement implements ITextElement {
    public constructor() {
        super();
        this.name = 'TextElement';
        this.interactive = false;
        this.textRenderer.fontFamily = this.typeData.fontFamily;
        this.textRenderer.fontWeight = this.fontWeight;
        this.textRenderer.fontSize = this.fontSize;
        this.textRenderer.lineHeight = this.lineHeight;
        this.textRenderer.letterSpacing = this.letterSpacing;
        this.appendChild(this.textRenderer as unknown as Node);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        const lineHeight = this.fontSize * this.lineHeight;
        const capHeight = lineHeight * this.typeData.capHeight / this.lineHeight;
        const padding = lineHeight - capHeight;
        const offsetY = -padding * 0.5;
        this.textRenderer.y = offsetY + capHeight * this.typeData.verticalOffset;
        if (isNaN(this.width) && isNaN(this.height)) {
            if (isNaN(this.percentWidth) && isNaN(this.percentHeight)) {
                this.setActualSize(this.textRenderer.clientWidth, this.textRenderer.clientHeight - padding);
                this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
            } else if (isNaN(this.percentWidth) && !isNaN(this.percentHeight)) {
                this.textRenderer.actualHeight = this.actualHeight;
                this.actualWidth = this.textRenderer.clientWidth;
                this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
            } else if (!isNaN(this.percentWidth) && isNaN(this.percentHeight)) {
                this.textRenderer.actualWidth = this.actualWidth;
                this.actualHeight = this.textRenderer.clientHeight - padding;
                this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
            } else {
                this.textRenderer.setActualSize(this.actualWidth, this.actualHeight);
            }
        } else if (isNaN(this.width) && !isNaN(this.height)) {
            this.textRenderer.actualHeight = this.actualHeight;
            this.actualWidth = this.textRenderer.clientWidth;
            this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
        } else if (!isNaN(this.width) && isNaN(this.height)) {
            this.textRenderer.actualWidth = this.actualWidth;
            this.actualHeight = this.textRenderer.clientHeight - padding;
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

    private _typeData: ITypeData = Design.theme.typography.primary;

    public set typeData(value: ITypeData) {
        if (this._typeData !== value) {
            this._typeData = value;
            this.textRenderer.fontFamily = value.fontFamily;
            this.invalidateDisplay();
        }
    }

    public get typeData(): ITypeData {
        return this._typeData;
    }

    private _fontSize = 16;

    public set fontSize(value: number) {
        if (this._fontSize !== value) {
            this._fontSize = value;
            this.textRenderer.fontSize = value;
            this.invalidateDisplay();
        }
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _lineHeight = 1.2;

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

    private _fontWeight = 400;

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

    private _letterSpacing = 0.0;

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

    private _textRenderer: ITextRenderer = new TextRenderer();

    protected get textRenderer(): ITextRenderer {
        return this._textRenderer;
    }
}
customElements.define('text-element', TextElement);
