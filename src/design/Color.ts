import IColor from '../interfaces/IColor';

export default class Color implements IColor {
    static WHITE = '#FFF';
    static BLACK = '#000';

    public constructor(hue: number, saturation = NaN) {
        let correctedSaturation = 0;
        if (!isNaN(saturation)) {
            correctedSaturation = saturation;
        } else {
            correctedSaturation = this.getCorrectedSaturation(hue);
        }
        for (let i = 9; i >= 0; i--) {
            this.index.push(this.getHSL(hue, correctedSaturation, 5 + i * 10));
        }
    }

    protected getCorrectedSaturation(hue: number): number {
        if (hue >= 0 && hue < 30) {
            return 75;
        }
        if (hue >= 30 && hue < 60) {
            return 90;
        }
        if (hue >= 60 && hue < 90) {
            return 95;
        }
        if (hue >= 90 && hue < 120) {
            return 85;
        }
        if (hue >= 120 && hue < 150) {
            return 80;
        }
        if (hue >= 150 && hue < 180) {
            return 85;
        }
        if (hue >= 180 && hue < 210) {
            return 90;
        }
        if (hue >= 210 && hue < 240) {
            return 60;
        }
        if (hue >= 240 && hue < 270) {
            return 50;
        }
        if (hue >= 270 && hue < 300) {
            return 60;
        }
        if (hue >= 300 && hue < 330) {
            return 80;
        }
        if (hue >= 330 && hue <= 360) {
            return 60;
        }
        return 50;
    }

    protected getHSL(hue: number, sat: number, light: number): string {
        return 'hsl(' + hue + ', ' + sat + '%, ' + light + '%)';
    }

    public index: string[] = [];
}
