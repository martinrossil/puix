import IPositionElement from './IPositionElement';

export default interface ISizeElement extends IPositionElement {
    setSize(width: number, height: number): void;
    width: number;
    height: number;
}
