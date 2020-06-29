import IPoint from '../interfaces/vo/IPoint';
import IHitLayerEventInit from '../interfaces/events/IHitLayerEventInit';
import IHitLayerEvent from '../interfaces/events/IHitLayerEvent';
import HitLayerEventInit from './HitLayerEventInit';

export default class HitLayerEvent extends Event implements IHitLayerEvent {
    static POINTER_OVER = 'pointerOver';
    static POINTER_DOWN = 'pointerDown';
    static POINTER_TRIGGERED = 'pointerTRiggered';
    static POINTER_LEAVE = 'pointerLeave';

    public point: IPoint;

    constructor(type: string, point: IPoint) {
        const hitLayerEventInitDict: IHitLayerEventInit = new HitLayerEventInit(point, true);
        super(type, hitLayerEventInitDict);
        this.point = point;
    }
}
