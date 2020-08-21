import ITheme from './ITheme';
import Theme from './Theme';

export default class Design {
    private static _theme: ITheme;

    public static get theme(): ITheme {
        if (!this._theme) {
            this._theme = new Theme();
        }
        return this._theme;
    }
}
