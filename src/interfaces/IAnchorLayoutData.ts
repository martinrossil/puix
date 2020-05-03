import ILayoutData from './ILayoutData';

export default interface IAnchorLayoutData extends ILayoutData {
    horizontalCenter: number;
    verticalCenter: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}
