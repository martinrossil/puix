import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/core/ISizeElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
        this.name = 'SizeElement';
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.updateDisplay();
    }

    protected invalidateDisplay(): void {
        if (this.connected) {
            this.updateDisplay();
        }
    }

    protected updateDisplay(): void {
        // override
    }

    public setSize(width: number, height: number): void {
        if (isNaN(this._width) && isNaN(width) && isNaN(this._height) && isNaN(height)) {
            return;
        }
        if (this._width === width && this._height === height) {
            return;
        }
        if (isNaN(width) && (isNaN(height))) {
            this._width = NaN;
            this._height = NaN;
            this._actualWidth = 0;
            this._actualHeight = 0;
            this.style.width = this._actualWidth + 'px';
            this.style.height = this._actualHeight + 'px';
            this.invalidateDisplay();
            return;
        }
        if (!isNaN(width) && (isNaN(height))) {
            this._width = this._actualWidth = this.getValidMinMaxWidth(width);
            this._height = NaN;
            this.style.width = this._actualWidth + 'px';
            this.invalidateDisplay();
            return;
        }
        if (isNaN(width) && (!isNaN(height))) {
            this._height = this._actualHeight = this.getValidMinMaxHeight(height);
            this._width = NaN;
            this.style.height = this._actualHeight + 'px';
            this.invalidateDisplay();
            return;
        }
        this._width = this._actualWidth = this.getValidMinMaxWidth(width);
        this._height = this._actualHeight = this.getValidMinMaxHeight(height);
        this.style.width = this._actualWidth + 'px';
        this.style.height = this._actualHeight + 'px';
        this.invalidateDisplay();
    }

    private getValidMinMaxWidth(width: number): number {
        if (width < this.minWidth) {
            return this.minWidth;
        }
        if (width > this.maxWidth) {
            return this.maxWidth;
        }
        return width;
    }

    private getValidMinMaxHeight(height: number): number {
        if (height < this.minHeight) {
            return this.minHeight;
        }
        if (height > this.maxHeight) {
            return this.maxHeight;
        }
        return height;
    }

    public setActualSize(width: number, height: number): void {
        if (!isNaN(this.width) && !isNaN(this.height)) {
            return;
        }
        if (this._actualWidth === width && this._actualHeight === height) {
            return;
        }
        if (isNaN(width) && (isNaN(height))) {
            this._actualWidth = this.minWidth;
            this._actualHeight = this.minHeight;
            this.style.width = this._actualWidth + 'px';
            this.style.height = this._actualHeight + 'px';
            this.invalidateDisplay();
            return;
        }
        if (!isNaN(width) && (isNaN(height))) {
            this._actualWidth = this.getValidMinMaxWidth(width);
            this._actualHeight = this.minHeight;
            this.style.width = this._actualWidth + 'px';
            this.style.height = this._actualHeight + 'px';
            this.invalidateDisplay();
            return;
        }
        if (isNaN(width) && (!isNaN(height))) {
            this._actualWidth = this.minWidth;
            this._actualHeight = this.getValidMinMaxHeight(height);
            this.style.width = this._actualWidth + 'px';
            this.style.height = this._actualHeight + 'px';
            this.invalidateDisplay();
            return;
        }
        this._actualWidth = this.getValidMinMaxWidth(width);
        this._actualHeight = this.getValidMinMaxHeight(height);
        this.style.width = this._actualWidth + 'px';
        this.style.height = this._actualHeight + 'px';
        this.invalidateDisplay();
    }

    private _minWidth = 0;

    public set minWidth(value: number) {
        if (isNaN(value)) {
            this._minWidth = 0;
            this.invalidateDisplay();
            return;
        }
        if (this._minWidth === value) {
            return;
        }
        if (value < 0) {
            this._minWidth = 0;
        } else {
            this._minWidth = value;
        }
        if (!isNaN(this.width)) {
            if (this.width < this._minWidth) {
                this._width = this._minWidth;
            }
        }
        if (this.actualWidth < this._minWidth) {
            this._actualWidth = this._minWidth;
            this.style.width = this._actualWidth + 'px';
        }
        this.invalidateDisplay();
    }

    public get minWidth(): number {
        return this._minWidth;
    }

    private _actualWidth = 0;

    public set actualWidth(value: number) {
        if (!isNaN(this.width)) {
            return;
        }
        if (this._actualWidth === value) {
            return;
        }
        if (isNaN(value)) {
            this._actualWidth = this.minWidth;
            this.style.width = this._actualWidth + 'px';
            this.invalidateDisplay();
            return;
        }
        this._actualWidth = this.getValidMinMaxWidth(value);
        this.style.width = this._actualWidth + 'px';
        this.invalidateDisplay();
    }

    public get actualWidth(): number {
        return this._actualWidth;
    }

    private _width = NaN;

    public set width(value: number) {
        if (isNaN(this._width) && isNaN(value)) {
            return;
        }
        if (this._width === value) {
            return;
        }
        if (isNaN(value)) {
            this._width = value;
            this.invalidateDisplay();
            return;
        }
        this._width = this._actualWidth = this.getValidMinMaxWidth(value);
        this.style.width = this._actualWidth + 'px';
        this.invalidateDisplay();
    }

    public get width(): number {
        return this._width;
    }

    private _maxWidth = Infinity;

    public set maxWidth(value: number) {
        if (isNaN(value)) {
            this._maxWidth = Infinity;
            this.invalidateDisplay();
            return;
        }
        if (this._maxWidth === value) {
            return;
        }
        if (value < 0) {
            this._maxWidth = 0;
        } else {
            this._maxWidth = value;
        }
        if (!isNaN(this.width)) {
            if (this.width > this._maxWidth) {
                this._width = this._maxWidth;
            }
        }
        if (this.actualWidth > this._maxWidth) {
            this._actualWidth = this._maxWidth;
            this.style.width = this._actualWidth + 'px';
        }
        this.invalidateDisplay();
    }

    public get maxWidth(): number {
        return this._maxWidth;
    }

    private _minHeight = 0;

    public set minHeight(value: number) {
        if (isNaN(value)) {
            this._minHeight = 0;
            this.invalidateDisplay();
            return;
        }
        if (this._minHeight === value) {
            return;
        }
        if (value < 0) {
            this._minHeight = 0;
        } else {
            this._minHeight = value;
        }
        if (!isNaN(this.height)) {
            if (this.height < this._minHeight) {
                this._height = this._minHeight;
            }
        }
        if (this.actualHeight < this._minHeight) {
            this._actualHeight = this._minHeight;
            this.style.height = this._actualHeight + 'px';
        }
        this.invalidateDisplay();
    }

    public get minHeight(): number {
        return this._minHeight;
    }

    private _actualHeight = 0;

    public set actualHeight(value: number) {
        if (!isNaN(this.height)) {
            return;
        }
        if (this._actualHeight === value) {
            return;
        }
        if (isNaN(value)) {
            this._actualHeight = this.minHeight;
            this.style.height = this._actualHeight + 'px';
            this.invalidateDisplay();
            return;
        }
        this._actualHeight = this.getValidMinMaxHeight(value);
        this.style.height = this._actualHeight + 'px';
        this.invalidateDisplay();
    }

    public get actualHeight(): number {
        return this._actualHeight;
    }

    private _height = NaN;

    public set height(value: number) {
        if (isNaN(this._height) && isNaN(value)) {
            return;
        }
        if (this._height === value) {
            return;
        }
        if (isNaN(value)) {
            this._height = value;
            this.invalidateDisplay();
            return;
        }
        this._height = this._actualHeight = this.getValidMinMaxHeight(value);
        this.style.height = this._actualHeight + 'px';
        this.invalidateDisplay();
    }

    public get height(): number {
        return this._height;
    }

    private _maxHeight = Infinity;

    public set maxHeight(value: number) {
        if (isNaN(value)) {
            this._maxHeight = Infinity;
            this.invalidateDisplay();
            return;
        }
        if (this._maxHeight === value) {
            return;
        }
        if (value < 0) {
            this._maxHeight = 0;
        } else {
            this._maxHeight = value;
        }
        if (!isNaN(this.height)) {
            if (this.height > this._maxHeight) {
                this._height = this._maxHeight;
            }
        }
        if (this.actualHeight > this._maxHeight) {
            this._actualHeight = this._maxHeight;
            this.style.height = this._actualHeight + 'px';
        }
        this.invalidateDisplay();
    }

    public get maxHeight(): number {
        return this._maxHeight;
    }
}
customElements.define('size-element', SizeElement);
