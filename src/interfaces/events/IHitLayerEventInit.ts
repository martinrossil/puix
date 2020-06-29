import IPoint from '../vo/IPoint';

export default interface IHitLayerEventInit extends EventInit {
    point: IPoint;
}
