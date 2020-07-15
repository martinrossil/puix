import IShapeElement from '../interfaces/svg/IShapeElement';
import CornerType from '../consts/CornerType';
import PathElement from './PathElement';
import ShapeUtil from './utils/ShapeUtil';

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
        if (this.cornerType === CornerType.NONE) {
            this.pathData = ShapeUtil.getNonePath(this.actualWidth, this.actualHeight);
        } else if (this.cornerType === CornerType.ROUNDED) {
            this.pathData = ShapeUtil.getRoundedPath(this.actualWidth, this.actualHeight, this.cornerSize);
        } else if (this.cornerType === CornerType.CUT) {
            this.pathData = ShapeUtil.getCutPath(this.actualWidth, this.actualHeight, this.cornerSize);
        }
    }

    private _cornerType = CornerType.NONE;

    public set cornerType(value: string) {
        if (this._cornerType !== value) {
            this._cornerType = value;
            this.invalidateDisplay();
        }
    }

    public get cornerType(): string {
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
