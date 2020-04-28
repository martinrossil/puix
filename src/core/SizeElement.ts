import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/ISizeElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
        this.name = 'SizeElement';
    }

    public commitProperties(): void {
        super.commitProperties();
        console.log(this.name, 'commitProperties()');
        // console.log(this.name, 'width', this.minWidth, this.width, this.maxWidth, this.actualWidth);
        // console.log(this.name, 'height', this.minHeight, this.height, this.maxHeight, this.actualHeight);
        if (this._actualWidthChanged || this._actualHeightChanged) {
            this.actualSizeChanged();
        }
        if (this._widthChanged || this._heightChanged) {
            this.sizeChanged();
        }
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    public setActualSize(width: number, height: number): void {
        this.actualWidth = width;
        this.actualHeight = height;
    }

    protected actualSizeChanged(): void {
        this._actualWidthChanged = false;
        this._actualHeightChanged = false;
        this.style.width = this.actualWidth + 'px';
        this.style.height = this.actualHeight + 'px';
        console.log(this.name, 'actualSizeChanged()', this.actualWidth, this.actualHeight);
    }

    protected sizeChanged(): void {
        this._widthChanged = false;
        this._heightChanged = false;
        console.log(this.name, 'sizeChanged()', this.width, this.height);
    }

    private _minWidth = 0;

    public set minWidth(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._minWidth !== 0) {
                this._minWidth = 0;
            }
        } else if (this._minWidth !== value) {
            this._minWidth = value;
        }
        if (this._maxWidth < this._minWidth) {
            this._maxWidth = this._minWidth;
        }
        if (this.actualWidth < this._minWidth) {
            this.actualWidth = this._minWidth;
        }
    }

    public get minWidth(): number {
        return this._minWidth;
    }

    private _width = NaN;
    private _widthChanged = false;

    public set width(value: number) {
        if (isNaN(this._width) && isNaN(value)) {
            return;
        }
        if (this._width !== value) {
            if (isNaN(this._width) && !isNaN(value)) {
                this._width = this.getConstrainedWidth(value);
                this._widthChanged = true;
                this.invalidateProperties();
            } else if (!isNaN(this._width) && isNaN(value)) {
                this._width = value;
                this._widthChanged = true;
                this.invalidateProperties();
            } else {
                this._width = this.getConstrainedWidth(value);
                this._widthChanged = true;
                this.invalidateProperties();
            }
            this.actualWidth = this.width;
        }
    }

    public get width(): number {
        return this._width;
    }

    protected getConstrainedWidth(value: number): number {
        if (value < this.minWidth) {
            return this.minWidth;
        } else if (this.maxWidth < value) {
            return this.maxWidth;
        }
        return value;
    }

    private _maxWidth = Infinity;

    public set maxWidth(value: number) {
        if (isNaN(value)) {
            if (this._maxWidth !== Infinity) {
                this._maxWidth = Infinity;
            }
        } else if (value < 0) {
            this._maxWidth = 0;
        } else if (this._maxWidth !== value) {
            this._maxWidth = value;
        }
        if (this._minWidth > this._maxWidth) {
            this._minWidth = this._maxWidth;
        }
        if (this.actualWidth > this._maxWidth) {
            this.actualWidth = this._maxWidth;
        }
    }

    public get maxWidth(): number {
        return this._maxWidth;
    }

    private _minHeight = 0;

    public set minHeight(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._minHeight !== 0) {
                this._minHeight = 0;
            }
        } else if (this._minHeight !== value) {
            this._minHeight = value;
        }
        if (this._maxHeight < this._minHeight) {
            this._maxHeight = this._minHeight;
        }
        if (this.actualHeight < this._minHeight) {
            this.actualHeight = this._minHeight;
        }
    }

    public get minHeight(): number {
        return this._minHeight;
    }

    private _height = NaN;
    private _heightChanged = false;

    public set height(value: number) {
        if (isNaN(this._height) && isNaN(value)) {
            return;
        }
        if (this._height !== value) {
            if (isNaN(this._height) && !isNaN(value)) {
                this._height = this.getConstrainedHeight(value);
                this._heightChanged = true;
                this.invalidateProperties();
            } else if (!isNaN(this._height) && isNaN(value)) {
                this._height = value;
                this._heightChanged = true;
                this.invalidateProperties();
            } else {
                this._height = this.getConstrainedHeight(value);
            }
            this.actualHeight = this.height;
        }
    }

    public get height(): number {
        return this._height;
    }

    protected getConstrainedHeight(value: number): number {
        if (value < this.minHeight) {
            return this.minHeight;
        } else if (this.maxHeight < value) {
            return this.maxHeight;
        }
        return value;
    }

    private _maxHeight = Infinity;

    public set maxHeight(value: number) {
        if (isNaN(value)) {
            if (this._maxHeight !== Infinity) {
                this._maxHeight = Infinity;
            }
        } else if (value < 0) {
            this._maxHeight = 0;
        } else if (this._maxHeight !== value) {
            this._maxHeight = value;
        }
        if (this._minHeight > this._maxHeight) {
            this._minHeight = this._maxHeight;
        }
        if (this.actualHeight > this._maxHeight) {
            this.actualHeight = this._maxHeight;
        }
    }

    public get maxHeight(): number {
        return this._maxHeight;
    }

    private _actualWidth = 0;
    private _actualWidthChanged = false;

    public set actualWidth(value: number) {
        if (isNaN(value)) {
            if (this._actualWidth !== this.minWidth) {
                this._actualWidth = this.minWidth;
                this._actualWidthChanged = true;
                this.invalidateProperties();
            }
        } else if (this._actualWidth !== value) {
            this._actualWidth = this.getConstrainedWidth(value);
            this._actualWidthChanged = true;
            this.invalidateProperties();
        }
    }

    public get actualWidth(): number {
        return this._actualWidth;
    }

    private _actualHeight = 0;
    private _actualHeightChanged = false;

    public set actualHeight(value: number) {
        if (isNaN(value)) {
            if (this._actualHeight !== this.minHeight) {
                this._actualHeight = this.minHeight;
                this._actualHeightChanged = true;
                this.invalidateProperties();
            }
        } else if (this._actualHeight !== value) {
            this._actualHeight = this.getConstrainedHeight(value);
            this._actualHeightChanged = true;
            this.invalidateProperties();
        }
    }

    public get actualHeight(): number {
        return this._actualHeight;
    }
}
customElements.define('size-element', SizeElement);
