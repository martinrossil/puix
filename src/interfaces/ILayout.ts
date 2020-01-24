import IDisplayContainer from './IDisplayContainer';

export default interface ILayout {
    updateLayout(container: IDisplayContainer): void;
}
