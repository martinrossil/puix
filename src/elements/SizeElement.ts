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
        if (this._actualWidthChanged || this._actualHeightChanged) {
            this.actualSizeChanged();
        }
        if (this._internalSizeInvalidChanged) {
            this._internalSizeInvalid = false;
            this._internalSizeInvalidChanged = false;
            this.internalSizeInvalidChanged();
        }
    }

    protected actualSizeChanged(): void {
        this._actualWidthChanged = false;
        this._actualHeightChanged = false;
        this.style.width = this.actualWidth + 'px';
        this.style.height = this.actualHeight + 'px';
        this.updateDisplay(this.actualWidth, this.actualHeight);
    }

    protected internalSizeInvalidChanged(): void {
        // override
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    private _width = 0;
    public set width(value: number) {
        if (this._width === value) {
            return;
        }
        this._width = value;
        if (this._actualWidth === value) {
            return;
        }
        this._actualWidth = value;
        this._actualWidthChanged = true;
        this.invalidateProperties();
    }

    public get width(): number {
        return this._width;
    }

    private _height = 0;
    public set height(value: number) {
        if (this._height === value) {
            return;
        }
        this._height = value;
        if (this._actualHeight === value) {
            return;
        }
        this._actualHeight = value;
        this._actualHeightChanged = true;
        this.invalidateProperties();
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

    private _internalSizeInvalid = false;
    private _internalSizeInvalidChanged = false;
    public set internalSizeInvalid(value: boolean) {
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
