import { FontWeight } from '../enums/FontWeight';

/**
 * Verdana 400 capHeight = 0.73, verticalOffset = 0.044, horizontalOffset = 0.13;
 * Inter 400 capHeight = 0.727, verticalOffset = 0.002, horizontalOffset = 0.121;
 * Inter 500 capHeight = 0.727, verticalOffset = 0.000, horizontalOffset = 0.11;
 * Inter 700 capHeight = 0.727, verticalOffset = 0.002, horizontalOffset = 0.086;
 * Montserrat 400 capHeight = 0.7, verticalOffset = -0.013, horizontalOffset = 0.163;
 * SegoeUI 400 capHeight = 0.7, verticalOffset = -0.091, horizontalOffset = 0.13;
 * SegoeUI 600 capHeight = 0.7, verticalOffset = -0.091, horizontalOffset = 0.123;
 */

export default class TypeFace {
    public constructor(fontFamily = 'Arial', fontWeight: FontWeight = FontWeight.REGULAR_400, capHeight = 0.715, xOffset = 0.11, yOffset = 0.027) {
        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
        this.capHeight = capHeight;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }

    private _fontFamily = 'Arial';

    public set fontFamily(value: string) {
        if (this._fontFamily === value) {
            return;
        }
        this._fontFamily = value;
    }

    public get fontFamily(): string {
        return this._fontFamily;
    }

    private _fontWeight: FontWeight = FontWeight.REGULAR_400;

    public set fontWeight(value: FontWeight) {
        if (this._fontWeight === value) {
            return;
        }
        this._fontWeight = value;
    }

    public get fontWeight(): FontWeight {
        return this._fontWeight;
    }

    private _capHeight = 0.715;

    public set capHeight(value: number) {
        if (this._capHeight === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            this._capHeight = 0.715;
        } else {
            this._capHeight = value;
        }
    }

    public get capHeight(): number {
        return this._capHeight;
    }

    private _xOffset = 0.11;

    public set xOffset(value: number) {
        if (this._xOffset === value) {
            return;
        }
        if (isNaN(value)) {
            this._xOffset = 0.11;
        } else {
            this._xOffset = value;
        }
    }

    public get xOffset(): number {
        return this._xOffset;
    }

    private _yOffset = 0.027;

    public set yOffset(value: number) {
        if (this._yOffset === value) {
            return;
        }
        if (isNaN(value)) {
            this._yOffset = 0.027;
        } else {
            this._yOffset = value;
        }
    }

    public get yOffset(): number {
        return this._yOffset;
    }
}
