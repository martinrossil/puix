import EventDispatcherInterface from '../core/EventDispatcherInterface';

export default interface ArrayListInterface<Item> extends EventDispatcherInterface {
    readonly length: number;
    addItem(item: Item): void;
    addItems(items: Item[]): void;
    getItemIndex(item: Item): number;
    getItemAt(index: number): Item | null;
    removeItem(item: Item): void;
    removeItemAt(index: number): void;
    arrayData: Item[];
}
