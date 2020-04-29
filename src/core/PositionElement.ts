import LifeCycleElement from './LifeCycleElement';
import IPositionElement from '../interfaces/IPositionElement';

export default class PositionElement extends LifeCycleElement implements IPositionElement {
    public constructor() {
        super();
        this.name = 'PositionElement';
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public setActualPosition(x: number, y: number): void {
        this.actualX = x;
        this.actualY = y;
    }

    private _x = NaN;

    public set x(value: number) {
        if (isNaN(this._x) && isNaN(value)) {
            return;
        }
        if (this._x !== value) {
            this._x = value;
            this.actualX = value;
        }
    }

    public get x(): number {
        return this._x;
    }

    private _y = NaN;

    public set y(value: number) {
        if (isNaN(this._y) && isNaN(value)) {
            return;
        }
        if (this._y !== value) {
            this._y = value;
            this.actualY = value;
        }
    }

    public get y(): number {
        return this._y;
    }

    private _actualX = 0;

    public set actualX(value: number) {
        if (isNaN(value)) {
            if (this._actualX !== 0) {
                this._actualX = 0;
                this.updateTransform();
            }
        } else {
            if (this._actualX !== value) {
                this._actualX = value;
                this.updateTransform();
            }
        }
    }

    public get actualX(): number {
        return this._actualX;
    }

    private _actualY = 0;

    public set actualY(value) {
        if (isNaN(value)) {
            if (this._actualY !== 0) {
                this._actualY = 0;
                this.updateTransform();
            }
        }
    }

    public get actualY(): number {
        return this._actualY;
    }

    protected updateTransform(): void {
        this.style.transform = 'translate(' + this.actualX + 'px, ' + this.actualY + 'px)';
    }
}
customElements.define('position-element', PositionElement);
