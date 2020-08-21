import DisplayElement from '../core/DisplayElement';
import ISvgElement from './ISvgElement';

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
}
customElements.define('svg-element', SvgElement);
