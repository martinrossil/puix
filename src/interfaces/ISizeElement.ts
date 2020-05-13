import IPositionElement from './IPositionElement';

export default interface ISizeElement extends IPositionElement {
    setSize(width: number, height: number): void;
    setActualSize(width: number, height: number): void;
    minWidth: number;
    width: number;
    maxWidth: number;
    minHeight: number;
    height: number;
    maxHeight: number;
    actualWidth: number;
    actualHeight: number;
    explicitWidth: number;
    explicitHeight: number;
}
