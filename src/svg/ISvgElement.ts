import IDisplayElement from '../core/IDisplayElement';

export default interface ISvgElement extends IDisplayElement {
    svg: SVGSVGElement;
    defs: SVGDefsElement;
    group: SVGElement;
}
