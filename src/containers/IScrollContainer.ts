import IDisplayContainer from './IDisplayContainer';

export default interface IScrollContainer extends IDisplayContainer {
    horizontalScrollPolicy: string;
    verticalScrollPolicy: string;
}
