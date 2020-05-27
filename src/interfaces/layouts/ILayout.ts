import IDisplayContainer from '../containers/IDisplayContainer';

export default interface ILayout {
    updateLayout(container: IDisplayContainer): void;
    padding: number;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    name: string;
}
