import IDisplayElement from '../core/IDisplayElement';
import IFilter from './filters/IFilter';

export default interface ISvgElement extends IDisplayElement {
    svg: SVGSVGElement;
    group: SVGElement;
    prepend(...nodes: (string | Node)[]): void;
    removeChild<T extends Node>(oldChild: T): T;
    filter: IFilter | null;
}
