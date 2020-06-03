import IDisplayContainer from '../../containers/IDisplayContainer';

export default interface IBaseButton extends IDisplayContainer {
    icon: string;
    label: string;
    color: string;
    cornerSize: number;
    cornerType: number;
    backgroundColor: string;
}
