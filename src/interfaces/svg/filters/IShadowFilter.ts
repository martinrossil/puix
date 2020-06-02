import IFilter from './IFilter';

export default interface IShadowFilter extends IFilter {
    dx: number;
    dy: number;
    distance: number;
    color: string;
    opacity: number;
}
