import IDisplayContainer from '../containers/IDisplayContainer';

export default interface IButtonElement extends IDisplayContainer {
    icon: string;
    label: string;
    color: string;
    cornerSize: number;
    cornerType: number;
    backgroundColor: string;
}
