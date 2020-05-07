import ISizeElement from './ISizeElement';
import ILayoutData from './ILayoutData';
import Overflow from '../enums/Overflow';

export default interface IDisplayElement extends ISizeElement {
    backgroundColor: string;
    opacity: number;
    layoutData: ILayoutData | null;
    overflow: Overflow;
    overflowHorizontal: Overflow;
    overflowVertical: Overflow;
    interactive: boolean;
}
