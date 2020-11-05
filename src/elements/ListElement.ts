import ArrayList from '../data/ArrayList';
import { Events } from '../enums/Events';
import IListElement from '../interfaces/containers/IListElement';
import IArrayList from '../interfaces/data/IArrayList';
import IItemRenderer from '../interfaces/data/IItemRenderer';
import DefaultItemRenderer from './DefaultItemRenderer';
import ScrollContainer from '../containers/ScrollContainer';
import IEventListener from '../interfaces/events/IEventListener';

export default class ListElement<Item> extends ScrollContainer implements IListElement<Item> {
    public constructor() {
        super();
        this.name = 'ListElement';
        this.itemAdded = this.itemAdded.bind(this);
        this.itemsAdded = this.itemsAdded.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
        this.reset = this.reset.bind(this);
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
            this._ItemRenderer = DefaultItemRenderer;
        }
        return this._ItemRenderer;
    }

    private itemAdded(e: CustomEvent<Item>): void {
        console.log(e.type, e.detail);
        const itemRenderer: IItemRenderer<Item> = new this.ItemRenderer();
        itemRenderer.data = e.detail;
        this.addElement(itemRenderer);
    }

    private itemsAdded(e: CustomEvent<Item[]>): void {
        console.log(e.type, e.detail);
        const itemRenderers: IItemRenderer<Item>[] = [];
        for (const item of e.detail) {
            const itemRenderer: IItemRenderer<Item> = new this.ItemRenderer();
            itemRenderer.data = item;
            itemRenderers.push(itemRenderer);
        }
        this.addElements(itemRenderers);
    }

    private itemRemoved<Item>(e: CustomEvent<Item>): void {
        console.log(e.type, e.detail);
    }

    private reset(): void {
        console.log('reset');
    }

    private _dataProvider!: IArrayList<Item>;

    public set dataProvider(value: IArrayList<Item>) {
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
        this._dataProvider.addEventListener(Events.ITEM_ADDED, this.itemAdded as IEventListener);
        this._dataProvider.addEventListener(Events.ITEMS_ADDED, this.itemsAdded as IEventListener);
        this._dataProvider.addEventListener(Events.ITEM_REMOVED, this.itemRemoved as IEventListener);
        this._dataProvider.addEventListener(Events.RESET, this.reset);
        this.reset();
    }

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
}
customElements.define('list-element', ListElement);
