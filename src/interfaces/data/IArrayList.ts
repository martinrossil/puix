import IEventDispatcher from '../core/IEventDispatcher';

export default interface IArrayList<Item> extends IEventDispatcher {
    readonly length: number;
    addItem(item: Item): void;
    addItems(items: Item[]): void;
    getItemIndex(item: Item): number;
    getItemAt(index: number): Item | null;
    removeItem(item: Item): void;
    removeItemAt(index: number): void;
    arrayData: Item[];
}
