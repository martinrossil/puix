import IDomElement from './IDomElement';

export default interface IPositionElement extends IDomElement {
    setPosition(x: number, y: number): void;
    x: number;
    y: number;
}
