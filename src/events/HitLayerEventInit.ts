import IHitLayerEventInit from '../interfaces/events/IHitLayerEventInit';
import IPoint from '../interfaces/vo/IPoint';

export default class HitLayerEventInit implements IHitLayerEventInit {
    public point: IPoint;
    public bubbles?: boolean;
    public cancelable?: boolean;
    public composed?: boolean;
    constructor(point: IPoint, bubbles?: boolean, cancelable?: boolean, composed?: boolean) {
        this.point = point;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
        this.composed = composed;
    }
}
