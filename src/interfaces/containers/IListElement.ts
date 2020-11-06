import IArrayList from '../data/IArrayList';
import IItemRenderer from '../data/IItemRenderer';
import IScrollContainer from './IScrollContainer';

export default interface IListElement<Item> extends IScrollContainer {
    readonly dataProvider: IArrayList<Item>;
    ItemRenderer: new () => IItemRenderer<Item>;
    readonly selectedItem: Item | null;
    selectedIndex: number;
}
