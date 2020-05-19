import IEventDispatcher from './IEventDispatcher';

export default interface ILayoutData extends IEventDispatcher {
    percentWidth: number;
    percentHeight: number;
}
