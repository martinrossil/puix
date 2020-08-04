import LayoutElement from '../core/LayoutElement';
import IStrokeElement from '../interfaces/svg/IStrokeElement';

export default class StrokeElement extends LayoutElement implements IStrokeElement {
    public constructor() {
        super();
        this.name = 'StrokeElement';
        this.svg.style.position = 'absolute';
        this.svg.style.overflow = 'visible';
        this.group.appendChild(this.path);
        this.svg.appendChild(this.group);
        this.appendChild(this.svg);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.updateSvgAttributes();
        this.updatePathData();
    }

    protected updateSvgAttributes(): void {
        this.svg.setAttribute('width', this.actualWidth.toString());
        this.svg.setAttribute('height', this.actualHeight.toString());
    }

    protected updatePathData(): void {
        const tlc = this.borderRadius;
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

    private _strokeColor = '';

    public set strokeColor(value: string) {
        if (this._strokeColor !== value) {
            this._strokeColor = value;
            this.path.setAttribute('stroke', value);
        }
    }

    public get strokeColor(): string {
        return this._strokeColor;
    }

    private _strokeWidth = 0;

    public set strokeWidth(value: number) {
        if (this._strokeWidth !== value) {
            this._strokeWidth = value;
            this.path.setAttribute('stroke-width', value.toString());
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
        this.path.setAttribute('stroke-opacity', this._strokeOpacity.toString());
    }

    public get strokeOpacity(): number {
        return this._strokeOpacity;
    }

    private _fillColor = '';

    public set fillColor(value: string) {
        if (this._fillColor !== value) {
            this._fillColor = value;
            this.path.setAttribute('fill', value);
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
        this.path.setAttribute('fill-opacity', this._fillOpacity.toString());
    }

    public get fillOpacity(): number {
        return this._fillOpacity;
    }

    private _borderRadius = 0;

    public set borderRadius(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._borderRadius !== 0) {
                this._borderRadius = 0;
                this.invalidateDisplay();
            }
        } else if (this._borderRadius !== value) {
            this._borderRadius = value;
            this.invalidateDisplay();
        }
    }

    public get borderRadius(): number {
        return this._borderRadius;
    }

    private svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    private group: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    private path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
}
customElements.define('stroke-element', StrokeElement);
