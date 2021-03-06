import IDisplayElement from '../interfaces/core/IDisplayElement';
import { Cursor } from '../enums/Cursor';
import LayoutElement from './LayoutElement';
import { Overflow } from '../enums/Overflow';

export default class DisplayElement extends LayoutElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
        this.style.border = 'none';
        this.style.outline = 'none';
    }

    private _opacity = 1;

    public set opacity(value: number) {
        if (this._opacity === value) {
            return;
        }
        if (isNaN(value) || value > 1) {
            this._opacity = 1;
        } else if (value < 0) {
            this._opacity = 0;
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
        if (this._enabled === value) {
            return;
        }
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

    private _overflow: Overflow = Overflow.VISIBLE;

    public set overflow(value: Overflow) {
        if (this._overflow === value) {
            return;
        }
        this._overflow = value;
        this.style.overflow = value;
    }

    public get overflow(): Overflow {
        return this._overflow;
    }

    private _overflowX: Overflow = Overflow.VISIBLE;

    public set overflowX(value: Overflow) {
        if (this._overflowX === value) {
            return;
        }
        this._overflowX = value;
        this.style.overflowX = value;
    }

    public get overflowX(): Overflow {
        return this._overflowX;
    }

    private _overflowY: Overflow = Overflow.VISIBLE;

    public set overflowY(value: Overflow) {
        if (this._overflowY === value) {
            return;
        }
        this._overflowY = value;
        this.style.overflowY = value;
    }

    public get overflowY(): Overflow {
        return this._overflowY;
    }

    private _cornerRadius = 0;

    public set cornerRadius(value: number) {
        if (this._cornerRadius === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            this._cornerRadius = 0;
            this.style.borderRadius = '0';
            return;
        }
        this._cornerRadius = value;
        this.style.borderRadius = value + 'px';
    }

    public get cornerRadius(): number {
        return this._cornerRadius;
    }

    private _cursor: Cursor = Cursor.NONE;

    public set cursor(value: Cursor) {
        if (this._cursor === value) {
            return;
        }
        this._cursor = value;
        this.style.cursor = value;
    }

    public get cursor(): Cursor {
        return this._cursor;
    }

    private _shadow = '';

    public set shadow(value: string) {
        if (this._shadow === value) {
            return;
        }
        this._shadow = value;
        this.style.boxShadow = value;
    }

    public get shadow(): string {
        return this._shadow;
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
}
customElements.define('display-element', DisplayElement);
