import IColorRange from '../../interfaces/design/color/IColorRange';

export default class ColorRange implements IColorRange {
    public lightest: string;
    public light: string;
    public medium: string;
    public dark: string;
    public darkest: string;

    public constructor(lightest: string, light: string, medium: string, dark: string, darkest: string) {
        this.lightest = lightest;
        this.light = light;
        this.medium = medium;
        this.dark = dark;
        this.darkest = darkest;
    }
}
