import IAnchorLayoutData from '../interfaces/IAnchorLayoutData';
import LayoutData from './LayoutData';

export default class AnchorLayoutData extends LayoutData implements IAnchorLayoutData {
    public constructor(left = NaN, top = NaN, right = NaN, bottom = NaN, hc = NaN, vc = NaN, pw = NaN, ph = NaN) {
        super(pw, ph);
        this.name = 'AnchorLayoutData';
        this._left = left;
        this._top = top;
        this._right = right;
        this._bottom = bottom;
        this._horizontalCenter = hc;
        this._verticalCenter = vc;
    }

    private _left = NaN;

    public set left(value: number) {
        if (this._left !== value) {
            this._left = value;
            this.dispatchLayoutDataChanged();
        }
    }

    public get left(): number {
        return this._left;
    }

    private _top = NaN;

    public set top(value: number) {
        if (this._top !== value) {
            this._top = value;
            this.dispatchLayoutDataChanged();
        }
    }

    public get top(): number {
        return this._top;
    }

    private _right = NaN;

    public set right(value: number) {
        if (this._right !== value) {
            this._right = value;
            this.dispatchLayoutDataChanged();
        }
    }

    public get right(): number {
        return this._right;
    }

    private _bottom = NaN;

    public set bottom(value: number) {
        if (this._bottom !== value) {
            this._bottom = value;
            this.dispatchLayoutDataChanged();
        }
    }

    public get bottom(): number {
        return this._bottom;
    }

    private _horizontalCenter = NaN;

    public set horizontalCenter(value: number) {
        if (this._horizontalCenter !== value) {
            this._horizontalCenter = value;
            this.dispatchLayoutDataChanged();
        }
    }

    public get horizontalCenter(): number {
        return this._horizontalCenter;
    }

    private _verticalCenter = NaN;

    public set verticalCenter(value: number) {
        if (this._verticalCenter !== value) {
            this._verticalCenter = value;
            this.dispatchLayoutDataChanged();
        }
    }

    public get verticalCenter(): number {
        return this._verticalCenter;
    }
}
