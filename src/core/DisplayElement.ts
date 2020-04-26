import SizeElement from '../core/SizeElement';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
    }

    private _backgroundColor = '';

    public set backgroundColor(value: string) {
        this._backgroundColor = value;
        this.style.backgroundColor = value;
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    private _opacity = 1;

    public set opacity(value: number) {
        if (isNaN(value)) {
            this._opacity = 1;
        } else if (value < 0) {
            this._opacity = 0;
        } else if (value > 1) {
            this._opacity = 1;
        } else {
            this._opacity = value;
        }
        this.style.opacity = this._opacity.toString();
    }

    public get opacity(): number {
        return this._opacity;
    }
}
customElements.define('display-element', DisplayElement);
