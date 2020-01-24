import DomElement from './DomElement';
import IPositionElement from '../interfaces/IPositionElement';

export default class PositionElement extends DomElement implements IPositionElement {
    public constructor() {
        super();
    }

    protected commitProperties(): void {
        super.commitProperties();
        if (this._actualXChanged || this._actualYChanged) {
            this._actualXChanged = false;
            this._actualYChanged = false;
            this.setTransform();
        }
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    private _x = 0;
    public set x(value: number) {
        if (this._x === value) {
            return;
        }
        this._x = value;
        if (this._actualX === value) {
            return;
        }
        this._actualX = value;
        this._actualXChanged = true;
        this.invalidateProperties();
    }

    public get x(): number {
        return this._x;
    }

    private _y = 0;
    public set y(value: number) {
        if (this._y === value) {
            return;
        }
        this._y = value;
        if (this._actualY === value) {
            return;
        }
        this._actualY = value;
        this._actualYChanged = true;
        this.invalidateProperties();
    }

    public get y(): number {
        return this._y;
    }

    public setActualPosition(x: number, y: number): void {
        this.actualX = x;
        this.actualY = y;
    }

    private _actualX = 0;
    private _actualXChanged = false;
    public set actualX(value: number) {
        if (this._actualX === value) {
            return;
        }
        this._actualX = value;
        this._actualXChanged = true;
        this.invalidateProperties();
    }

    public get actualX(): number {
        return this._actualX;
    }

    private _actualY = 0;
    private _actualYChanged = false;
    public set actualY(value: number) {
        if (this._actualY === value) {
            return;
        }
        this._actualY = value;
        this._actualYChanged = true;
        this.invalidateProperties();
    }

    public get actualY(): number {
        return this._actualY;
    }

    protected setTransform(): void {
        this.style.transform = this.transformMatrix;
        this.style.webkitTransform = this.transformMatrix;
    }

    protected get transformMatrix(): string {
        return 'matrix(1, 0, 0, 1, ' + this.actualX + ', ' + this.actualY + ')';
    }
}
customElements.define('position-element', PositionElement);
