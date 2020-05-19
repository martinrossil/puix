import EventDispatcher from '../core/EventDispatcher';
import Events from '../consts/Events';
import ILayoutData from '../interfaces/ILayoutData';

export default class LayoutData extends EventDispatcher implements ILayoutData {
    public constructor(percentWidth = NaN, percentHeight = NaN) {
        super();
        this._percentWidth = percentWidth;
        this._percentHeight = percentHeight;
    }

    protected _percentWidth = NaN;

    public set percentWidth(value: number) {
        if (this._percentWidth !== value) {
            if (!isNaN(value)) {
                if (value < 0) {
                    if (this._percentWidth !== 0) {
                        this._percentWidth = 0;
                        this.dispatchLayoutDataChanged();
                    }
                } else {
                    this._percentWidth = value;
                    this.dispatchLayoutDataChanged();
                }
            } else {
                this._percentWidth = value;
                this.dispatchLayoutDataChanged();
            }
        }
    }

    public get percentWidth(): number {
        return this._percentWidth;
    }

    private _percentHeight = NaN;

    public set percentHeight(value: number) {
        if (this._percentHeight !== value) {
            if (!isNaN(value)) {
                if (value < 0) {
                    if (this._percentHeight !== 0) {
                        this._percentHeight = 0;
                        this.dispatchLayoutDataChanged();
                    }
                } else {
                    this._percentHeight = value;
                    this.dispatchLayoutDataChanged();
                }
            } else {
                this._percentHeight = value;
                this.dispatchLayoutDataChanged();
            }
        }
    }

    public get percentHeight(): number {
        return this._percentHeight;
    }

    protected dispatchLayoutDataChanged(): void {
        this.dispatchEventWith(Events.LAYOUT_DATA_CHANGED);
    }
}
