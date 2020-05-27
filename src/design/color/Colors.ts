import EventDispatcher from '../../core/EventDispatcher';
import IColors from '../../interfaces/design/color/IColors';
import IColorCollection from '../../interfaces/design/color/IColorCollection';
import ColorCollection from './ColorCollection';
import ColorNames from './ColorNames';
import Events from '../../consts/Events';

export default class Color extends EventDispatcher implements IColors {
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
}
