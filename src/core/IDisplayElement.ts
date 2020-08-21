import ILayoutElement from './ILayoutElement';
import { Overflow } from '../enums/Overflow';

export default interface IDisplayElement extends ILayoutElement {
    opacity: number;
    overflow: Overflow;
    overflowX: Overflow;
    overflowY: Overflow;
    enabled: boolean;
    borderRadius: number;
    shadow: string;
    tabIndex: number;
    cursor: string;
    backgroundColor: string;
    visible: boolean;
}
