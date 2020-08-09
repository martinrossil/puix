import DisplayElementInterface from '../core/DisplayElementInterface';

export default interface SvgElementInterface extends DisplayElementInterface {
    svg: SVGSVGElement;
    defs: SVGDefsElement;
    group: SVGElement;
}
