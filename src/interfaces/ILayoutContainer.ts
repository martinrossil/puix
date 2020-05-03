import ILayout from './ILayout';
import IDisplayContainer from './IDisplayContainer';

export default interface ILayoutContainer extends IDisplayContainer {
    layout: ILayout | null;
}
