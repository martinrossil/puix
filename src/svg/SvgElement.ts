import DisplayElement from '../core/DisplayElement';
import ISvgElement from '../interfaces/ISvgElement';
import Styles from '../enums/Styles';
import Values from '../enums/Values';

export default class SvgElement extends DisplayElement implements ISvgElement {
    public constructor() {
        super();
        this.name = 'SvgElement';
        this.setSize(24, 24);
        this.svg.appendChild(this.path);
        this.appendChild(this.svg);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        console.log(this.name, 'updateDisplay');
        this.updateSvgAttributes();
    }

    protected updateSvgAttributes(): void {
        this.svg.setAttribute(Styles.WIDTH, this.actualWidth.toString());
        this.svg.setAttribute(Styles.HEIGHT, this.actualHeight.toString());
        this.svg.setAttribute(Styles.VIEW_BOX, this.viewBox.left + ' ' + this.viewBox.top + ' ' + this.viewBox.width + ' ' + this.viewBox.height);
        this.path.setAttribute(Styles.FILL, this.fillColor);
        this.path.setAttribute(Styles.FILL_OPACITY, this.fillOpacity.toString());
        this.path.setAttribute(Styles.STROKE_WIDTH, this.strokeWidth.toString());
        this.path.setAttribute(Styles.STROKE, this.strokeColor);
        this.path.setAttribute(Styles.STROKE_OPACITY, this.strokeOpacity.toString());
        this.path.setAttribute(Styles.D, this.pathData);
    }

    private _svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    protected get svg(): SVGSVGElement {
        return this._svg;
    }

    private _path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    protected get path(): SVGPathElement {
        return this._path;
    }

    private _pathData: string = Values.EMPTY;

    public set pathData(value: string) {
        if (this._pathData !== value) {
            this._pathData = value;
            this.invalidateDisplay();
        }
    }

    public get pathData(): string {
        return this._pathData;
    }

    private _viewBox: DOMRect = new DOMRect(0, 0, 24, 24);

    public set viewBox(value: DOMRect) {
        if (this._viewBox !== value) {
            this._viewBox = value;
            this.invalidateDisplay();
        }
    }

    public get viewBox(): DOMRect {
        return this._viewBox;
    }

    private _strokeColor: string = Values.EMPTY;

    public set strokeColor(value: string) {
        if (this._strokeColor !== value) {
            this._strokeColor = value;
            this.invalidateDisplay();
        }
    }

    public get strokeColor(): string {
        return this._strokeColor;
    }

    private _strokeWidth = 0;

    public set strokeWidth(value: number) {
        if (this._strokeWidth !== value) {
            this._strokeWidth = value;
            this.invalidateDisplay();
        }
    }

    public get strokeWidth(): number {
        return this._strokeWidth;
    }

    private _strokeOpacity = 1;

    public set strokeOpacity(value: number) {
        if (value < 0) {
            this._strokeOpacity = 0;
        } else if (value > 1) {
            this._strokeOpacity = 1;
        } else if (this._strokeOpacity !== value) {
            this._strokeOpacity = value;
        }
        this.invalidateDisplay();
    }

    public get strokeOpacity(): number {
        return this._strokeOpacity;
    }

    private _fillColor: string = Values.EMPTY;

    public set fillColor(value: string) {
        if (this._fillColor !== value) {
            this._fillColor = value;
            this.invalidateDisplay();
        }
    }

    public get fillColor(): string {
        return this._fillColor;
    }

    private _fillOpacity = 1;

    public set fillOpacity(value: number) {
        if (value < 0) {
            this._fillOpacity = 0;
        } else if (value > 1) {
            this._fillOpacity = 1;
        } else if (this._fillOpacity !== value) {
            this._fillOpacity = value;
        }
        this.invalidateDisplay();
    }

    public get fillOpacity(): number {
        return this._fillOpacity;
    }
}
customElements.define('svg-element', SvgElement);
