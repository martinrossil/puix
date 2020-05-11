import IDisplayElement from './IDisplayElement';

export default interface ISvgElement extends IDisplayElement {
    viewBox: DOMRect;
    strokeColor: string;
    strokeWidth: number;
    strokeOpacity: number;
    fillColor: string;
    fillOpacity: number;
    pathData: string;
}
