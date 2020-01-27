import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/ISizeElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
    }

    protected updateDisplay(actualWidth: number, actualHeight: number): void {
        // override
        console.log('updateDisplay()', actualWidth, actualHeight);
    }

    protected commitProperties(): void {
        super.commitProperties();
        /* if (this._widthChanged || this._heightChanged) {
            this.sizeChanged();
        } */
        if (this._actualWidthChanged || this._actualHeightChanged) {
            this.actualSizeChanged();
        }
        if (this._internalWidthChanged || this._internalHeightChanged) {
            this.internalSizeChanged();
        }
        if (this._internalSizeInvalidChanged) {
            this.internalSizeInvalidChanged();
        }
    }

    /* protected sizeChanged(): void {
        console.log('SizeElement sizeChanged()', this.width, this.height);
        this._widthChanged = false;
        this._heightChanged = false;
        this.setActualSize(this.width, this.height);
    } */

    protected actualSizeChanged(): void {
        console.log('SizeElement actualSizeChanged()', this.actualWidth, this.actualHeight);
        this._actualWidthChanged = false;
        this._actualHeightChanged = false;
        this.style.width = this.actualWidth + 'px';
        this.style.height = this.actualHeight + 'px';
        this.updateDisplay(this.actualWidth, this.actualHeight);
    }

    protected internalSizeChanged(): void {
        console.log('SizeElement internalSizeChanged()', this.internalWidth, this.internalHeight);
        this._internalWidthChanged = false;
        this._internalHeightChanged = false;
        this.setActualSize(this.internalWidth, this.internalHeight);
        this.dispatchEventWith('internalSizeChanged');
    }

    protected internalSizeInvalidChanged(): void {
        console.log('SizeElement internalSizeInvalidChanged()');
        this._internalSizeInvalid = false;
        this._internalSizeInvalidChanged = false;
        // override
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    private _width = Number.NaN;
    // private _widthChanged = false;
    public set width(value: number) {
        if (this._width === value) {
            return;
        }
        this._width = value;
        // this._widthChanged = true;
        // this.invalidateProperties();
        this.actualWidth = value;
    }

    public get width(): number {
        return this._width;
    }

    private _height = Number.NaN;
    // private _heightChanged = false;
    public set height(value: number) {
        if (this._height === value) {
            return;
        }
        this._height = value;
        // this._heightChanged = true;
        // this.invalidateProperties();
        this.actualHeight = value;
    }

    public get height(): number {
        return this._height;
    }

    public setActualSize(width: number, height: number): void {
        this.actualWidth = width;
        this.actualHeight = height;
    }

    private _actualWidth = 0;
    private _actualWidthChanged = false;
    public set actualWidth(value: number) {
        if (this._actualWidth === value) {
            return;
        }
        this._actualWidth = value;
        this._actualWidthChanged = true;
        this.invalidateProperties();
    }

    public get actualWidth(): number {
        return this._actualWidth;
    }

    private _actualHeight = 0;
    private _actualHeightChanged = false;
    public set actualHeight(value: number) {
        if (this._actualHeight === value) {
            return;
        }
        this._actualHeight = value;
        this._actualHeightChanged = true;
        this.invalidateProperties();
    }

    public get actualHeight(): number {
        return this._actualHeight;
    }

    public setInternalSize(width: number, height: number): void {
        this.internalWidth = width;
        this.internalHeight = height;
    }

    private _internalWidth = 0;
    private _internalWidthChanged = false;
    public set internalWidth(value: number) {
        if (this._internalWidth === value) {
            return;
        }
        this._internalWidth = value;
        this._internalWidthChanged = true;
        this.invalidateProperties();
    }

    public get internalWidth(): number {
        return this._internalWidth;
    }

    private _internalHeight = 0;
    private _internalHeightChanged = false;
    public set internalHeight(value: number) {
        if (this._internalHeight === value) {
            return;
        }
        this._internalHeight = value;
        this._internalHeightChanged = true;
        this.invalidateProperties();
    }

    public get internalHeight(): number {
        return this._internalHeight;
    }

    private _internalSizeInvalid = false;
    private _internalSizeInvalidChanged = false;
    public set internalSizeInvalid(value: boolean) {
        console.log('SizeElement internalSizeInvalid value');
        if (this._internalSizeInvalid === value) {
            return;
        }
        this._internalSizeInvalid = true;
        this._internalSizeInvalidChanged = true;
        this.invalidateProperties();
    }

    public get internalSizeInvalid(): boolean {
        return this._internalSizeInvalid;
    }
}
customElements.define('size-element', SizeElement);
