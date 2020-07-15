import IDisplayElement from '../core/IDisplayElement';
import IPoint from '../vo/IPoint';

export default interface IRippleElement extends IDisplayElement {
    cornerSize: number;
    cornerType: string;
    rippleColor: string;
    show(point: IPoint): void;
    hide(): void;
}
