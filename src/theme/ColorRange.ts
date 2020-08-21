import EventDispatcher from '../core/EventDispatcher';
import IHSLA from './IHSLA';
import Color from './HSLA';
import IColorRange from './IColorRange';

export default class ColorRange extends EventDispatcher implements IColorRange {
    public static CHANGED = 'ColorRange.CHANGED';
    public constructor(lightest: IHSLA, light: IHSLA, medium: IHSLA, dark: IHSLA, darkest: IHSLA) {
        super();
        this.name = 'ColorRange';
        this._lightest = lightest;
        this._light = light;
        this._medium = medium;
        this._dark = dark;
        this._darkest = darkest;
        this._lightest.addEventListener(Color.CHANGED, this.colorChanged);
        this._light.addEventListener(Color.CHANGED, this.colorChanged);
        this._medium.addEventListener(Color.CHANGED, this.colorChanged);
        this._dark.addEventListener(Color.CHANGED, this.colorChanged);
        this._darkest.addEventListener(Color.CHANGED, this.colorChanged);
    }

    private colorChanged(): void {
        this.dispatchEventWith(ColorRange.CHANGED);
    }

    private _lightest: IHSLA;

    public set lightest(value: IHSLA) {
        if (this._lightest !== value) {
            this._lightest.removeEventListener(Color.CHANGED, this.colorChanged);
            this._lightest = value;
            this._lightest.addEventListener(Color.CHANGED, this.colorChanged);
        }
    }

    public get lightest(): IHSLA {
        return this._lightest;
    }

    private _light: IHSLA;

    public set light(value: IHSLA) {
        if (this._light !== value) {
            this._light.removeEventListener(Color.CHANGED, this.colorChanged);
            this._light = value;
            this._light.addEventListener(Color.CHANGED, this.colorChanged);
        }
    }

    public get light(): IHSLA {
        return this._light;
    }

    private _medium: IHSLA;

    public set medium(value: IHSLA) {
        if (this._medium !== value) {
            this._medium.removeEventListener(Color.CHANGED, this.colorChanged);
            this._medium = value;
            this._medium.addEventListener(Color.CHANGED, this.colorChanged);
        }
    }

    public get medium(): IHSLA {
        return this._medium;
    }

    private _dark: IHSLA;

    public set dark(value: IHSLA) {
        if (this._dark !== value) {
            this._dark.removeEventListener(Color.CHANGED, this.colorChanged);
            this._dark = value;
            this._dark.addEventListener(Color.CHANGED, this.colorChanged);
        }
    }

    public get dark(): IHSLA {
        return this._dark;
    }

    private _darkest: IHSLA;

    public set darkest(value: IHSLA) {
        if (this._darkest !== value) {
            this._darkest.removeEventListener(Color.CHANGED, this.colorChanged);
            this._darkest = value;
            this._darkest.addEventListener(Color.CHANGED, this.colorChanged);
        }
    }

    public get darkest(): IHSLA {
        return this._darkest;
    }
}
