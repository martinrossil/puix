import IEventDispatcher from '../core/IEventDispatcher';

export default interface IAnchorLayoutData extends IEventDispatcher {
    left: number;
    top: number;
    right: number;
    bottom: number;
    horizontalCenter: number;
    verticalCenter: number;
}