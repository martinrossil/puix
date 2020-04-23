import LifeCycleElement from './LifeCycleElement';
import IPositionElement from '../interfaces/IPositionElement';

export default class PositionElement extends LifeCycleElement implements IPositionElement {
    public constructor() {
        super();
        this.name = 'PositionElement';
    }

    public commitProperties(): void {
        super.commitProperties();
        console.log(this.name, 'commitProperties()');
        if (this._xChanged || this._yChanged) {
            console.log(this.name, 'x or y changed');
            this._xChanged = false;
            this._yChanged = false;
            this.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
        }
    }

    public move(x: number, y: number): void {
        console.log(this.name, 'move()', x, y);
        this.x = x;
        this.y = y;
    }

    private _x = 0;
    private _xChanged = false;

    public set x(value: number) {
        console.log(this.name, 'set x()', value);
        if (isNaN(value)) {
            if (this._x !== 0) {
                this._x = 0;
                this._xChanged = true;
                this.invalidateProperties();
            }
        } else if (this._x !== value) {
            this._x = value;
            this._xChanged = true;
            this.invalidateProperties();
        }
    }

    public get x(): number {
        return this._x;
    }

    private _y = 0;
    private _yChanged = false;

    public set y(value: number) {
        console.log(this.name, 'set y()', value);
        if (isNaN(value)) {
            if (this._y !== 0) {
                this._y = 0;
                this._yChanged = true;
                this.invalidateProperties();
            }
        } else if (this._y !== value) {
            this._y = value;
            this._yChanged = true;
            this.invalidateProperties();
        }
    }

    public get y(): number {
        return this._y;
    }
}
customElements.define('position-element', PositionElement);
