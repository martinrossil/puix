import EventDispatcher from '../core/EventDispatcher';
import ITheme from '../interfaces/design/ITheme';
import ITypography from '../interfaces/design/typography/ITypography';
import Typography from './typography/Typography';
import Events from '../consts/Events';
import IColor from '../interfaces/design/color/IColors';
import Colors from './color/Colors';

export default class Theme extends EventDispatcher implements ITheme {
    private _typography: ITypography = new Typography();

    public set typography(value: ITypography) {
        if (this._typography !== value) {
            this._typography = value;
            this.dispatchEventWith(Events.TYPOGRAPHY_CHANGED);
        }
    }

    public get typography(): ITypography {
        return this._typography;
    }

    private _colors: IColor = new Colors();

    public set colors(value: IColor) {
        if (this._colors !== value) {
            this._colors = value;
            this.dispatchEventWith(Events.COLOR_CHANGED);
        }
    }

    public get colors(): IColor {
        return this._colors;
    }
}
