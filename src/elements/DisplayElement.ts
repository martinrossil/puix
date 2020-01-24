import SizeElement from './SizeElement';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
    }

    protected commitProperties(): void {
        super.commitProperties();
        if (this._backgroundColorChanged) {
            this._backgroundColorChanged = false;
            this.style.backgroundColor = this.backgroundColor;
        }
        if (this._opacityChanged) {
            this._opacityChanged = false;
            this.style.opacity = this.opacity.toString();
        }
    }

    private _backgroundColor = '';
    private _backgroundColorChanged = false;
    public set backgroundColor(value: string) {
        if (this._backgroundColor === value) {
            return;
        }
        this._backgroundColor = value;
        this._backgroundColorChanged = true;
        this.invalidateProperties();
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    private _opacity = 1;
    private _opacityChanged = false;
    public set opacity(value: number) {
        if (this._opacity === value) {
            return;
        }
        this._opacity = value;
        this._opacityChanged = true;
        this.invalidateProperties();
    }

    public get opacity(): number {
        return this._opacity;
    }
}
customElements.define('display-element', DisplayElement);
