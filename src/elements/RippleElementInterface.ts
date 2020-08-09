import PointInterface from '../vo/PointInterface';
import ShapeElementInterface from '../svg/ShapeElementInterface';

export default interface RippleElementInterface extends ShapeElementInterface {
    rippleColor: string;
    show(point: PointInterface): void;
    hide(): void;
}
