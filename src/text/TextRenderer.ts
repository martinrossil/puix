import DisplayElement from '../core/DisplayElement';
import TextRendererInterface from './TextRendererInterface';

export default class TextRenderer extends DisplayElement implements TextRendererInterface {
    public constructor() {
        super();
        this.name = 'TextRenderer';
    }

    public set text(value: string) {
        this.innerText = value;
    }

    public set fontFamily(value: string) {
        this.style.fontFamily = value;
    }

    public set fontSize(value: number) {
        this.style.fontSize = value + 'px';
    }

    public set whiteSpace(value: string) {
        this.style.whiteSpace = value;
    }

    public set textOverflow(value: string) {
        this.style.textOverflow = value;
    }

    public set color(value: string) {
        this.style.color = value;
    }

    public set fontWeight(value: number) {
        this.style.fontWeight = value.toString();
    }

    public set lineHeight(value: number) {
        this.style.lineHeight = value.toString();
    }

    public set letterSpacing(value: number) {
        this.style.letterSpacing = value.toString();
    }
}
customElements.define('text-renderer', TextRenderer);
