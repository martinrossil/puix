import EventDispatcher from '../../core/EventDispatcher';
import IColors from '../../interfaces/design/color/IColors';
import HSL from './HSL';
import IColorRange from '../../interfaces/design/color/IColorRange';
import ColorRange from './ColorRange';

export default class Colors extends EventDispatcher implements IColors {
    public primary: IColorRange = new ColorRange(HSL.CYAN_50, HSL.CYAN_300, HSL.CYAN_500, HSL.CYAN_700, HSL.CYAN_900);
    public secondary: IColorRange = new ColorRange(HSL.INDIGO_50, HSL.INDIGO_300, HSL.INDIGO_500, HSL.INDIGO_700, HSL.INDIGO_900);
    public accent: IColorRange = new ColorRange(HSL.PINK_50, HSL.PINK_300, HSL.PINK_500, HSL.PINK_700, HSL.PINK_900);
    public neutral: IColorRange = new ColorRange(HSL.BLUE_GREY_50, HSL.BLUE_GREY_300, HSL.BLUE_GREY_500, HSL.BLUE_GREY_700, HSL.BLUE_GREY_900);
    public success: IColorRange = new ColorRange(HSL.GREEN_100, HSL.GREEN_300, HSL.GREEN_500, HSL.GREEN_700, HSL.GREEN_900);
    public warning: IColorRange = new ColorRange(HSL.YELLOW_50, HSL.YELLOW_300, HSL.YELLOW_500, HSL.YELLOW_700, HSL.YELLOW_900);
    public error: IColorRange = new ColorRange(HSL.RED_50, HSL.RED_300, HSL.RED_500, HSL.RED_700, HSL.RED_900);
}
