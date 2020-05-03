import IEventDispatcher from './IEventDispatcher';
import IDisplayElement from './IDisplayElement';

export default interface ILayoutData extends IEventDispatcher {
    percentWidth: number;
    percentHeight: number;
    hostElement: IDisplayElement | null;
}
