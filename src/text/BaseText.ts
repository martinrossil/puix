import DisplayElement from '../core/DisplayElement';
import { Events } from '../enums/Events';
import { TextAlign } from '../enums/TextAlign';
import IBaseText from '../interfaces/text/IBaseText';
import ITextRenderer from '../interfaces/text/ITextRenderer';
import ITypeFace from '../interfaces/text/ITypeFace';
import TextRenderer from './TextRenderer';
import TypeFace from './TypeFace';

export default class BaseText extends DisplayElement implements IBaseText {
    public constructor() {
        super();
    }

    private _textRenderer!: ITextRenderer;

    protected get textRenderer(): ITextRenderer {
        if (!this._textRenderer) {
            this._textRenderer = new TextRenderer();
        }
        return this._textRenderer;
    }

    public set text(value: string) {
        this.textRenderer.text = value;
        this.invalidateDisplay();
    }

    public get text(): string {
        return this.textRenderer.text;
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
        this.invalidateDisplay();
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    public set textColor(value: string) {
        this.textRenderer.textColor = value;
    }

    public get textColor(): string {
        return this.textRenderer.textColor;
    }

    public set letterSpacing(value: number) {
        this.textRenderer.letterSpacing = value;
        this.invalidateDisplay();
    }

    public get letterSpacing(): number {
        return this.textRenderer.letterSpacing;
    }

    public set textAlign(value: TextAlign) {
        this.textRenderer.textAlign = value;
    }

    public get textAlign(): TextAlign {
        return this.textRenderer.textAlign;
    }

    private _typeFace!: ITypeFace;

    public set typeFace(value: ITypeFace) {
        if (this._typeFace === value) {
            return;
        }
        this._typeFace = value;
        this.invalidateDisplay();
    }

    public get typeFace(): ITypeFace {
        if (!this._typeFace) {
            this._typeFace = new TypeFace();
        }
        return this._typeFace;
    }

    protected invalidateInternalSize(topPadding: number, offsetX: number): void {
        if (this.hasExplicitWidth(this) && this.hasExplicitHeight(this)) {
            this.textRenderer.setActualSize(this.actualWidth, this.actualHeight);
            return;
        }
        if (this.hasExplicitWidth(this) && !this.hasExplicitHeight(this)) {
            this.textRenderer.actualWidth = this.actualWidth;
            this.actualHeight = Math.ceil(this.textRenderer.clientHeight - topPadding);
            this.dispatchCustomEvent(Events.INTERNAL_SIZE_CHANGED, this, true);
            return;
        }
        if (!this.hasExplicitWidth(this) && this.hasExplicitHeight(this)) {
            this.textRenderer.actualHeight = this.actualHeight;
            this.actualWidth = Math.ceil(this.textRenderer.clientWidth - offsetX * 2);
            this.dispatchCustomEvent(Events.INTERNAL_SIZE_CHANGED, this, true);
            return;
        }
        this.setActualSize(Math.ceil(this.textRenderer.clientWidth - offsetX * 2), Math.ceil(this.textRenderer.clientHeight - topPadding));
        this.dispatchCustomEvent(Events.INTERNAL_SIZE_CHANGED, this, true);
    }
}
customElements.define('base-text', BaseText);
