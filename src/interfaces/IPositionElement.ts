import ILifeCycleElement from './ILifeCycleElement';

export default interface IPositionElement extends ILifeCycleElement {
    move(x: number, y: number): void;
    x: number;
    y: number;
}
