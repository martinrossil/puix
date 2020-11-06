import ArrayList from '../data/ArrayList';
import { Events } from '../enums/Events';
import IListElement from '../interfaces/containers/IListElement';
import IArrayList from '../interfaces/data/IArrayList';
import IItemRenderer from '../interfaces/data/IItemRenderer';
import BaseItemRenderer from './BaseItemRenderer';
import ScrollContainer from '../containers/ScrollContainer';
import IEventListener from '../interfaces/events/IEventListener';

export default class ListElement<Item> extends ScrollContainer implements IListElement<Item> {
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
        this.selectedIndex = this.dataProvider.getItemIndex(e.detail);
        this.dispatchCustomEvent(Events.SELECTED_INDEX_CHANGED, this.selectedIndex);
    }

    private updateSelectedItemRenderer(): void {
        this.dataRendererLookup.forEach((itemRenderer: IItemRenderer<Item> | undefined) => {
            if (itemRenderer) {
                itemRenderer.selected = false;
            }
        })
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
        const itemRenderers: IItemRenderer<Item>[] = [];
        for (const item of e.detail) {
            const itemRenderer: IItemRenderer<Item> = new this.ItemRenderer();
            itemRenderer.data = item;
            this.dataRendererLookup.set(item, itemRenderer);
            itemRenderers.push(itemRenderer);
        }
        this.addElements(itemRenderers);
        this.updateSelectedItemRenderer();
    }

    private itemRemoved<Item>(e: CustomEvent<Item>): void {
        console.log(e.type, e.detail);
        this.updateSelectedItemRenderer();
    }

    private reset(): void {
        console.log('reset');
        this.updateSelectedItemRenderer();
    }

    private _dataProvider!: IArrayList<Item>;

    public get dataProvider(): IArrayList<Item> {
        if (!this._dataProvider) {
            this._dataProvider = new ArrayList<Item>();
            this._dataProvider.addEventListener(Events.ITEM_ADDED, this.itemAdded as IEventListener);
            this._dataProvider.addEventListener(Events.ITEMS_ADDED, this.itemsAdded as IEventListener);
            this._dataProvider.addEventListener(Events.ITEM_REMOVED, this.itemRemoved as IEventListener);
            this._dataProvider.addEventListener(Events.RESET, this.reset);
        }
        return this._dataProvider;
    }

    private get selectedItemRenderer(): IItemRenderer<Item> | undefined {
        if (this.selectedItem) {
            return this.dataRendererLookup.get(this.selectedItem);
        }
        return undefined;
    }

    public get selectedItem(): Item | null {
        return this.dataProvider.getItemAt(this.selectedIndex);
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
