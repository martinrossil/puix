import { Events } from '../enums/Events';
import IListElement from '../interfaces/containers/IListElement';
import IArrayList from '../interfaces/data/IArrayList';
import IItemRenderer from '../interfaces/data/IItemRenderer';
import BaseItemRenderer from './BaseItemRenderer';
import ScrollContainer from '../containers/ScrollContainer';
import IEventListener from '../interfaces/events/IEventListener';

export default class ListElement<Item> extends ScrollContainer implements IListElement<Item> {
    public static SELECTED_ITEM_CHANGED = 'selectedItemChanged';
    private dataRendererLookup: Map<Item, IItemRenderer<Item> | undefined> = new Map();
    public constructor() {
        super();
        this.name = 'ListElement';
        this.itemAdded = this.itemAdded.bind(this);
        this.itemsAdded = this.itemsAdded.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
        this.reset = this.reset.bind(this);
        this.addEventListener(Events.LIST_ITEM_CLICKED, this.listItemClicked as IEventListener);
    }

    private listItemClicked(e: CustomEvent<Item>): void {
        e.stopImmediatePropagation();
        let itemIndex = NaN;
        if (this.dataProvider) {
            itemIndex = this.dataProvider.getItemIndex(e.detail);
        }
        if (isNaN(this.selectedIndex) && isNaN(itemIndex)) {
            return;
        }
        if (this.selectedIndex === itemIndex) {
            return;
        }
        this.selectedIndex = itemIndex;
        this.dispatchCustomEvent(ListElement.SELECTED_ITEM_CHANGED, this.selectedItem);
    }

    private updateSelectedItemRenderer(): void {
        this.dataRendererLookup.forEach((itemRenderer: IItemRenderer<Item> | undefined) => {
            if (itemRenderer) {
                itemRenderer.selected = false;
            }
        });
        if (this.selectedItemRenderer) {
            this.selectedItemRenderer.selected = true;
        }
    }

    private _ItemRenderer!: new () => IItemRenderer<Item>;

    public set ItemRenderer(value: new () => IItemRenderer<Item>) {
        if (this._ItemRenderer === value) {
            return;
        }
        this._ItemRenderer = value;
        this.reset();
    }

    public get ItemRenderer(): new () => IItemRenderer<Item> {
        if (!this._ItemRenderer) {
            this._ItemRenderer = BaseItemRenderer;
        }
        return this._ItemRenderer;
    }

    private itemAdded(e: CustomEvent<Item>): void {
        const itemRenderer: IItemRenderer<Item> = new this.ItemRenderer();
        itemRenderer.data = e.detail;
        this.dataRendererLookup.set(e.detail, itemRenderer);
        this.addElement(itemRenderer);
        this.updateSelectedItemRenderer();
    }

    private itemsAdded(e: CustomEvent<Item[]>): void {
        this.addItemRenderers(e.detail);
    }

    private addItemRenderers(items: Item[]): void {
        const itemRenderers: IItemRenderer<Item>[] = [];
        for (const item of items) {
            const itemRenderer: IItemRenderer<Item> = new this.ItemRenderer();
            itemRenderer.data = item;
            this.dataRendererLookup.set(item, itemRenderer);
            itemRenderers.push(itemRenderer);
        }
        this.addElements(itemRenderers);
        this.updateSelectedItemRenderer();
    }

    private itemRemoved(e: CustomEvent<Item>): void {
        const itemRenderer: IItemRenderer<Item> | undefined = this.dataRendererLookup.get(e.detail);
        if (itemRenderer) {
            this.removeElement(itemRenderer);
        }
        this.updateSelectedItemRenderer();
    }

    private reset(): void {
        this.removeAllElements();
        this.dataRendererLookup.clear();
        if (this.dataProvider) {
            this.addItemRenderers(this.dataProvider.arrayData);
        }
    }

    private _dataProvider: IArrayList<Item> | null = null;

    public set dataProvider(value: IArrayList<Item> | null) {
        if (this._dataProvider === value) {
            return;
        }
        if (this._dataProvider) {
            this._dataProvider.removeEventListener(Events.ITEM_ADDED, this.itemAdded as IEventListener);
            this._dataProvider.removeEventListener(Events.ITEMS_ADDED, this.itemsAdded as IEventListener);
            this._dataProvider.removeEventListener(Events.ITEM_REMOVED, this.itemRemoved as IEventListener);
            this._dataProvider.removeEventListener(Events.RESET, this.reset);
        }
        this._dataProvider = value;
        if (this._dataProvider) {
            this._dataProvider.addEventListener(Events.ITEM_ADDED, this.itemAdded as IEventListener);
            this._dataProvider.addEventListener(Events.ITEMS_ADDED, this.itemsAdded as IEventListener);
            this._dataProvider.addEventListener(Events.ITEM_REMOVED, this.itemRemoved as IEventListener);
            this._dataProvider.addEventListener(Events.RESET, this.reset);
        }
        this.reset();
    }

    public get dataProvider(): IArrayList<Item> | null{
        return this._dataProvider;
    }

    private get selectedItemRenderer(): IItemRenderer<Item> | undefined {
        if (this.selectedItem) {
            return this.dataRendererLookup.get(this.selectedItem);
        }
        return undefined;
    }

    public get selectedItem(): Item | null {
        if (this.dataProvider) {
            return this.dataProvider.getItemAt(this.selectedIndex);
        }
        return null;
    }

    private _selectedIndex = NaN;

    public set selectedIndex(value: number) {
        if (isNaN(this._selectedIndex) && isNaN(value)) {
            return;
        }
        if (this._selectedIndex === value) {
            return;
        }
        this._selectedIndex = value;
        this.updateSelectedItemRenderer();
    }

    public get selectedIndex(): number {
        return this._selectedIndex;
    }
}
customElements.define('list-element', ListElement);
