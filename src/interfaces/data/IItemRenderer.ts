import IDisplayContainer from '../containers/IDisplayContainer';

export default interface IItemRenderer<Item> extends IDisplayContainer {
    data: Item | null;
}
