import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/ISizeElement';
import Values from '../enums/Values';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
        this.name = 'SizeElement';
    }

    protected connectedCallback(): void {
        super.connectedCallback();
        this.updateDisplay();
    }

    public setSize(width: number, height: number): void {
        if (this._width !== width) {
            if (isNaN(this._width) && !isNaN(width)) {
                this._width = this.getConstrainedWidth(width);
            } else if (!isNaN(this._width) && isNaN(width)) {
                this._width = NaN;
            } else {
                this._width = this.getConstrainedWidth(width);
            }
            this.actualWidth = this._width;
        }
        if (this._height !== height) {
            if (isNaN(this._height) && !isNaN(height)) {
                this._height = this.getConstrainedHeight(height);
            } else if (!isNaN(this._height) && isNaN(height)) {
                this._height = NaN;
            } else {
                this._height = this.getConstrainedHeight(height);
            }
            this.actualHeight = this._height;
        }
        this.invalidateDisplay();
    }

    public setActualSize(width: number, height: number): void {
        this.actualWidth = width;
        this.actualHeight = height;
    }

    protected invalidateDisplay(): void {
        // console.log(this.name, 'invalidateDisplay()');
        if (this.connected) {
            this.updateDisplay();
        }
    }

    protected updateDisplay(): void {
        // override
        // console.log(this.name, 'updateDisplay()');
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

    public set width(value: number) {
        if (this._width !== value) {
            if (isNaN(this._width) && !isNaN(value)) {
                this._width = this.getConstrainedWidth(value);
            } else if (!isNaN(this._width) && isNaN(value)) {
                this._width = NaN;
            } else {
                this._width = this.getConstrainedWidth(value);
            }
            this.actualWidth = this._width;
            this.invalidateDisplay();
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

    public set height(value: number) {
        if (this._height !== value) {
            if (isNaN(this._height) && !isNaN(value)) {
                this._height = this.getConstrainedHeight(value);
            } else if (!isNaN(this._height) && isNaN(value)) {
                this._height = NaN;
            } else {
                this._height = this.getConstrainedHeight(value);
            }
            this.actualHeight = this._height;
            this.invalidateDisplay();
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

    public set actualWidth(value: number) {
        if (isNaN(value)) {
            if (this._actualWidth !== this.minWidth) {
                this._actualWidth = this.minWidth;
                this.style.width = this._actualWidth + Values.PX;
            }
        } else if (this._actualWidth !== value) {
            this._actualWidth = this.getConstrainedWidth(value);
            this.style.width = this._actualWidth + Values.PX;
        }
    }

    public get actualWidth(): number {
        return this._actualWidth;
    }

    private _actualHeight = 0;

    public set actualHeight(value: number) {
        if (isNaN(value)) {
            if (this._actualHeight !== this.minHeight) {
                this._actualHeight = this.minHeight;
                this.style.height = this._actualHeight + Values.PX;
            }
        } else if (this._actualHeight !== value) {
            this._actualHeight = this.getConstrainedHeight(value);
            this.style.height = this._actualHeight + Values.PX;
        }
    }

    public get actualHeight(): number {
        return this._actualHeight;
    }
}
customElements.define('size-element', SizeElement);
