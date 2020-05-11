import SizeElement from './SizeElement';
import ILayoutElement from '../interfaces/ILayoutElement';
import Events from '../enums/Events';

export default class LayoutElement extends SizeElement implements ILayoutElement {
    public constructor() {
        super();
        this.name = 'LayoutElement';
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

    private _percentWidth = NaN;

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
        if (this.connected) {
            this.dispatchEventWith(Events.LAYOUT_DATA_CHANGED);
        }
    }
}
customElements.define('layout-element', LayoutElement);
