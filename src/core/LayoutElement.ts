import SizeElement from './SizeElement';
import LayoutElementInterface from './LayoutElementInterface';

export default class LayoutElement extends SizeElement implements LayoutElementInterface {
    static LAYOUT_DATA_CHANGED = 'LayoutElement.layoutDataChanged';

    public constructor() {
        super();
        this.name = 'LayoutElement';
    }

    private _top = NaN;

    public set top(value: number) {
        if (this._top !== value) {
            this._top = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get top(): number {
        return this._top;
    }

    private _right = NaN;

    public set right(value: number) {
        if (this._right !== value) {
            this._right = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get right(): number {
        return this._right;
    }

    private _bottom = NaN;

    public set bottom(value: number) {
        if (this._bottom !== value) {
            this._bottom = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get bottom(): number {
        return this._bottom;
    }

    private _left = NaN;

    public set left(value: number) {
        if (this._left !== value) {
            this._left = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get left(): number {
        return this._left;
    }

    private _horizontalCenter = NaN;

    public set horizontalCenter(value: number) {
        if (this._horizontalCenter !== value) {
            this._horizontalCenter = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get horizontalCenter(): number {
        return this._horizontalCenter;
    }

    private _verticalCenter = NaN;

    public set verticalCenter(value: number) {
        if (this._verticalCenter !== value) {
            this._verticalCenter = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get verticalCenter(): number {
        return this._verticalCenter;
    }

    private _includeInLayout = true;

    public set includeInLayout(value: boolean) {
        if (this._includeInLayout !== value) {
            this._includeInLayout = value;
            this.notifyLayoutDataChanged();
        }
    }

    public get includeInLayout(): boolean {
        return this._includeInLayout;
    }

    protected notifyLayoutDataChanged(): void {
        if (this.connected) {
            this.dispatchEventWith(LayoutElement.LAYOUT_DATA_CHANGED, true);
        }
    }
}
customElements.define('layout-element', LayoutElement);
