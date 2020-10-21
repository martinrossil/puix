import EventDispatcher from '../core/EventDispatcher';
import { Events } from '../enums/Events';
import IArrayList from '../interfaces/data/IArrayList';

export default class ArrayList<Item> extends EventDispatcher implements IArrayList<Item> {
    public constructor() {
        super();
        this.name = 'ArrayList';
    }

    public addItem(item: Item): void {
        this.arrayData.push(item);
        this.dispatchEventWith(Events.ITEM_ADDED, item);
    }

    public addItems(items: Item[]): void {
        this._arrayData = this.arrayData.concat(items);
        this.dispatchEventWith(Events.ITEMS_ADDED, items);
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
            this.dispatchEventWith(Events.ITEM_REMOVED, item);
        }
    }

    public removeItemAt(index: number): void {
        const item = this.getItemAt(index);
        if (item) {
            this.arrayData.splice(index, 1);
            this.dispatchEventWith(Events.ITEM_REMOVED, item);
        }
    }

    public removeAll(): void {
        if (this.length > 0) {
            this.arrayData.length = 0;
            this.dispatchEventWith(Events.RESET);
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
