import ISvgElement from './ISvgElement';

export default interface IPathElement extends ISvgElement {
    pathData: string;
    strokeColor: string;
    strokeWidth: number;
    strokeOpacity: number;
    fillColor: string;
    fillOpacity: number;
}
