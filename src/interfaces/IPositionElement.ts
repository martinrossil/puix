import ILifeCycleElement from './ILifeCycleElement';

export default interface IPositionElement extends ILifeCycleElement {
    setPosition(x: number, y: number): void;
    setActualPosition(x: number, y: number): void;
    x: number;
    y: number;
    actualX: number;
    actualY: number;
}
