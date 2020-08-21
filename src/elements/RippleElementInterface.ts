import IPoint from '../vo/IPoint';
import IShapeElement from '../svg/IShapeElement';

export default interface RippleElementInterface extends IShapeElement {
    rippleColor: string;
    show(point: IPoint): void;
    hide(): void;
}
