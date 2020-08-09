import LifeCycleElementInterface from './LifeCycleElementInterface';

export default interface PositionElementInterface extends LifeCycleElementInterface {
    setPosition(x: number, y: number): void;
    x: number;
    y: number;
}
