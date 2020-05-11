import IFontDescription from '../interfaces/IFontDescription';
import FontDescription from '../text/FontDescription';
import IColor from '../interfaces/IColor';
import Color from '../design/Color';
export default class Theme {
    static PRIMARY_COLOR: IColor = new Color(205);
    static SECONDARY_COLOR: IColor = new Color(50);
    static NEUTRAL_COLOR: IColor = new Color(200, 10);
    static ERROR_COLOR: IColor = new Color(0);
    static WARNING_COLOR: IColor = new Color(45);
    static SUCCESS_COLOR: IColor = new Color(120);
    static PRIMARY_FONT: IFontDescription = new FontDescription('"Montserrat", sans-serif', 0.7013, -0.0117);
    static SECONDARY_FONT: IFontDescription = new FontDescription('"Montserrat", sans-serif', 0.7013, -0.0117);
}
