import DomElement from './DomElement';
import IPositionElement from '../interfaces/IPositionElement';

export default class PositionElement extends DomElement implements IPositionElement {
    public constructor() {
        super();
        console.log('PositionElement constructor()');
        this.setPosition(100, 100);
    }

    protected commitProperties(): void {
        super.commitProperties();
        console.log('PositionElement commitProperties()', this);
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    private _x = 0;

    private _xChanged = false;

    public set x(value: number) {
        if (this._x === value) {
            return;
        }
        this._x = value;
        this._xChanged = true;
        this.invalidateProperties();
    }

    public get x(): number {
        return this._x;
    }

    private _y = 0;

    private _YChanged = false;

    public set y(value: number) {
        if (this._y === value) {
            return;
        }
        this._y = value;
        this._YChanged = true;
        this.invalidateProperties();
    }

    public get y(): number {
        return this._y;
    }
}
customElements.define('position-element', PositionElement);
