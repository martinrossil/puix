import IPoint from '../vo/IPoint';
import ShapeElementInterface from '../svg/ShapeElementInterface';

export default interface RippleElementInterface extends ShapeElementInterface {
    rippleColor: string;
    show(point: IPoint): void;
    hide(): void;
}
