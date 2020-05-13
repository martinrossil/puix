import IPositionElement from './IPositionElement';

export default interface ISizeElement extends IPositionElement {
    setSize(width: number, height: number): void;
    setExplicitSize(width: number, height: number): void;
    minWidth: number;
    width: number;
    maxWidth: number;
    explicitWidth: number;
    minHeight: number;
    height: number;
    explicitHeight: number;
    maxHeight: number;
}
