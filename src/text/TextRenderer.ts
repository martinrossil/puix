import DisplayElement from '../core/DisplayElement';
import TextRendererInterface from './TextRendererInterface';
import FontWeight from '../consts/FontWeight';

export default class TextRenderer extends DisplayElement implements TextRendererInterface {
    public constructor() {
        super();
        // this.backgroundColor = 'hsla(0, 50%, 0%, 0.2)';
        this.name = 'TextRenderer';
        this.fontFamily = 'Verdana';
        this.fontSize = 11.68;
        this.whiteSpace = 'normal';
        this.textOverflow = 'clip';
        this.color = 'black';
        this.fontWeight = FontWeight.REGULAR;
        this.lineHeight = 19.2;
        this.letterSpacing = 0.0;
    }

    private _text = '';

    public set text(value: string) {
        if (this._text !== value) {
            this._text = value;
            this.innerText = value;
        }
    }

    public get text(): string {
        return this._text;
    }

    private _fontFamily = '';

    public set fontFamily(value: string) {
        if (this._fontFamily !== value) {
            this._fontFamily = value;
            this.style.fontFamily = value;
        }
    }

    public get fontFamily(): string {
        return this._fontFamily;
    }

    private _fontSize = NaN;

    public set fontSize(value: number) {
        if (this._fontSize !== value) {
            this._fontSize = value;
            this.style.fontSize = value + 'px';
        }
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _whiteSpace = '';

    public set whiteSpace(value: string) {
        if (this._whiteSpace !== value) {
            this._whiteSpace = value;
            this.style.whiteSpace = value;
        }
    }

    public get whiteSpace(): string {
        return this._whiteSpace;
    }

    private _textOverflow = '';

    public set textOverflow(value: string) {
        if (this._textOverflow !== value) {
            this._textOverflow = value;
            this.style.textOverflow = value;
        }
    }

    public get textOverflow(): string {
        return this._textOverflow;
    }

    private _color = '';

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.style.color = value;
        }
    }

    public get color(): string {
        return this._color;
    }

    private _fontWeight = NaN;

    public set fontWeight(value: number) {
        if (this._fontWeight !== value) {
            this._fontWeight = value;
            this.style.fontWeight = value.toString();
        }
    }

    public get fontWeight(): number {
        return this._fontWeight;
    }

    private _lineHeight = NaN;

    public set lineHeight(value: number) {
        if (this._lineHeight !== value) {
            this._lineHeight = value;
            this.style.lineHeight = value + 'px';
        }
    }

    public get lineHeight(): number {
        return this._lineHeight;
    }

    private _letterSpacing = NaN;

    public set letterSpacing(value: number) {
        if (this._letterSpacing !== value) {
            this._letterSpacing = value;
            this.style.letterSpacing = value.toString();
        }
    }

    public get letterSpacing(): number {
        return this._letterSpacing;
    }
}
customElements.define('text-renderer', TextRenderer);
