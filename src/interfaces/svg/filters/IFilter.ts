import ISvgElement from '../ISvgElement';

export default interface IFilter {
    attach(svg: ISvgElement): void;
    detach(svg: ISvgElement): void;
}
