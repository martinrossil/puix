import { ISizeElement } from '../index';
import ILayoutData from './ILayoutData';

export default interface IDisplayElement extends ISizeElement {
    backgroundColor: string;
    opacity: number;
    layoutData: ILayoutData | null;
}
