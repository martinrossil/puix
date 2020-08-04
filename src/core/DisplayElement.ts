import IDisplayElement from '../interfaces/core/IDisplayElement';
import LayoutElement from './LayoutElement';
import ITheme from '../interfaces/design/ITheme';
import Design from '../design/Design';
import Overflow from '../consts/Overflow';

export default class DisplayElement extends LayoutElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
        this.style.border = 'none';
        this.style.outline = 'none';
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

    private _enabled = true;

    public set enabled(value: boolean) {
        this._enabled = value;
        if (value) {
            this.style.pointerEvents = '';
            this.style.userSelect = 'auto';
        } else {
            this.style.pointerEvents = 'none';
            this.style.userSelect = 'none';
        }
    }

    public get enabled(): boolean {
        return this._enabled;
    }

    private _overflow = Overflow.VISIBLE;

    public set overflow(value: string) {
        if (this._overflow !== value) {
            this._overflow = value;
            this._overflowX = value;
            this._overflowY = value;
            this.style.overflow = value;
        }
    }

    public get overflow(): string {
        return this._overflow;
    }

    private _overflowX = Overflow.VISIBLE;

    public set overflowX(value: string) {
        if (this._overflowX !== value) {
            this._overflowX = value;
            this.style.overflowX = value;
        }
    }

    public get overflowX(): string {
        return this._overflowX;
    }

    private _overflowY = Overflow.VISIBLE;

    public set overflowY(value: string) {
        if (this._overflowY !== value) {
            this._overflowY = value;
            this.style.overflowY = value;
        }
    }

    public get overflowY(): string {
        return this._overflowY;
    }

    private _shadow: string = this.theme.shadows.none;

    public set shadow(value: string) {
        if (this._shadow !== value) {
            this._shadow = value;
            this.style.boxShadow = value;
        }
    }

    public get shadow(): string {
        return this._shadow;
    }

    private _borderRadius = 0;

    public set borderRadius(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._borderRadius !== 0) {
                this._borderRadius = 0;
                this.style.borderRadius = '0';
            }
        } else if (this._borderRadius !== value) {
            this._borderRadius = value;
            this.style.borderRadius = value + 'px';
        }
    }

    public get borderRadius(): number {
        return this._borderRadius;
    }

    public get theme(): ITheme {
        return Design.theme;
    }

    private _cursor = '';

    public set cursor(value: string) {
        if (this._cursor !== value) {
            this._cursor = value;
            this.style.cursor = value;
        }
    }

    public get cursor(): string {
        return this._cursor;
    }

    private _backgoundColor = '';

    public set backgroundColor(value: string) {
        if (this._backgoundColor !== value) {
            this._backgoundColor = value;
            this.style.backgroundColor = value;
        }
    }

    public get backgroundColor(): string {
        return this._backgoundColor;
    }
}
customElements.define('display-element', DisplayElement);
