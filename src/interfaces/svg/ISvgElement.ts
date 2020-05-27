import IDisplayElement from '../core/IDisplayElement';

export default interface ISvgElement extends IDisplayElement {
    viewBox: string;
    strokeColor: string;
    strokeWidth: number;
    strokeOpacity: number;
    fillColor: string;
    fillOpacity: number;
    pathData: string;
}
