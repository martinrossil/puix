import PositionElement from './PositionElement';
import ISizeElement from '../interfaces/ISizeElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
        // console.log('SizeElement initialize()');
    }

    protected commitProperties(): void {
        super.commitProperties();
        // console.log('SizeElement commitProperties()', this);
        if (this._widthChanged && this._heightChanged) {
            this._widthChanged = false;
            this._heightChanged = false;
            this.style.width = this.width + 'px';
            this.style.height = this.height + 'px';
            return;
        }
        if (this._widthChanged) {
            this._widthChanged = false;
            this.style.width = this.width + 'px';
            return;
        }
        if (this._heightChanged) {
            this._heightChanged = false;
            this.style.height = this.height + 'px';
        }
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    private _width = 0;
    private _widthChanged = false;
    public set width(value: number) {
        if (this._width === value) {
            return;
        }
        this._width = value;
        this._widthChanged = true;
        this.invalidateProperties();
    }

    public get width(): number {
        return this._width;
    }

    private _height = 0;
    private _heightChanged = false;
    public set height(value: number) {
        if (this._height === value) {
            return;
        }
        this._height = value;
        this._heightChanged = true;
        this.invalidateProperties();
    }

    public get height(): number {
        return this._height;
    }
}
customElements.define('size-element', SizeElement);
