import { Overflow } from '../../enums/Overflow';
import ILayoutElement from './ILayoutElement';
import IArrayList from '../data/IArrayList';
import IDropShadowFilter from '../filters/IDropShadowFilter';

export default interface IDisplayElement extends ILayoutElement {
    opacity: number;
    overflow: Overflow;
    overflowX: Overflow;
    overflowY: Overflow;
    enabled: boolean;
    cornerRadius: number;
    shadow: string;
    tabIndex: number;
    cursor: string;
    backgroundColor: string;
    readonly filters: IArrayList<IDropShadowFilter>;
}
