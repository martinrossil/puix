import IDisplayElement from '../core/IDisplayElement';
import IFilter from './filters/IFilter';

export default interface ISvgElement extends IDisplayElement {
    svg: SVGSVGElement;
    group: SVGElement;
    filter: IFilter | null;
}
