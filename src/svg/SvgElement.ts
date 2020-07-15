import DisplayElement from '../core/DisplayElement';
import ISvgElement from '../interfaces/svg/ISvgElement';
import IFilter from '../interfaces/svg/filters/IFilter';

export default class SvgElement extends DisplayElement implements ISvgElement {
    public constructor() {
        super();
        this.name = 'SvgElement';
        this.svg.style.position = 'absolute';
        this.svg.style.overflow = 'visible';
        this.svg.appendChild(this.defs);
        this.svg.appendChild(this.group);
        this.appendChild(this.svg);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.updateSvgAttributes();
    }

    protected updateSvgAttributes(): void {
        this.svg.setAttribute('width', this.actualWidth.toString());
        this.svg.setAttribute('height', this.actualHeight.toString());
    }

    public svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    public defs: SVGDefsElement = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    public group: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    private _filter: IFilter | null = null;

    public set filter(value: IFilter | null) {
        if (this._filter !== value) {
            if (this._filter) {
                this._filter.detach(this);
            }
            this._filter = value;
            if (this._filter) {
                this._filter.attach(this);
            }
        }
    }

    public get filter(): IFilter |null {
        return this._filter;
    }
}
customElements.define('svg-element', SvgElement);
