import IDisplayElement from '../interfaces/IDisplayElement';
import Overflow from '../enums/Overflow';
import LayoutElement from './LayoutElement';

export default class DisplayElement extends LayoutElement implements IDisplayElement {
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

    private _interactive = true;

    public set interactive(value: boolean) {
        this._interactive = value;
        if (value) {
            this.style.pointerEvents = '';
            this.style.setProperty('-webkit-user-select', 'auto');
            this.style.setProperty('-khtml-user-select', 'auto');
            this.style.setProperty('-moz-user-select', 'auto');
            this.style.setProperty('-ms-user-select', 'auto');
            this.style.setProperty('user-select', 'auto');
        } else {
            this.style.pointerEvents = 'none';
            this.style.setProperty('-webkit-user-select', 'none');
            this.style.setProperty('-khtml-user-select', 'none');
            this.style.setProperty('-moz-user-select', 'none');
            this.style.setProperty('-ms-user-select', 'none');
            this.style.setProperty('user-select', 'none');
        }
    }

    public get interactive(): boolean {
        return this._interactive;
    }

    private _overflow: Overflow = Overflow.VISIBLE;

    public set overflow(value: Overflow) {
        if (this._overflow !== value) {
            this._overflow = value;
            this._overflowHorizontal = value;
            this._overflowVertical = value;
            this.style.overflow = value;
        }
    }

    public get overflow(): Overflow {
        return this._overflow;
    }

    private _overflowHorizontal: Overflow = Overflow.VISIBLE;

    public set overflowHorizontal(value: Overflow) {
        if (this._overflowHorizontal !== value) {
            this._overflowHorizontal = value;
            this.style.overflowX = value;
        }
    }

    public get overflowHorizontal(): Overflow {
        return this._overflowHorizontal;
    }

    private _overflowVertical: Overflow = Overflow.VISIBLE;

    public set overflowVertical(value: Overflow) {
        if (this._overflowVertical !== value) {
            this._overflowVertical = value;
            this.style.overflowY = value;
        }
    }

    public get overflowVertical(): Overflow {
        return this._overflowVertical;
    }

    private _z = 0;

    public set z(value: number) {
        if (isNaN(value)) {
            if (this._z !== 0) {
                this._z = 0;
                this.style.boxShadow = 'none';
            }
        } else if (this._z !== value) {
            let shadow = '';
            if (value < 0) {
                shadow = 'inset ';
            }
            shadow += '0 ' + Math.floor(Math.pow(Math.abs(value), 2)) + 'px ';
            shadow += Math.floor(Math.pow(Math.abs(value), 2.5)) + 'px ';
            shadow += Math.floor(Math.pow(Math.abs(value), 1.1)) + 'px ';
            shadow += 'rgba(0, 0, 0, 0.' + Math.round(Math.pow(Math.abs(value), 0.5) * 10) + '),';
            shadow += ' 0 ' + Math.round(Math.pow(Math.abs(1.8), Math.abs(value))) + 'px ';
            shadow += Math.round(Math.pow(Math.abs(1.9), Math.abs(value))) + 'px ';
            shadow += -Math.abs(value) + 'px ';
            shadow += 'rgba(0, 0, 0, 0.05)';
            this.style.boxShadow = shadow;
        }
    }

    public get z(): number {
        return this._z;
    }

    private _cornerRadius = 0;

    public set cornerRadius(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._cornerRadius !== 0) {
                this._cornerRadius = 0;
                this.style.borderRadius = '0';
            }
        } else if (this._cornerRadius !== value) {
            this._cornerRadius = value;
            this.style.borderRadius = value + 'px';
        }
    }

    public get cornerRadius(): number {
        return this._cornerRadius;
    }
}
customElements.define('display-element', DisplayElement);
