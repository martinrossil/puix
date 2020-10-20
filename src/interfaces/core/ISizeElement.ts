import IPositionElement from './IPositionElement';

export default interface ISizeElement extends IPositionElement {
    setActualSize(width: number, height: number): void;
    setSize(width: number, height: number): void;
    minWidth: number;
    width: number;
    maxWidth: number;
    actualWidth: number;
    minHeight: number;
    height: number;
    maxHeight: number;
    actualHeight: number;
}
