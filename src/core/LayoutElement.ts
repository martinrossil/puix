import SizeElement from './SizeElement';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import { Events } from '../enums/Events';

export default class LayoutElement extends SizeElement implements ILayoutElement {
    public constructor() {
        super();
        this.name = 'LayoutElement';
    }

    private _top = NaN;

    public set top(value: number) {
        if (isNaN(this._top) && isNaN(value)) {
            return;
        }
        if (this._top === value) {
            return;
        }
        this._top = value;
        this.notifyLayoutDataChanged();
    }

    public get top(): number {
        return this._top;
    }

    private _right = NaN;

    public set right(value: number) {
        if (isNaN(this._right) && isNaN(value)) {
            return;
        }
        if (this._right === value) {
            return;
        }
        this._right = value;
        this.notifyLayoutDataChanged();
    }

    public get right(): number {
        return this._right;
    }

    private _bottom = NaN;

    public set bottom(value: number) {
        if (isNaN(this._bottom) && isNaN(value)) {
            return;
        }
        if (this._bottom === value) {
            return;
        }
        this._bottom = value;
        this.notifyLayoutDataChanged();
    }

    public get bottom(): number {
        return this._bottom;
    }

    private _left = NaN;

    public set left(value: number) {
        if (isNaN(this._left) && isNaN(value)) {
            return;
        }
        if (this._left === value) {
            return;
        }
        this._left = value;
        this.notifyLayoutDataChanged();
    }

    public get left(): number {
        return this._left;
    }

    private _horizontalCenter = NaN;

    public set horizontalCenter(value: number) {
        if (isNaN(this._horizontalCenter) && isNaN(value)) {
            return;
        }
        if (this._horizontalCenter === value) {
            return;
        }
        this._horizontalCenter = value;
        this.notifyLayoutDataChanged();
    }

    public get horizontalCenter(): number {
        return this._horizontalCenter;
    }

    private _verticalCenter = NaN;

    public set verticalCenter(value: number) {
        if (isNaN(this._verticalCenter) && isNaN(value)) {
            return;
        }
        if (this._verticalCenter === value) {
            return;
        }
        this._verticalCenter = value;
        this.notifyLayoutDataChanged();
    }

    public get verticalCenter(): number {
        return this._verticalCenter;
    }

    protected notifyLayoutDataChanged(): void {
        if (this.connected) {
            this.dispatchEvent(new Event(Events.LAYOUT_DATA_CHANGED, { bubbles: true }));
        }
    }

    private _percentWidth = NaN;

    public set percentWidth(value: number) {
        if (isNaN(this._percentWidth) && isNaN(value)) {
            return;
        }
        if (this._percentWidth === value) {
            return;
        }
        if (isNaN(value)) {
            this._percentWidth = value;
            this.notifyLayoutDataChanged();
            return;
        }
        if (value < 0) {
            if (this._percentWidth !== 0) {
                this._percentWidth = 0;
                this.notifyLayoutDataChanged();
            }
            return;
        }
        this._percentWidth = value;
        this.notifyLayoutDataChanged();
    }

    public get percentWidth(): number {
        return this._percentWidth;
    }

    private _percentHeight = NaN;

    public set percentHeight(value: number) {
        if (isNaN(this._percentHeight) && isNaN(value)) {
            return;
        }
        if (this._percentHeight === value) {
            return;
        }
        if (isNaN(value)) {
            this._percentHeight = value;
            this.notifyLayoutDataChanged();
            return;
        }
        if (value < 0) {
            if (this._percentHeight !== 0) {
                this._percentHeight = 0;
                this.notifyLayoutDataChanged();
            }
            return;
        }
        this._percentHeight = value;
        this.notifyLayoutDataChanged();
    }

    public get percentHeight(): number {
        return this._percentHeight;
    }
}
customElements.define('layout-element', LayoutElement);
