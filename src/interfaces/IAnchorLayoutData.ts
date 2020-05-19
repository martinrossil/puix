import ILayoutData from './ILayoutData';

export default interface IAnchorLayoutData extends ILayoutData {
    left: number;
    top: number;
    right: number;
    bottom: number;
    horizontalCenter: number;
    verticalCenter: number;
}
