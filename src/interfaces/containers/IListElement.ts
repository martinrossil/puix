import IArrayList from '../data/IArrayList';
import IItemRenderer from '../data/IItemRenderer';
import IScrollContainer from './IScrollContainer';

export default interface IListElement<Item> extends IScrollContainer {
    dataProvider: IArrayList<Item> | null;
    ItemRenderer: new () => IItemRenderer<Item>;
    selectedIndex: number;
    readonly selectedItem: Item | null;
}
