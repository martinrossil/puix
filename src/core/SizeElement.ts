import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/core/ISizeElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    static INTERNAL_SIZE_CHANGED = 'SizeElement.internalSizeChanged';

    public constructor() {
        super();
        this.name = 'SizeElement';
        this.invalidateDisplay = this.invalidateDisplay.bind(this);
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

    private _percentWidth = NaN;

    public set percentWidth(value: number) {
        if (this._percentWidth !== value) {
            if (!isNaN(value)) {
                if (value < 0) {
                    if (this._percentWidth !== 0) {
                        this._percentWidth = 0;
                        this.invalidateDisplay();
                    }
                } else {
                    this._percentWidth = value;
                    this.invalidateDisplay();
                }
            } else {
                this._percentWidth = value;
                this.invalidateDisplay();
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
                        this.invalidateDisplay();
                    }
                } else {
                    this._percentHeight = value;
                    this.invalidateDisplay();
                }
            } else {
                this._percentHeight = value;
                this.invalidateDisplay();
            }
        }
    }

    public get percentHeight(): number {
        return this._percentHeight;
    }

    public setSize(width: number, height: number): void {
        if (this._width === width && this._height === height) {
            return;
        }
        let widthChanged = false;
        if (isNaN(width)) {
            widthChanged = true;
            this._width = width;
        } else {
            if (width < 0) {
                if (this._width !== 0) {
                    widthChanged = true;
                    this._width = 0;
                }
            } else {
                widthChanged = true;
                this._width = width;
                this._minWidth = width;
                this._actualWidth = width;
                this._maxWidth = width;
                this.style.width = this._actualWidth + 'px';
            }
        }
        let heightChanged = false;
        if (isNaN(height)) {
            heightChanged = true;
            this._height = height;
        } else {
            if (height < 0) {
                if (this._height !== 0) {
                    heightChanged = true;
                    this._height = 0;
                }
            } else {
                heightChanged = true;
                this._height = height;
                this._minHeight = height;
                this._actualHeight = height;
                this._maxHeight = height;
                this.style.height = this._actualHeight + 'px';
            }
        }
        if (widthChanged || heightChanged) {
            this.invalidateDisplay();
        }
    }

    public setActualSize(width: number, height: number): void {
        if (!isNaN(this.width) && !isNaN(this.height)) {
            return;
        }
        let widthChanged = false;
        if (isNaN(width) || width < 0) {
            if (this._actualWidth !== this.minWidth) {
                widthChanged = true;
                this._actualWidth = this.minWidth;
                this.style.width = this._actualWidth + 'px';
            }
        } else if (width < this.minWidth) {
            if (this._actualWidth !== this.minWidth) {
                widthChanged = true;
                this._actualWidth = this.minWidth;
                this.style.width = this._actualWidth + 'px';
            }
        } else if (this.maxWidth < width) {
            if (this._actualWidth !== this.maxWidth) {
                widthChanged = true;
                this._actualWidth = this.maxWidth;
                this.style.width = this._actualWidth + 'px';
            }
        } else if (this._actualWidth !== width) {
            widthChanged = true;
            this._actualWidth = width;
            this.style.width = this._actualWidth + 'px';
        }
        let heightChanged = false;
        if (isNaN(height) || height < 0) {
            if (this._actualHeight !== this.minHeight) {
                heightChanged = true;
                this._actualHeight = this.minHeight;
                this.style.height = this._actualHeight + 'px';
            }
        } else if (height < this.minHeight) {
            if (this._actualHeight !== this.minHeight) {
                heightChanged = true;
                this._actualHeight = this.minHeight;
                this.style.height = this._actualHeight + 'px';
            }
        } else if (this.maxHeight < height) {
            if (this._actualHeight !== this.maxHeight) {
                heightChanged = true;
                this._actualHeight = this.maxHeight;
                this.style.height = this._actualHeight + 'px';
            }
        } else if (this._actualHeight !== height) {
            heightChanged = true;
            this._actualHeight = height;
            this.style.height = this._actualHeight + 'px';
        }

        if (widthChanged || heightChanged) {
            this.invalidateDisplay();
        }
    }

    private _minWidth = 0;

    public set minWidth(value: number) {
        if (this._minWidth === value || !isNaN(this.width)) {
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
        if (this._actualWidth < this._minWidth) {
            changed = true;
            this._actualWidth = this._minWidth;
            this.style.width = this._actualWidth + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get minWidth(): number {
        return this._minWidth;
    }

    private _actualWidth = 0;

    public set actualWidth(value: number) {
        if (this._actualWidth === value || !isNaN(this.width)) {
            return;
        }
        let changed = false;
        if (isNaN(value) || value < 0) {
            if (this._actualWidth !== this.minWidth) {
                changed = true;
                this._actualWidth = this.minWidth;
                this.style.width = this._actualWidth + 'px';
            }
        } else if (value < this.minWidth) {
            if (this._actualWidth !== this.minWidth) {
                changed = true;
                this._actualWidth = this.minWidth;
                this.style.width = this._actualWidth + 'px';
            }
        } else if (this.maxWidth < value) {
            if (this._actualWidth !== this.maxWidth) {
                changed = true;
                this._actualWidth = this.maxWidth;
                this.style.width = this._actualWidth + 'px';
            }
        } else if (this._actualWidth !== value) {
            changed = true;
            this._actualWidth = value;
            this.style.width = this._actualWidth + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get actualWidth(): number {
        return this._actualWidth;
    }

    private _width = NaN;

    public set width(value: number) {
        if (this._width === value) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            changed = true;
            this._width = value;
        } else {
            if (value < 0) {
                if (this._width !== 0) {
                    changed = true;
                    this._width = 0;
                }
            } else {
                changed = true;
                this._width = value;
                this._minWidth = value;
                this._actualWidth = value;
                this._maxWidth = value;
                this.style.width = this._actualWidth + 'px';
            }
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get width(): number {
        return this._width;
    }

    private _maxWidth = Infinity;

    public set maxWidth(value: number) {
        if (this._maxWidth === value || !isNaN(this.width)) {
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
        if (this._actualWidth > this._maxWidth) {
            changed = true;
            this._actualWidth = this._maxWidth;
            this.style.width = this._actualWidth + 'px';
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
        if (this._minHeight === value || !isNaN(this.height)) {
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
        if (this._actualHeight < this._minHeight) {
            changed = true;
            this._actualHeight = this._minHeight;
            this.style.height = this._actualHeight + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get minHeight(): number {
        return this._minHeight;
    }

    private _actualHeight = 0;

    public set actualHeight(value: number) {
        if (this._actualHeight === value || !isNaN(this.height)) {
            return;
        }
        let changed = false;
        if (isNaN(value) || value < 0) {
            if (this._actualHeight !== this.minHeight) {
                changed = true;
                this._actualHeight = this.minHeight;
                this.style.height = this._actualHeight + 'px';
            }
        } else if (value < this.minHeight) {
            if (this._actualHeight !== this.minHeight) {
                changed = true;
                this._actualHeight = this.minHeight;
                this.style.height = this._actualHeight + 'px';
            }
        } else if (this.maxHeight < value) {
            if (this._actualHeight !== this.maxHeight) {
                changed = true;
                this._actualHeight = this.maxHeight;
                this.style.height = this._actualHeight + 'px';
            }
        } else if (this._actualHeight !== value) {
            changed = true;
            this._actualHeight = value;
            this.style.height = this._actualHeight + 'px';
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get actualHeight(): number {
        return this._actualHeight;
    }

    private _height = NaN;

    public set height(value: number) {
        if (this._height === value) {
            return;
        }
        let changed = false;
        if (isNaN(value)) {
            changed = true;
            this._height = value;
        } else {
            if (value < 0) {
                if (this._height !== 0) {
                    changed = true;
                    this._height = 0;
                }
            } else {
                changed = true;
                this._height = value;
                this._minHeight = value;
                this._actualHeight = value;
                this._maxHeight = value;
                this.style.height = this._actualHeight + 'px';
            }
        }
        if (changed) {
            this.invalidateDisplay();
        }
    }

    public get height(): number {
        return this._height;
    }

    private _maxHeight = Infinity;

    public set maxHeight(value: number) {
        if (this._maxHeight === value || !isNaN(this.height)) {
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
        if (this._actualHeight > this._maxHeight) {
            changed = true;
            this._actualHeight = this._maxHeight;
            this.style.height = this._actualHeight + 'px';
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
