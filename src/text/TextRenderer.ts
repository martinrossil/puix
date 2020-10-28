import DisplayElement from '../core/DisplayElement';
import ITextRenderer from '../interfaces/text/ITextRenderer';
import { TextAlign } from '../enums/TextAlign';
import { WhiteSpace } from '../enums/WhiteSpace';
import { FontWeight } from '../enums/FontWeight';
import { TextOverflow } from '../enums/TextOverflow';

export default class TextRenderer extends DisplayElement implements ITextRenderer {
    public constructor() {
        super();
        this.name = 'TextRenderer';
        this.style.fontFamily = 'Arial';
        this.style.fontSize = '11.2px';
        this.style.lineHeight = '1.2';
    }

    private _text = '';

    public set text(value: string) {
        if (this._text === value) {
            return;
        }
        this._text = value;
        this.innerText = value;
    }

    public get text(): string {
        return this._text;
    }

    private _fontFamily = 'Arial';

    public set fontFamily(value: string) {
        if (this._fontFamily === value) {
            return;
        }
        this._fontFamily = value;
        this.style.fontFamily = this._fontFamily;
    }

    public get fontFamily(): string {
        return this._fontFamily;
    }

    private _fontSize = 11.2;

    public set fontSize(value: number) {
        if (this._fontSize === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            this._fontSize = 11.2;
        } else {
            this._fontSize = value;
        }
        this.style.fontSize = this._fontSize + 'px';
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _whiteSpace: WhiteSpace = WhiteSpace.NORMAL;

    public set whiteSpace(value: WhiteSpace) {
        if (this._whiteSpace === value) {
            return;
        }
        this._whiteSpace = value;
        this.style.whiteSpace = value;
    }

    public get whiteSpace(): WhiteSpace {
        return this._whiteSpace;
    }

    private _textOverflow: TextOverflow = TextOverflow.CLIP;

    public set textOverflow(value: TextOverflow) {
        if (this._textOverflow === value) {
            return;
        }
        this._textOverflow = value;
        this.style.textOverflow = value;
    }

    public get textOverflow(): TextOverflow {
        return this._textOverflow;
    }

    private _textColor = '';

    public set textColor(value: string) {
        if (this._textColor === value) {
            return;
        }
        this._textColor = value;
        this.style.color = value;
    }

    public get textColor(): string {
        return this._textColor;
    }

    private _fontWeight: FontWeight = FontWeight.REGULAR_400;

    public set fontWeight(value: FontWeight) {
        if (this._fontWeight === value) {
            return;
        }
        this._fontWeight = value;
        this.style.fontWeight = this._fontWeight.toString();
    }

    public get fontWeight(): FontWeight {
        return this._fontWeight;
    }

    private _lineHeight = 1.2;

    public set lineHeight(value: number) {
        if (this._lineHeight === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            this._lineHeight = 1.2;
        } else {
            this._lineHeight = value;
        }
        this.style.lineHeight = this._lineHeight.toString();
    }

    public get lineHeight(): number {
        return this._lineHeight;
    }

    private _letterSpacing = 0.0;

    public set letterSpacing(value: number) {
        if (this._letterSpacing === value) {
            return;
        }
        if (isNaN(value)) {
            this._letterSpacing = 0;
        } else {
            this._letterSpacing = value;
        }
        this.style.letterSpacing = this._letterSpacing.toString();
    }

    public get letterSpacing(): number {
        return this._letterSpacing;
    }

    private _textAlign = TextAlign.LEFT;

    public set textAlign(value: TextAlign) {
        if (this._textAlign === value) {
            return;
        }
        this._textAlign = value;
        this.style.textAlign = this._textAlign;
    }

    public get textAlign(): TextAlign {
        return this._textAlign;
    }
}
customElements.define('text-renderer', TextRenderer);
