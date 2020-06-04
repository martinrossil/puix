import IDisplayContainer from '../../containers/IDisplayContainer';

export default interface IBaseButton extends IDisplayContainer {
    icon: string;
    label: string;
    cornerSize: number;
    cornerType: number;
    labelColor: string;
    iconColor: string;
    strokeColor: string;
    strokeOpacity: number;
    strokeWidth: number;
    backgroundColor: string;
    backgroundColorOpacity: number;
}
