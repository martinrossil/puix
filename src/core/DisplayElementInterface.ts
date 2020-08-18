import LayoutElementInterface from './LayoutElementInterface';
import { Overflow } from '../enums/Overflow';

export default interface DisplayElementInterface extends LayoutElementInterface {
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
