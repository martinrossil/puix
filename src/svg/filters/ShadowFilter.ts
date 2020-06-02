import IShadowFilter from '../../interfaces/svg/filters/IShadowFilter';
import ISvgElement from '../../interfaces/svg/ISvgElement';
import HSL from '../../design/color/HSL';

export default class ShadowFilter implements IShadowFilter {
    public constructor(dx = 0, dy = 2, distance = 2, color = 'hsl(0, 0%, 0%)', opacity = 0.3) {
        this.dx = dx;
        this.dy = dy;
        this.distance = distance;
        this.color = color;
        this.opacity = opacity;
        this.initializeFilter();
        this.initializeBlur();
        this.initializeOffset();
        this.initializeFlood();
        this.initializeComposite();
        this.appendChildren();
    }

    protected initializeFilter(): void {
        this.filter.setAttribute('id', this.filterId);
        this.filter.setAttribute('x', '-50%');
        this.filter.setAttribute('y', '-50%');
        this.filter.setAttribute('width', '200%');
        this.filter.setAttribute('height', '200%');
    }

    protected initializeBlur(): void {
        this.feGaussianBlur.setAttribute('in', 'SourceAlpha');
        this.feGaussianBlur.setAttribute('stdDeviation', this.distance.toString());
        this.feGaussianBlur.setAttribute('result', 'blur');
    }

    protected initializeOffset(): void {
        this.feOffset.setAttribute('in', 'blur');
        this.feOffset.setAttribute('dx', this.dx.toString());
        this.feOffset.setAttribute('dy', this.dy.toString());
        this.feOffset.setAttribute('result', 'offsetBlur');
    }

    protected initializeFlood(): void {
        this.feFlood.setAttribute('in', 'offsetBlur');
        this.feFlood.setAttribute('flood-color', this.color);
        this.feFlood.setAttribute('flood-opacity', this.opacity.toString());
        this.feFlood.setAttribute('result', 'offsetColor');
    }

    protected initializeComposite(): void {
        this.feComposite.setAttribute('in', 'offsetColor');
        this.feComposite.setAttribute('in2', 'offsetBlur');
        this.feComposite.setAttribute('operator', 'in');
        this.feComposite.setAttribute('result', 'offsetBlur');
        this.feMergeNode1.setAttribute('in', 'offsetBlur');
        this.feMergeNode2.setAttribute('in', 'SourceGraphic');
    }

    protected appendChildren(): void {
        this.filter.appendChild(this.feGaussianBlur);
        this.filter.appendChild(this.feOffset);
        this.filter.appendChild(this.feFlood);
        this.filter.appendChild(this.feComposite);
        this.filter.appendChild(this.feMerge);
        this.feMerge.appendChild(this.feMergeNode1);
        this.feMerge.appendChild(this.feMergeNode2);
    }

    public attach(svg: ISvgElement): void {
        svg.group.appendChild(this.filter);
        svg.group.setAttribute('filter', 'url(#' + this.filterId + ')');
    }

    public detach(svg: ISvgElement): void {
        svg.group.removeChild(this.filter);
        svg.group.setAttribute('filter', '');
    }

    protected filterId = Math.random().toString();

    protected filter: SVGFilterElement = document.createElementNS('http://www.w3.org/2000/svg', 'filter');

    protected feGaussianBlur: SVGFEGaussianBlurElement = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');

    protected feOffset: SVGFEOffsetElement = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');

    protected feFlood: SVGFEFloodElement = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');

    protected feComposite: SVGFECompositeElement = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');

    protected feMerge: SVGFEMergeElement = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');

    protected feMergeNode1: SVGFEMergeNodeElement = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');

    protected feMergeNode2: SVGFEMergeNodeElement = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');

    private _dx = 0;

    public set dx(value: number) {
        if (this._dx !== value) {
            this._dx = value;
            this.feOffset.setAttribute('dx', value.toString());
        }
    }

    public get dx(): number {
        return this._dx;
    }

    private _dy = 2;

    public set dy(value: number) {
        if (this._dy !== value) {
            this._dy = value;
            this.feOffset.setAttribute('dy', value.toString());
        }
    }

    public get dy(): number {
        return this._dy;
    }

    private _distance = 2;

    public set distance(value: number) {
        if (this._distance !== value) {
            this._distance = value;
            this.feGaussianBlur.setAttribute('stdDeviation', value.toString());
        }
    }

    public get distance(): number {
        return this._distance;
    }

    private _color = HSL.BLACK;

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.feFlood.setAttribute('flood-color', value);
        }
    }

    public get color(): string {
        return this._color;
    }

    private _opacity = 0.3;

    public set opacity(value: number) {
        if (this._opacity !== value) {
            this._opacity = value;
            this.feFlood.setAttribute('flood-opacity', value.toString());
        }
    }

    public get opacity(): number {
        return this._opacity;
    }
}
