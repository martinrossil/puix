import IShapeElement from './IShapeElement';
import PathElement from './PathElement';

export default class ShapeElement extends PathElement implements IShapeElement {
    public constructor() {
        super();
        this.name = 'ShapeElement';
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.updatePathData();
    }

    protected updatePathData(): void {
        const tlc = this.cornerRadius;
        const trc = tlc;
        const brc = tlc;
        const blc = tlc;
        const w = this.actualWidth;
        const h = this.actualHeight;

        let d = '';
        // mov top left arc start
        d += 'M 0 ' + tlc + ' ';
        // tlc arc
        d += 'A ' + tlc + ' ' + tlc + ' 0 0 1 ' + tlc + ' 0 ';
        // line to topRightCorner
        d += 'L ' + (w - trc) + ' 0 ';
        // trc arc
        d += 'A ' + trc + ' ' + trc + ' 1 0 1 ' + w + ' ' + trc + ' ';
        // line to bottomRightCorner
        d += 'L ' + w + ' ' + (h - brc) + ' ';
        // brc arc
        d += 'A ' + brc + ' ' + brc + ' 1 0 1 ' + (w - brc) + ' ' + h + ' ';
        // line to bottomLeftCorner
        d += 'L ' + blc + ' ' + h + ' ';
        // blc arc
        d += 'A ' + blc + ' ' + blc + ' 0 0 1 ' + '0 ' + (h - blc) + ' ';
        // close path
        d += 'Z';
        this.path.setAttribute('d', d);
    }

    private _cornerRadius = 0;

    public set cornerRadius(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._cornerRadius !== 0) {
                this._cornerRadius = 0;
                this.invalidateDisplay();
            }
        } else if (this._cornerRadius !== value) {
            this._cornerRadius = value;
            this.invalidateDisplay();
        }
    }

    public get cornerRadius(): number {
        return this._cornerRadius;
    }
}
customElements.define('shape-element', ShapeElement);
