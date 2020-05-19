import ISizeElement from './ISizeElement';
import IEventDispatcher from './IEventDispatcher';

export default interface ILayoutElement extends ISizeElement {
    layoutData: IEventDispatcher | null;
}
