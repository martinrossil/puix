import IAnchorLayoutData from '../interfaces/IAnchorLayoutData';
import LayoutData from './LayoutData';

export default class AnchorLayoutData extends LayoutData implements IAnchorLayoutData {
    public constructor() {
        super();
    }

    private _horizontalCenter = NaN;

    public set horizontalCenter(value: number) {
        if (isNaN(this._horizontalCenter) && isNaN(value)) {
            return;
        }
        if (this._horizontalCenter !== value) {
            this._horizontalCenter = value;
            this.notifyIfPossible();
        }
    }

    public get horizontalCenter(): number {
        return this._horizontalCenter;
    }

    private _verticalCenter = NaN;

    public set verticalCenter(value: number) {
        if (isNaN(this._verticalCenter) && isNaN(value)) {
            return;
        }
        if (this._verticalCenter !== value) {
            this._verticalCenter = value;
            this.notifyIfPossible();
        }
    }

    public get verticalCenter(): number {
        return this._verticalCenter;
    }

    private _top = NaN;

    public set top(value: number) {
        if (isNaN(this._top) && isNaN(value)) {
            return;
        }
        if (this._top !== value) {
            this._top = value;
            this.notifyIfPossible();
        }
    }

    public get top(): number {
        return this._top;
    }

    private _right = NaN;

    public set right(value: number) {
        if (isNaN(this._right) && isNaN(value)) {
            return;
        }
        if (this._right !== value) {
            this._right = value;
            this.notifyIfPossible();
        }
    }

    public get right(): number {
        return this._right;
    }

    private _bottom = NaN;

    public set bottom(value: number) {
        if (isNaN(this._bottom) && isNaN(value)) {
            return;
        }
        if (this._bottom !== value) {
            this._bottom = value;
            this.notifyIfPossible();
        }
    }

    public get bottom(): number {
        return this._bottom;
    }

    private _left = NaN;

    public set left(value: number) {
        if (isNaN(this._left) && isNaN(value)) {
            return;
        }
        if (this._left !== value) {
            this._left = value;
            this.notifyIfPossible();
        }
    }

    public get left(): number {
        return this._left;
    }
}
