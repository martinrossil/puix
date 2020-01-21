import DomElement from './DomElement';
import IPositionElement from '../interfaces/IPositionElement';

export default class PositionElement extends DomElement implements IPositionElement {
    public constructor() {
        super();
        // console.log('PositionElement constructor()');
    }

    protected initialize(): void {
        super.initialize();
        // console.log('PositionElement initialize()');
    }

    protected commitProperties(): void {
        super.commitProperties();
        // console.log('PositionElement commitProperties()', this);
        if (this._xChanged && this._YChanged) {
            this._xChanged = false;
            this._YChanged = false;
            this.setTransform();
            this.dispatchEventWith('positionChanged', this);
            // console.log('position changed');
            return;
        }
        if (this._xChanged) {
            this._xChanged = false;
            this.setTransform();
            this.dispatchEventWith('xChanged', this);
            // console.log('x changed');
            return;
        }
        if (this._YChanged) {
            this._YChanged = false;
            this.setTransform();
            this.dispatchEventWith('yChanged', this);
            // console.log('y changed');
        }
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

    protected setTransform(): void {
        this.style.transform = this.transformMatrix;
        this.style.webkitTransform = this.transformMatrix;
    }

    protected get transformMatrix(): string {
        return 'matrix(1, 0, 0, 1, ' + this.x + ', ' + this.y + ')';
    }
}
customElements.define('position-element', PositionElement);
