import IColorRange from './IColorRange';
import ColorRange from './ColorRange';
import HSLA from './HSLA';
import IHSLA from './IHSLA';
import EventDispatcher from '../core/EventDispatcher';
import ITheme from './ITheme';

export default class Theme extends EventDispatcher implements ITheme {
    private static _primaryColors: IColorRange;

    public static get primaryColors(): IColorRange {
        if (!this._primaryColors) {
            const lightest: IHSLA = new HSLA(201, 100, 96);
            const light: IHSLA = new HSLA(201, 100, 96);
            const medium: IHSLA = new HSLA(201, 100, 96);
            const dark: IHSLA = new HSLA(201, 100, 96);
            const darkest: IHSLA = new HSLA(201, 100, 96);
            this._primaryColors = new ColorRange(lightest, light, medium, dark, darkest);
        }
        return this._primaryColors;
    }
}

/* hsla(201, 100%, 96%, 1)
hsla(203, 82%, 76%, 1)
hsla(207, 73%, 57%, 1)
hsla(211, 61%, 43%, 1)
hsla(215, 41%, 28%, 1) */
