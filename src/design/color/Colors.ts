import EventDispatcher from '../../core/EventDispatcher';
import IColors from '../../interfaces/design/color/IColors';
import IColorCollection from '../../interfaces/design/color/IColorCollection';
import ColorCollection from './ColorCollection';
import ColorNames from './ColorNames';
import Events from '../../consts/Events';
import HSL from './HSL';

export default class Colors extends EventDispatcher implements IColors {
    private _primary: IColorCollection = new ColorCollection(ColorNames.CYAN);

    public set primary(value: IColorCollection) {
        if (this._primary !== value) {
            this._primary = value;
            this.dispatchEventWith(Events.PRIMARY_COLOR_CHANGED);
        }
    }

    public get primary(): IColorCollection {
        return this._primary;
    }

    private _secondary: IColorCollection = new ColorCollection(ColorNames.INDIGO);

    public set secondary(value: IColorCollection) {
        if (this._secondary !== value) {
            this._secondary = value;
            this.dispatchEventWith(Events.SECONDARY_COLOR_CHANGED);
        }
    }

    public get secondary(): IColorCollection {
        return this._secondary;
    }

    private _tertiary: IColorCollection = new ColorCollection(ColorNames.PINK);

    public set tertiary(value: IColorCollection) {
        if (this._tertiary !== value) {
            this._tertiary = value;
            this.dispatchEventWith(Events.TERTIARY_COLOR_CHANGED);
        }
    }

    public get tertiary(): IColorCollection {
        return this._tertiary;
    }

    private _neutral: IColorCollection = new ColorCollection(ColorNames.BLUE_GREY);

    public set neutral(value: IColorCollection) {
        if (this._neutral !== value) {
            this._neutral = value;
            this.dispatchEventWith(Events.NEUTRAL_COLOR_CHANGED);
        }
    }

    public get neutral(): IColorCollection {
        return this._neutral;
    }

    private _success: IColorCollection = new ColorCollection(ColorNames.GREEN);

    public set success(value: IColorCollection) {
        if (this._success !== value) {
            this._success = value;
            this.dispatchEventWith(Events.SUCCESS_COLOR_CHANGED);
        }
    }

    public get success(): IColorCollection {
        return this._success;
    }

    private _warning: IColorCollection = new ColorCollection(ColorNames.YELLOW);

    public set warning(value: IColorCollection) {
        if (this._warning !== value) {
            this._warning = value;
            this.dispatchEventWith(Events.WARNING_COLOR_CHANGED);
        }
    }

    public get warning(): IColorCollection {
        return this._warning;
    }

    private _error: IColorCollection = new ColorCollection(ColorNames.RED);

    public set error(value: IColorCollection) {
        if (this._error !== value) {
            this._error = value;
            this.dispatchEventWith(Events.ERROR_COLOR_CHANGED);
        }
    }

    public get error(): IColorCollection {
        return this._error;
    }

    private _background = HSL.BLUE_GREY_50;

    public set background(value: string) {
        if (this._background !== value) {
            this._background = value;
            this.dispatchEventWith(Events.BACKGROUND_CHANGED);
        }
    }

    public get background(): string {
        return this._background;
    }

    private _onPrimary = HSL.WHITE;

    public set onPrimary(value: string) {
        if (this._onPrimary !== value) {
            this._onPrimary = value;
            this.dispatchEventWith(Events.ON_PRIMARY_CHANGED);
        }
    }

    public get onPrimary(): string {
        return this._onPrimary;
    }

    private _onSecondary = HSL.WHITE;

    public set onSecondary(value: string) {
        if (this._onSecondary !== value) {
            this._onSecondary = value;
            this.dispatchEventWith(Events.ON_SECONDARY_CHANGED);
        }
    }

    public get onSecondary(): string {
        return this._onSecondary;
    }

    private _onTertiary = HSL.WHITE;

    public set onTertiary(value: string) {
        if (this._onTertiary !== value) {
            this._onTertiary = value;
            this.dispatchEventWith(Events.ON_TERTIARY_CHANGED);
        }
    }

    public get onTertiary(): string {
        return this._onTertiary;
    }

    private _onBackground = HSL.BLUE_GREY_900;

    public set onBackground(value: string) {
        if (this._onBackground !== value) {
            this._onBackground = value;
            this.dispatchEventWith(Events.ON_BACKGROUND_CHANGED);
        }
    }

    public get onBackground(): string {
        return this._onBackground;
    }

    private _surface = HSL.WHITE;

    public set surface(value: string) {
        if (this._surface !== value) {
            this._surface = value;
            this.dispatchEventWith(Events.SURFACE_CHANGED);
        }
    }

    public get surface(): string {
        return this._surface;
    }

    private _onSurface = HSL.BLUE_GREY_900;

    public set onSurface(value: string) {
        if (this._onSurface !== value) {
            this._onSurface = value;
            this.dispatchEventWith(Events.ON_SURFACE_CHANGED);
        }
    }

    public get onSurface(): string {
        return this._onSurface;
    }

    private _ripple = HSL.WHITE;

    public set ripple(value: string) {
        if (this._ripple !== value) {
            this._ripple = value;
            this.dispatchEventWith(Events.RIPPLE_CHANGED);
        }
    }

    public get ripple(): string {
        return this._ripple;
    }
}
