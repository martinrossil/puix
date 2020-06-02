import SvgElement from './SvgElement';
import IPathElement from '../interfaces/svg/IPathElement';

export default class PathElement extends SvgElement implements IPathElement {
    public constructor() {
        super();
        this.name = 'PathElement';
        this.group.appendChild(this.path);
    }

    private _pathData = '';

    public set pathData(value: string) {
        if (this._pathData !== value) {
            this._pathData = value;
            this.path.setAttribute('d', value);
        }
    }

    public get pathData(): string {
        return this._pathData;
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

    protected path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
}
customElements.define('path-element', PathElement);
