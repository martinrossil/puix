import { Events } from '../enums/Events';
import IArrayList from '../interfaces/data/IArrayList';
import EventDispatcher from '../events/EventDispatcher';

export default class ArrayList<Item> extends EventDispatcher implements IArrayList<Item> {
    public constructor(items: Item[] | null = null) {
        super();
        this.name = 'ArrayList';
        if (items) {
            this._arrayData = items;
            return;
        }
        this._arrayData = [];
    }

    public addItem(item: Item): void {
        this.arrayData.push(item);
        this.dispatchCustomEvent(Events.ITEM_ADDED, item);
    }

    public addItems(items: Item[]): void {
        this._arrayData = this.arrayData.concat(items);
        this.dispatchCustomEvent(Events.ITEMS_ADDED, items);
    }

    public getItemIndex(item: Item): number {
        const index = this.arrayData.indexOf(item);
        if (index === -1) {
            return NaN;
        }
        return index;
    }

    public getItemAt(index: number): Item | null {
        if (index < 0) {
            return null;
        }
        if (index < this.arrayData.length) {
            return this.arrayData[index];
        }
        return null;
    }

    public removeItem(item: Item): void {
        const index = this.arrayData.indexOf(item);
        if (index > -1) {
            this.arrayData.splice(index, 1);
            this.dispatchCustomEvent(Events.ITEM_REMOVED, item);
        }
    }

    public removeItemAt(index: number): void {
        const item = this.getItemAt(index);
        if (item) {
            this.arrayData.splice(index, 1);
            this.dispatchCustomEvent(Events.ITEM_REMOVED, item);
        }
    }

    public removeAll(): void {
        if (this.length > 0) {
            this.arrayData.length = 0;
            this.dispatchEvent(new Event(Events.RESET));
        }
    }

    public get length(): number {
        return this.arrayData.length;
    }

    private _arrayData: Item[];

    public get arrayData(): Item[] {
        return this._arrayData;
    }
}
