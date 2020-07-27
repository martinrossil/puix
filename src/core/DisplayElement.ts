import IDisplayElement from '../interfaces/core/IDisplayElement';
import LayoutElement from './LayoutElement';
import ITheme from '../interfaces/design/ITheme';
import Design from '../design/Design';

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

    private _interactive = true;

    public set interactive(value: boolean) {
        this._interactive = value;
        if (value) {
            this.style.pointerEvents = '';
            this.style.userSelect = 'auto';
        } else {
            this.style.pointerEvents = 'none';
            this.style.userSelect = 'none';
        }
    }

    public get interactive(): boolean {
        return this._interactive;
    }

    private _overflow = 'visible';

    public set overflow(value: string) {
        if (this._overflow !== value) {
            this._overflow = value;
            this._overflowHorizontal = value;
            this._overflowVertical = value;
            this.style.overflow = value;
        }
    }

    public get overflow(): string {
        return this._overflow;
    }

    private _overflowHorizontal = 'visible';

    public set overflowHorizontal(value: string) {
        if (this._overflowHorizontal !== value) {
            this._overflowHorizontal = value;
            this.style.overflowX = value;
        }
    }

    public get overflowHorizontal(): string {
        return this._overflowHorizontal;
    }

    private _overflowVertical = 'visible';

    public set overflowVertical(value: string) {
        if (this._overflowVertical !== value) {
            this._overflowVertical = value;
            this.style.overflowY = value;
        }
    }

    public get overflowVertical(): string {
        return this._overflowVertical;
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
