import Overflow from '../enums/Overflow';
import ILayoutElement from './ILayoutElement';

export default interface IDisplayElement extends ILayoutElement {
    backgroundColor: string;
    opacity: number;
    overflow: Overflow;
    overflowHorizontal: Overflow;
    overflowVertical: Overflow;
    interactive: boolean;
    cornerRadius: number;
    z: number;
}
