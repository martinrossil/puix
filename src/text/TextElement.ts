import DisplayElement from '../core/DisplayElement';
import ITextElement from '../interfaces/ITextElement';
import IFontDescription from '../interfaces/IFontDescription';
import ITextRenderer from '../interfaces/ITextRenderer';
import TextRenderer from './TextRenderer';

export default class TextElement extends DisplayElement implements ITextElement {
    public constructor() {
        super();
        this.name = 'TextElement';
        this.appendChild(this.textRenderer as unknown as Node);
        this.interactive = false;
        this.addEventListener('internalSizeChanged', this.textRendererInternalSizeChanged as EventListener);
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.invalidateTextSize();
    }

    protected textRendererInternalSizeChanged(e: CustomEvent): void {
        if (e.target !== this) {
            e.stopImmediatePropagation();
            this.invalidateTextSize();
        }
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.textRenderer.setSize(this.width, this.height);
    }

    protected invalidateTextSize(): void {
        if (this.connected) {
            this.validateTextSize();
        }
    }

    protected validateTextSize(): void {
        console.log(this.name, 'validateTextSize()');
        const lineHeight = this.fontSize * this.lineHeight;
        const capHeight = lineHeight * this.fontDescription.capHeight / this.lineHeight;
        const padding = lineHeight - capHeight;
        const offsetY = -padding * 0.5;
        this.textRenderer.y = offsetY + capHeight * this.fontDescription.verticalOffset;
        if (isNaN(this.width) && isNaN(this.height)) {
            this.setSize(this.textRenderer.scrollWidth, this.textRenderer.scrollHeight - padding);
            this.dispatchEventWith('internalSizeChanged', this);
        } else if (isNaN(this.width) && !isNaN(this.height)) {
            this.width = this.textRenderer.scrollWidth;
            this.dispatchEventWith('internalSizeChanged', this);
        } else if (!isNaN(this.width) && isNaN(this.height)) {
            this.height = this.textRenderer.scrollHeight - padding;
            this.dispatchEventWith('internalSizeChanged', this);
        }
    }

    private _textRenderer: ITextRenderer = new TextRenderer();

    protected get textRenderer(): ITextRenderer {
        return this._textRenderer;
    }

    public set text(value: string) {
        this.textRenderer.text = value;
    }

    public get text(): string {
        return this.textRenderer.text;
    }

    /**
     * The font-size CSS property sets the size of the font.
     * This property is also used to compute the size of em, ex, and other relative <length> units.
     */
    public set fontSize(value: number) {
        this.textRenderer.fontSize = value;
    }

    public get fontSize(): number {
        return this.textRenderer.fontSize;
    }

    /**
     * The font-weight CSS property sets the weight (or boldness) of the font.
     * The weights available depend on the font-family you are using.
     */
    public set fontWeight(value: number) {
        this.textRenderer.fontWeight = value;
    }

    public get fontWeight(): number {
        return this.textRenderer.fontWeight;
    }

    /**
     * The line-height CSS property sets the height of a line box.
     * It's commonly used to set the distance between lines of text.
     * On block-level elements, it specifies the minimum height of line boxes within the element.
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     */
    public set lineHeight(value) {
        this.textRenderer.lineHeight = value;
    }

    public get lineHeight(): number {
        return this.textRenderer.lineHeight;
    }

    public set fontDescription(value: IFontDescription) {
        this.textRenderer.fontDescription = value;
    }

    public get fontDescription(): IFontDescription {
        return this.textRenderer.fontDescription;
    }

    public set whiteSpace(value: string) {
        this.textRenderer.whiteSpace = value;
    }

    public get whiteSpace(): string {
        return this.textRenderer.whiteSpace;
    }

    public set color(value: string) {
        this.textRenderer.color = value;
    }

    public get color(): string {
        return this.textRenderer.color;
    }

    public set letterSpacing(value) {
        this.textRenderer.letterSpacing = value;
    }

    public get letterSpacing(): number {
        return this.textRenderer.letterSpacing;
    }

    public set textOverflow(value: string) {
        this.textRenderer.textOverflow = value;
    }

    public get textOverflow(): string {
        return this.textRenderer.textOverflow;
    }

    public set truncate(value: boolean) {
        this.textRenderer.truncate = value;
    }

    public get truncate(): boolean {
        return this.textRenderer.truncate;
    }
}
customElements.define('text-element', TextElement);
