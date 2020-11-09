import IDisplayContainer from '../containers/IDisplayContainer';
import IState from '../fsm/IState';

export default interface IItemRenderer<Item> extends IDisplayContainer {
    data: Item | null;
    selected: boolean;
    readonly currentState: IState;
}
