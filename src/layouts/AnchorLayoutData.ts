import IAnchorLayoutData from '../interfaces/IAnchorLayoutData';
import EventDispatcher from '../core/EventDispatcher';
import Events from '../consts/Events';

export default class AnchorLayoutData extends EventDispatcher implements IAnchorLayoutData {
    public constructor(left = NaN, top = NaN, right = NaN, bottom = NaN, hc = NaN, vc = NaN) {
        super();
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
            this.notifyChange();
        }
    }

    public get left(): number {
        return this._left;
    }

    private _top = NaN;

    public set top(value: number) {
        if (this._top !== value) {
            this._top = value;
            this.notifyChange();
        }
    }

    public get top(): number {
        return this._top;
    }

    private _right = NaN;

    public set right(value: number) {
        if (this._right !== value) {
            this._right = value;
            this.notifyChange();
        }
    }

    public get right(): number {
        return this._right;
    }

    private _bottom = NaN;

    public set bottom(value: number) {
        if (this._bottom !== value) {
            this._bottom = value;
            this.notifyChange();
        }
    }

    public get bottom(): number {
        return this._bottom;
    }

    private _horizontalCenter = NaN;

    public set horizontalCenter(value: number) {
        if (this._horizontalCenter !== value) {
            this._horizontalCenter = value;
            this.notifyChange();
        }
    }

    public get horizontalCenter(): number {
        return this._horizontalCenter;
    }

    private _verticalCenter = NaN;

    public set verticalCenter(value: number) {
        if (this._verticalCenter !== value) {
            this._verticalCenter = value;
            this.notifyChange();
        }
    }

    public get verticalCenter(): number {
        return this._verticalCenter;
    }

    protected notifyChange(): void {
        this.dispatchEventWith(Events.LAYOUT_DATA_CHANGED);
    }
}
