import IColorCollection from '../../interfaces/design/color/IColorCollection';
import ColorNames from './ColorNames';
import HSL from './HSL';

export default class ColorCollection implements IColorCollection {
    public constructor(name: number) {
        if (name === ColorNames.GREY) {
            this.setGrey();
        } else if (name === ColorNames.BLUE_GREY) {
            this.setBlueGrey();
        } else if (name === ColorNames.INDIGO) {
            this.setIndigo();
        } else if (name === ColorNames.PINK) {
            this.setPink();
        } else if (name === ColorNames.CYAN) {
            this.setCyan();
        } else if (name === ColorNames.GREEN) {
            this.setGreen();
        } else if (name === ColorNames.YELLOW) {
            this.setYellow();
        } else if (name === ColorNames.RED) {
            this.setRed();
        }
    }

    protected setGrey(): void {
        this.c50 = HSL.GREY_50;
        this.c100 = HSL.GREY_100;
        this.c200 = HSL.GREY_200;
        this.c300 = HSL.GREY_300;
        this.c400 = HSL.GREY_400;
        this.c500 = HSL.GREY_500;
        this.c600 = HSL.GREY_600;
        this.c700 = HSL.GREY_700;
        this.c800 = HSL.GREY_800;
        this.c900 = HSL.GREY_900;
    }

    protected setBlueGrey(): void {
        this.c50 = HSL.BLUE_GREY_50;
        this.c100 = HSL.BLUE_GREY_100;
        this.c200 = HSL.BLUE_GREY_200;
        this.c300 = HSL.BLUE_GREY_300;
        this.c400 = HSL.BLUE_GREY_400;
        this.c500 = HSL.BLUE_GREY_500;
        this.c600 = HSL.BLUE_GREY_600;
        this.c700 = HSL.BLUE_GREY_700;
        this.c800 = HSL.BLUE_GREY_800;
        this.c900 = HSL.BLUE_GREY_900;
    }

    protected setIndigo(): void {
        this.c50 = HSL.INDIGO_50;
        this.c100 = HSL.INDIGO_100;
        this.c200 = HSL.INDIGO_200;
        this.c300 = HSL.INDIGO_300;
        this.c400 = HSL.INDIGO_400;
        this.c500 = HSL.INDIGO_500;
        this.c600 = HSL.INDIGO_600;
        this.c700 = HSL.INDIGO_700;
        this.c800 = HSL.INDIGO_800;
        this.c900 = HSL.INDIGO_900;
    }

    protected setPink(): void {
        this.c50 = HSL.PINK_50;
        this.c100 = HSL.PINK_100;
        this.c200 = HSL.PINK_200;
        this.c300 = HSL.PINK_300;
        this.c400 = HSL.PINK_400;
        this.c500 = HSL.PINK_500;
        this.c600 = HSL.PINK_600;
        this.c700 = HSL.PINK_700;
        this.c800 = HSL.PINK_800;
        this.c900 = HSL.PINK_900;
    }

    protected setCyan(): void {
        this.c50 = HSL.CYAN_50;
        this.c100 = HSL.CYAN_100;
        this.c200 = HSL.CYAN_200;
        this.c300 = HSL.CYAN_300;
        this.c400 = HSL.CYAN_400;
        this.c500 = HSL.CYAN_500;
        this.c600 = HSL.CYAN_600;
        this.c700 = HSL.CYAN_700;
        this.c800 = HSL.CYAN_800;
        this.c900 = HSL.CYAN_900;
    }

    protected setGreen(): void {
        this.c50 = HSL.GREEN_50;
        this.c100 = HSL.GREEN_100;
        this.c200 = HSL.GREEN_200;
        this.c300 = HSL.GREEN_300;
        this.c400 = HSL.GREEN_400;
        this.c500 = HSL.GREEN_500;
        this.c600 = HSL.GREEN_600;
        this.c700 = HSL.GREEN_700;
        this.c800 = HSL.GREEN_800;
        this.c900 = HSL.GREEN_900;
    }

    protected setYellow(): void {
        this.c50 = HSL.YELLOW_50;
        this.c100 = HSL.YELLOW_100;
        this.c200 = HSL.YELLOW_200;
        this.c300 = HSL.YELLOW_300;
        this.c400 = HSL.YELLOW_400;
        this.c500 = HSL.YELLOW_500;
        this.c600 = HSL.YELLOW_600;
        this.c700 = HSL.YELLOW_700;
        this.c800 = HSL.YELLOW_800;
        this.c900 = HSL.YELLOW_900;
    }

    protected setRed(): void {
        this.c50 = HSL.RED_50;
        this.c100 = HSL.RED_100;
        this.c200 = HSL.RED_200;
        this.c300 = HSL.RED_300;
        this.c400 = HSL.RED_400;
        this.c500 = HSL.RED_500;
        this.c600 = HSL.RED_600;
        this.c700 = HSL.RED_700;
        this.c800 = HSL.RED_800;
        this.c900 = HSL.RED_900;
    }

    public c50 = '';
    public c100 = '';
    public c200 = '';
    public c300 = '';
    public c400 = '';
    public c500 = '';
    public c600 = '';
    public c700 = '';
    public c800 = '';
    public c900 = '';
}
