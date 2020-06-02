import IShapeElement from '../interfaces/svg/IShapeElement';
import CornerType from '../consts/CornerType';
import PathElement from './PathElement';

export default class ShapeElement extends PathElement implements IShapeElement {
    public constructor() {
        super();
        this.name = 'ShapeElement';
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        console.log(this.name, 'updateDisplay()', this.actualWidth, this.actualHeight);
        this.updatePathData();
    }

    protected updatePathData(): void {
        if (this.cornerType === CornerType.NONE) {
            this.pathData = this.nonePathData;
        } else if (this.cornerType === CornerType.ROUNDED) {
            this.pathData = this.roundedPathData;
        } else if (this.cornerType === CornerType.CUT) {
            this.pathData = this.cutPathData;
        }
    }

    protected get nonePathData(): string {
        return 'M 0,0 L ' + this.actualWidth + ',0 L ' + this.actualWidth + ',' + this.actualHeight + ' L 0,' + this.actualHeight + ' Z';
    }

    protected get cutPathData(): string {
        const tlc = this.cornerSize;
        const trc = tlc;
        const brc = tlc;
        const blc = tlc;

        let d = '';
        // move to topLeftCorner
        d += 'M ' + tlc + ',0 ';
        // line to topRightCorner
        d += 'L ' + (this.actualWidth - trc) + ',0 ';
        // cut topRightCorner
        d += 'L ' + this.actualWidth + ',' + trc + ' ';
        // line down to bottomRight
        d += 'L ' + this.actualWidth + ',' + (this.actualHeight - brc) + ' ';
        // cut bottomRight
        d += 'L ' + (this.actualWidth - brc) + ',' + this.actualHeight + ' ';
        // line left to bottomLeft
        d += 'L ' + blc + ',' + this.actualHeight + ' ';
        // cut bottomLeft
        d += 'L 0,' + (this.actualHeight - blc) + ' ';
        // line up to topLeft
        d += 'L 0,' + tlc + ' ';
        // top left cut
        d += 'L ' + tlc + ',0';
        // close path
        d += 'Z';
        return d;
    }

    protected get roundedPathData(): string {
        const tlc = this.cornerSize;
        const trc = tlc;
        const brc = tlc;
        const blc = tlc;

        let d = '';
        // mov top left arc start
        d += 'M 0 ' + tlc + ' ';
        // tlc arc
        d += 'A ' + tlc + ' ' + tlc + ' 0 0 1 ' + tlc + ' 0 ';
        // line to topRightCorner
        d += 'L ' + (this.actualWidth - trc) + ' 0 ';
        // trc arc
        d += 'A ' + trc + ' ' + trc + ' 1 0 1 ' + this.actualWidth + ' ' + trc + ' ';
        // line to bottomRightCorner
        d += 'L ' + this.actualWidth + ' ' + (this.actualHeight - brc) + ' ';
        // brc arc
        d += 'A ' + brc + ' ' + brc + ' 1 0 1 ' + (this.actualWidth - brc) + ' ' + this.actualHeight + ' ';
        // line to bottomLeftCorner
        d += 'L ' + blc + ' ' + this.actualHeight + ' ';
        // blc arc
        d += 'A ' + blc + ' ' + blc + ' 0 0 1 ' + '0 ' + (this.actualHeight - blc) + ' ';
        // close path
        d += 'Z';
        return d;
    }

    private _cornerType = CornerType.NONE;

    public set cornerType(value: number) {
        if (this._cornerType !== value) {
            this._cornerType = value;
            this.invalidateDisplay();
        }
    }

    public get cornerType(): number {
        return this._cornerType;
    }

    private _cornerSize = 0;

    public set cornerSize(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._cornerSize !== 0) {
                this._cornerSize = 0;
                this.invalidateDisplay();
            }
        } else if (this._cornerSize !== value) {
            this._cornerSize = value;
            this.invalidateDisplay();
        }
    }

    public get cornerSize(): number {
        return this._cornerSize;
    }
}
customElements.define('shape-element', ShapeElement);
