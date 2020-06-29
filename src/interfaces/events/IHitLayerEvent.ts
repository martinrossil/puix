import IPoint from '../vo/IPoint';

export default interface IHitLayerEvent extends Event {
    point: IPoint;
}
