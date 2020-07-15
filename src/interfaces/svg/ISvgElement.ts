import IDisplayElement from '../core/IDisplayElement';
import IFilter from './filters/IFilter';

export default interface ISvgElement extends IDisplayElement {
    svg: SVGSVGElement;
    defs: SVGDefsElement;
    group: SVGElement;
    filter: IFilter | null;
}
