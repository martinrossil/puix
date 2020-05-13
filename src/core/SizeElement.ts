import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/ISizeElement';

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

    public setExplicitSize(width: number, height: number): void {
        if (this._explicitWidth === width && this._explicitHeight === height) {
            return;
        }
        let widthChanged = false;
        if (isNaN(width)) {
            widthChanged = true;
            this._explicitWidth = width;
        } else {
            if (width < 0) {
                if (this._explicitWidth !== 0) {
                    widthChanged = true;
                    this._explicitWidth = 0;
                }
            } else {
                widthChanged = true;
                this._explicitWidth = width;
                this._minWidth = width;
                this._width = width;
                this._maxWidth = width;
                this.style.width = this._width + 'px';
            }
        }
        let heightChanged = false;
        if (isNaN(height)) {
            heightChanged = true;
            this._explicitHeight = height;
        } else {
            if (height < 0) {
                if (this._explicitHeight !== 0) {
                    heightChanged = true;
                    this._explicitHeight = 0;
                }
            } else {
                heightChanged = true;
                this._explicitHeight = height;
                this._minHeight = height;
                this._height = height;
                this._maxHeight = height;
                this.style.height = this._height + 'px';
            }
        }
        if (widthChanged || heightChanged) {
            this.invalidateDisplay();
        }
    }

    public setSize(width: number, height: number): void {
        if (!isNaN(this.explicitWidth) && !isNaN(this.explicitHeight)) {
            return;
        }
        let widthChanged = false;
        if (isNaN(width) || width < 0) {
            if (this._width !== this.minWidth) {
                widthChanged = true;
                this._width = this.minWidth;
                this.style.width = this._width + 'px';
            }
        } else if (width < this.minWidth) {
            if (this._width !== this.minWidth) {
                widthChanged = true;
                this._width = this.minWidth;
                this.style.width = this._width + 'px';
            }
        } else if (this.maxWidth < width) {
            if (this._width !== this.maxWidth) {
                widthChanged = true;
                this._width = this.maxWidth;
                this.style.width = this._width + 'px';
            }
        } else {
            widthChanged = true;
            this._width = width;
            this.style.width = this._width + 'px';
        }
        let heightChanged = false;
        if (isNaN(height) || height < 0) {
            if (this._height !== this.minHeight) {
                heightChanged = true;
                this._height = this.minHeight;
                this.style.height = this._height + 'px';
            }
        } else if (height < this.minHeight) {
            if (this._height !== this.minHeight) {
                heightChanged = true;
                this._height = this.minHeight;
                this.style.height = this._height + 'px';
            }
        } else if (this.maxHeight < height) {
            if (this._height !== this.maxHeight) {
                heightChanged = true;
                this._height = this.maxHeight;
                this.style.height = this._height + 'px';
            }
        } else {
            heightChanged = true;
            this._height = height;
            this.style.height = this._height + 'px';
        }

        if (widthChanged || heightChanged) {
            this.invalidateDisplay();
        }
    }

    private _minWidth = 0;

    public set minWidth(value: number) {
        if (this._minWidth === value || !isNaN(this.explicitWidth)) {
            return;
        }
        let changed = false;
        if (isNaN(value) || value < 0) {
            if (this._minWidth !== 0) {
                changed = true;
                this._minWidth = 0;
            }
        } else if (value > this.maxWidth) {
            if (this._minWidth !== this.maxWidth) {
                changed = true;
                this._minWidth = this.maxWidth;
            }
        } else {
            changed = true;
            this._minWidth = value;
        }
        if (this._width < this._minWidth) {
            changed = true;
            this._width = this._minWidth;
            this.style.width = this._width + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get minWidth(): number {
        return this._minWidth;
    }

    private _width = 0;

    public set width(value: number) {
        if (this._width === value || !isNaN(this.explicitWidth)) {
            return;
        }
        let changed = false;
        if (isNaN(value) || value < 0) {
            if (this._width !== this.minWidth) {
                changed = true;
                this._width = this.minWidth;
                this.style.width = this._width + 'px';
            }
        } else if (value < this.minWidth) {
            if (this._width !== this.minWidth) {
                changed = true;
                this._width = this.minWidth;
                this.style.width = this._width + 'px';
            }
        } else if (this.maxWidth < value) {
            if (this._width !== this.maxWidth) {
                changed = true;
                this._width = this.maxWidth;
                this.style.width = this._width + 'px';
            }
        } else {
            changed = true;
            this._width = value;
            this.style.width = this._width + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get width(): number {
        return this._width;
    }

    private _explicitWidth = NaN;

    public set explicitWidth(value: number) {
        if (this._explicitWidth === value) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            changed = true;
            this._explicitWidth = value;
        } else {
            if (value < 0) {
                if (this._explicitWidth !== 0) {
                    changed = true;
                    this._explicitWidth = 0;
                }
            } else {
                changed = true;
                this._explicitWidth = value;
                this._minWidth = value;
                this._width = value;
                this._maxWidth = value;
                this.style.width = this._width + 'px';
            }
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get explicitWidth(): number {
        return this._explicitWidth;
    }

    private _maxWidth = Infinity;

    public set maxWidth(value: number) {
        if (this._maxWidth === value || !isNaN(this.explicitWidth)) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            if (this._maxWidth !== Infinity) {
                changed = true;
                this._maxWidth = Infinity;
            }
        } else if (value < this.minWidth) {
            if (this._maxWidth !== this.minWidth) {
                changed = true;
                this._maxWidth = this.minWidth;
            }
        } else {
            changed = true;
            this._maxWidth = value;
        }
        if (this._width > this._maxWidth) {
            changed = true;
            this._width = this._maxWidth;
            this.style.width = this._width + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get maxWidth(): number {
        return this._maxWidth;
    }

    private _minHeight = 0;

    public set minHeight(value: number) {
        if (this._minHeight === value || !isNaN(this.explicitHeight)) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            if (this._minHeight !== Infinity) {
                changed = true;
                this._minHeight = Infinity;
            }
        } else if (value > this.maxHeight) {
            if (this._minHeight !== this.maxHeight) {
                changed = true;
                this._minHeight = this.maxHeight;
            }
        } else {
            changed = true;
            this._minHeight = value;
        }
        if (this._height < this._minHeight) {
            changed = true;
            this._height = this._minHeight;
            this.style.height = this._height + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get minHeight(): number {
        return this._minHeight;
    }

    private _height = 0;

    public set height(value: number) {
        if (this._height === value || !isNaN(this.explicitHeight)) {
            return;
        }
        let changed = false;
        if (isNaN(value) || value < 0) {
            if (this._height !== this.minHeight) {
                changed = true;
                this._height = this.minHeight;
                this.style.height = this._height + 'px';
            }
        } else if (value < this.minHeight) {
            if (this._height !== this.minHeight) {
                changed = true;
                this._height = this.minHeight;
                this.style.height = this._height + 'px';
            }
        } else if (this.maxHeight < value) {
            if (this._height !== this.maxHeight) {
                changed = true;
                this._height = this.maxHeight;
                this.style.height = this._height + 'px';
            }
        } else {
            changed = true;
            this._height = value;
            this.style.height = this._height + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get height(): number {
        return this._height;
    }

    private _explicitHeight = NaN;

    public set explicitHeight(value: number) {
        if (this._explicitHeight === value) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            changed = true;
            this._explicitHeight = value;
        } else {
            if (value < 0) {
                if (this._explicitHeight !== 0) {
                    changed = true;
                    this._explicitHeight = 0;
                }
            } else {
                changed = true;
                this._explicitHeight = value;
                this._minHeight = value;
                this._height = value;
                this._maxHeight = value;
                this.style.height = this._height + 'px';
            }
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get explicitHeight(): number {
        return this._explicitHeight;
    }

    private _maxHeight = Infinity;

    public set maxHeight(value: number) {
        if (this._maxHeight === value || !isNaN(this.explicitHeight)) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            if (this._maxWidth !== Infinity) {
                changed = true;
                this._maxHeight = Infinity;
            }
        } else if (value < this.minHeight) {
            if (this._maxHeight !== this.minHeight) {
                changed = true;
                this._maxHeight = this.minHeight;
            }
        } else {
            changed = true;
            this._maxHeight = value;
        }
        if (this._height > this._maxHeight) {
            changed = true;
            this._height = this._maxHeight;
            this.style.height = this._height + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get maxHeight(): number {
        return this._maxHeight;
    }
}
customElements.define('size-element', SizeElement);
