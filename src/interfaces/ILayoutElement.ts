import ISizeElement from './ISizeElement';
import ILayoutData from './ILayoutData';

export default interface ILayoutElement extends ISizeElement {
    /* top: number;
    right: number;
    bottom: number;
    left: number;
    percentWidth: number;
    percentHeight: number;
    horizontalCenter: number;
    verticalCenter: number; */
    layoutData: ILayoutData | null;
}
