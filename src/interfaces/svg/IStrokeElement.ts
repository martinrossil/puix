import ILayoutElement from '../core/ILayoutElement';

export default interface IStrokeElement extends ILayoutElement {
    borderRadius: number;
    strokeColor: string;
    strokeWidth: number;
    strokeOpacity: number;
    fillColor: string;
    fillOpacity: number;
}
