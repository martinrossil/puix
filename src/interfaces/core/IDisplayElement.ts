import { Overflow } from '../../enums/Overflow';
import ILayoutElement from './ILayoutElement';

export default interface IDisplayElement extends ILayoutElement {
    opacity: number;
    overflow: Overflow;
    overflowX: Overflow;
    overflowY: Overflow;
    enabled: boolean;
    cornerRadius: number;
    tabIndex: number;
    cursor: string;
    backgroundColor: string;
}
