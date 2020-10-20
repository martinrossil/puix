import ILayoutElement from '../core/ILayoutElement';

export default interface ISvgElement extends ILayoutElement {
    svg: SVGSVGElement;
    defs: SVGDefsElement;
    group: SVGElement;
}
