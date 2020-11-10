import { Overflow } from '../enums/Overflow';
import { TextOverflow } from '../enums/TextOverflow';
import { WhiteSpace } from '../enums/WhiteSpace';
import ILabelElement from '../interfaces/text/ILabelElement';
import BaseText from './BaseText';

export default class LabelElement extends BaseText implements ILabelElement {
    public constructor() {
        super();
        this.name = 'LabelElement';
        this.textRenderer.whiteSpace = WhiteSpace.NO_WRAP;
        this.textRenderer.textOverflow = TextOverflow.ELLIPSIS;
        this.textRenderer.overflow = Overflow.HIDDEN;
        this.appendChild(this.textRenderer as unknown as Node);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.textRenderer.fontFamily = this.typeFace.fontFamily;
        this.textRenderer.fontWeight = this.typeFace.fontWeight;
        this.textRenderer.fontSize = this.fontSize / this.typeFace.capHeight;
        const topPadding = this.textRenderer.lineHeight * this.fontSize / this.typeFace.capHeight - this.fontSize;
        const offsetY = -topPadding * 0.5;
        this.textRenderer.y = offsetY - this.fontSize * -this.typeFace.yOffset;
        const offsetX = this.fontSize * this.typeFace.xOffset;
        this.textRenderer.x = -offsetX;
        this.invalidateInternalSize(topPadding, offsetX);
    }
}
customElements.define('label-element', LabelElement);
