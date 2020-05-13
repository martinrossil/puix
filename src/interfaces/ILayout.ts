import IDisplayContainer from './IDisplayContainer';

export default interface ILayout {
    updateLayout(container: IDisplayContainer): void;
    padding: number;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    gap: number;
    horizontalGap: number;
    verticalGap: number;
    horizontalAlign: string;
    verticalAlign: string;
    name: string;
}
