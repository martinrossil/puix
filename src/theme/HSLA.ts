import IHSLA from './IHSLA';
import EventDispatcher from '../core/EventDispatcher';

export default class HSLA extends EventDispatcher implements IHSLA {
    public static CHANGED = 'HSLA.CHANGED';

    public constructor(hue = 0, saturation = 100, lightness = 50, name = '', opacity = 1.0) {
        super();
        this.setHue(hue);
        this.setSaturation(saturation);
        this.setLightness(lightness);
        this.setOpacity(opacity);
        this.name = name;
    }

    private _hue = 0;

    public set hue(value: number) {
        this.setHue(value, true);
    }

    public get hue(): number {
        return this._hue;
    }

    private _saturation = 0;

    public set saturation(value: number) {
        this.setSaturation(value, true);
    }

    public get saturation(): number {
        return this._saturation;
    }

    private _lightness = 0;

    public set lightness(value: number) {
        this.setLightness(value, true);
    }

    public get lightness(): number {
        return this._lightness;
    }

    private _opacity = 1;

    public set opacity(value: number) {
        this.setOpacity(value, true);
    }

    public get opacity(): number {
        return this._opacity;
    }

    private setHue(value: number, dispatch = false): void {
        if (isNaN(value) || value < 0 || value > 360) {
            if (this._hue !== 0) {
                this._hue = 0;
                if (dispatch) {
                    this.notifyChange();
                }
            }
        } else {
            this._hue = value;
            if (dispatch) {
                this.notifyChange();
            }
        }
    }

    private setSaturation(value: number, dispatch = false): void {
        if (isNaN(value) || value < 0 || value > 100) {
            if (this._saturation !== 0) {
                this._saturation = 100;
                if (dispatch) {
                    this.notifyChange();
                }
            }
        } else {
            this._saturation = value;
            if (dispatch) {
                this.notifyChange();
            }
        }
    }

    private setLightness(value: number, dispatch = false): void {
        if (isNaN(value) || value < 0 || value > 100) {
            if (this._lightness !== 0) {
                this._lightness = 0;
                if (dispatch) {
                    this.notifyChange();
                }
            }
        } else {
            this._lightness = value;
            if (dispatch) {
                this.notifyChange();
            }
        }
    }

    private setOpacity(value: number, dispatch = false): void {
        if (isNaN(value) || value < 0 || value > 1) {
            if (this._opacity !== 1) {
                this._opacity = 1;
                if (dispatch) {
                    this.notifyChange();
                }
            }
        } else {
            this._opacity = value;
            if (dispatch) {
                this.notifyChange();
            }
        }
    }

    public get value(): string {
        return 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, ' + this.opacity + ')';
    }

    private notifyChange(): void {
        this.dispatchEventWith(HSLA.CHANGED);
    }
}
