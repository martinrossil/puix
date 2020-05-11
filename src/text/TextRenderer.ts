import DisplayElement from '../core/DisplayElement';
import ITextRenderer from '../interfaces/ITextRenderer';
import FontWeight from '../enums/FontWeight';
import IFontDescription from '../interfaces/IFontDescription';
import Overflow from '../enums/Overflow';
import WhiteSpace from '../enums/WhiteSpace';
import TextOverflow from '../enums/TextOverflow';
import Events from '../enums/Events';
import Theme from '../design/Theme';

export default class TextRenderer extends DisplayElement implements ITextRenderer {
    public constructor() {
        super();
        this.name = 'TextRenderer';
        this.style.fontFamily = this.fontFamily;
        this.style.lineHeight = this.lineHeight.toString();
        this.style.fontWeight = this.fontWeight;
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.setActualSizeFromText();
    }

    protected invalidateInternalSize(): void {
        if (this.connected) {
            this.setActualSizeFromText();
        }
    }

    protected setActualSizeFromText(): void {
        if (isNaN(this.width) && isNaN(this.height)) {
            this.setActualSize(this.scrollWidth, this.scrollHeight);
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this);
        } else if (isNaN(this.width) && !isNaN(this.height)) {
            this.actualWidth = this.scrollWidth;
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this);
        } else if (!isNaN(this.width) && isNaN(this.height)) {
            this.actualHeight = this.scrollHeight;
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this);
        }
    }

    private _text = '';

    public set text(value: string) {
        if (this._text !== value) {
            this._text = value;
            this.innerText = value;
            this.invalidateInternalSize();
        }
    }

    public get text(): string {
        return this._text;
    }

    private _fontSize = 16;

    /**
     * The font-size CSS property sets the size of the font.
     * This property is also used to compute the size of em, ex, and other relative <length> units.
     */
    public set fontSize(value: number) {
        if (isNaN(value)) {
            if (this._fontSize !== 16) {
                this._fontSize = 16;
                this.style.fontSize = value + 'px';
                this.invalidateInternalSize();
            }
        } else {
            this._fontSize = value;
            this.style.fontSize = value + 'px';
            this.invalidateInternalSize();
        }
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _fontWeight: FontWeight = FontWeight.NORMAL;

    /**
     * The font-weight CSS property sets the weight (or boldness) of the font.
     * The weights available depend on the font-family you are using.
     */
    public set fontWeight(value: FontWeight) {
        if (this._fontWeight !== value) {
            this._fontWeight = value;
            this.style.fontWeight = value;
            this.invalidateInternalSize();
        }
    }

    public get fontWeight(): FontWeight {
        return this._fontWeight;
    }

    private _lineHeight = 1.2;

    /**
     * The line-height CSS property sets the height of a line box.
     * It's commonly used to set the distance between lines of text.
     * On block-level elements, it specifies the minimum height of line boxes within the element.
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     */
    public set lineHeight(value) {
        if (this._lineHeight !== value) {
            this._lineHeight = value;
            this.style.lineHeight = value.toString();
            this.invalidateInternalSize();
        }
    }

    public get lineHeight(): number {
        return this._lineHeight;
    }

    private _fontFamily = Theme.PRIMARY_FONT.fontFamily;

    public set fontFamily(value: string) {
        if (this._fontFamily !== value) {
            this._fontFamily = value;
            this.style.fontFamily = value;
            this.invalidateInternalSize();
        }
    }

    public get fontFamily(): string {
        return this._fontFamily;
    }

    private _fontDescription: IFontDescription = Theme.PRIMARY_FONT;

    public set fontDescription(value) {
        if (this._fontDescription !== value) {
            this._fontDescription = value;
            this.fontFamily = value.fontFamily;
        }
    }

    public get fontDescription(): IFontDescription {
        return this._fontDescription;
    }

    private _whiteSpace: WhiteSpace = WhiteSpace.NORMAL;

    /**
     * The white-space CSS property sets how white space inside an element is handled.
     */
    public set whiteSpace(value: WhiteSpace) {
        if (this._whiteSpace !== value) {
            this._whiteSpace = value;
            this.style.whiteSpace = value;
            this.invalidateInternalSize();
        }
    }

    public get whiteSpace(): WhiteSpace {
        return this._whiteSpace;
    }

    private _color = '#000000';

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.style.color = value;
        }
    }

    public get color(): string {
        return this._color;
    }

    private _letterSpacing = 1;

    public set letterSpacing(value) {
        if (this._letterSpacing !== value) {
            this._letterSpacing = value;
            this.style.letterSpacing = value + 'px';
            this.invalidateInternalSize();
        }
    }

    public get letterSpacing(): number {
        return this._letterSpacing;
    }

    private _truncate = false;

    public set truncate(value: boolean) {
        if (this._truncate !== value) {
            this._truncate = value;
            if (value) {
                this.whiteSpace = WhiteSpace.NO_WRAP;
                this.overflow = Overflow.HIDDEN;
                this.textOverflow = TextOverflow.ELLIPSIS;
            } else {
                this.whiteSpace = WhiteSpace.NORMAL;
                this.overflow = Overflow.VISIBLE;
                this.textOverflow = TextOverflow.CLIP;
            }
            this.invalidateInternalSize();
        }
    }

    public get truncate(): boolean {
        return this._truncate;
    }

    private _textOverflow: TextOverflow = TextOverflow.CLIP;

    public set textOverflow(value: TextOverflow) {
        if (this._textOverflow !== value) {
            this._textOverflow = value;
            this.style.textOverflow = value;
        }
    }

    public get textOverflow(): TextOverflow {
        return this._textOverflow;
    }
}
customElements.define('text-renderer', TextRenderer);
