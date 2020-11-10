import ITextElement from '../interfaces/text/ITextElement';
import BaseText from './BaseText';

export default class TextElement extends BaseText implements ITextElement {
    public constructor() {
        super();
        this.name = 'TextElement';
        this.appendChild(this.textRenderer as unknown as Node);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.textRenderer.fontFamily = this.typeFace.fontFamily;
        this.textRenderer.fontSize = this.fontSize / this.typeFace.capHeight;
        const actualLineHeight = (this.fontSize + this.verticalGap) / this.fontSize * this.typeFace.capHeight;
        this.textRenderer.lineHeight = actualLineHeight;
        const topPadding = this.textRenderer.lineHeight * this.fontSize / this.typeFace.capHeight - this.fontSize;
        const offsetY = -topPadding * 0.5;
        this.textRenderer.y = offsetY - this.fontSize * -this.typeFace.yOffset;
        const offsetX = this.fontSize * this.typeFace.xOffset;
        this.textRenderer.x = -offsetX;
        this.invalidateInternalSize(topPadding, offsetX);
    }

    private _verticalGap = 4;

    public set verticalGap(value: number) {
        if (this._verticalGap === value) {
            return;
        }
        if (isNaN(value)) {
            this._verticalGap = 4;
        } else {
            this._verticalGap = value;
        }
        this.invalidateDisplay();
    }

    public get verticalGap(): number {
        return this._verticalGap;
    }
}
customElements.define('text-element', TextElement);
