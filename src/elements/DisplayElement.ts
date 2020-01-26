import SizeElement from './SizeElement';
import IDisplayElement from '../interfaces/IDisplayElement';
import ISizeElement from '../interfaces/ISizeElement';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
    }

    private _backgroundColor = '';
    public set backgroundColor(value: string) {
        if (this._backgroundColor === value) {
            return;
        }
        this._backgroundColor = value;
        this.style.backgroundColor = value;
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    private _opacity = 1;
    public set opacity(value: number) {
        if (this._opacity === value) {
            return;
        }
        this._opacity = value;
        this.style.opacity = value.toString();
    }

    public get opacity(): number {
        return this._opacity;
    }

    private _parent: ISizeElement | null = null;
    public set parent(value: ISizeElement | null) {
        if (this._parent === value) {
            return;
        }
        this._parent = value;
    }

    public get parent(): ISizeElement | null {
        return this._parent;
    }
}
customElements.define('display-element', DisplayElement);
