import EventDispatcher from '../core/EventDispatcher';
import IArrayList from './IArrayList';

export default class ArrayList<Item> extends EventDispatcher implements IArrayList<Item> {
    public static ITEM_ADDED = 'ArrayList.ITEM_ADDED';
    public static ITEMS_ADDED = 'ArrayList.ITEMS_ADDED';
    public static ITEM_REMOVED = 'ArrayList.ITEM_REMOVED';

    public constructor() {
        super();
        this.name = 'ArrayList';
    }

    public addItem(item: Item): void {
        this.arrayData.push(item);
        this.dispatchEventWith(ArrayList.ITEM_ADDED, item);
    }

    public addItems(items: Item[]): void {
        this._arrayData = this.arrayData.concat(items);
        this.dispatchEventWith(ArrayList.ITEMS_ADDED, items);
    }

    public getItemIndex(item: Item): number {
        return this.arrayData.indexOf(item);
    }

    public getItemAt(index: number): Item | null {
        if (index < this.arrayData.length) {
            return this.arrayData[index];
        }
        return null;
    }

    public removeItem(item: Item): void {
        const index = this.arrayData.indexOf(item);
        if (index > -1) {
            this.arrayData.splice(index, 1);
            this.dispatchEventWith(ArrayList.ITEM_REMOVED, item);
        }
    }

    public removeItemAt(index: number): void {
        const item = this.getItemAt(index);
        if (item) {
            this.arrayData.splice(index, 1);
            this.dispatchEventWith(ArrayList.ITEM_REMOVED, item);
        }
    }

    public get length(): number {
        return this.arrayData.length;
    }

    private _arrayData: Item[] = [];

    public get arrayData(): Item[] {
        return this._arrayData;
    }
}
