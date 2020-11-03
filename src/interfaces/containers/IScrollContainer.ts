import IDisplayContainer from './IDisplayContainer';

export default interface IScrollContainer extends IDisplayContainer {
    scrollEnabled: boolean;
    horizontalScrollEnabled: boolean;
    verticalScrollEnabled: boolean;
}
