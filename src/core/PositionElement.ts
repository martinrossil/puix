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

    private _x = 0;

    public set x(value: number) {
        if (isNaN(value)) {
            if (this._x !== 0) {
                this._x = 0;
                this.updateTransform();
            }
        }
        if (this._x !== value) {
            this._x = value;
            this.updateTransform();
        }
    }

    public get x(): number {
        return this._x;
    }

    private _y = 0;

    public set y(value: number) {
        if (isNaN(value)) {
            if (this._y !== 0) {
                this._y = 0;
                this.updateTransform();
            }
        }
        if (this._y !== value) {
            this._y = value;
            this.updateTransform();
        }
    }

    public get y(): number {
        return this._y;
    }

    protected updateTransform(): void {
        this.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
    }
}
customElements.define('position-element', PositionElement);
