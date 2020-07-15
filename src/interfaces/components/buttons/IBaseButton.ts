import IDisplayContainer from '../../containers/IDisplayContainer';

export default interface IBaseButton extends IDisplayContainer {
    icon: string;
    label: string;
    cornerSize: number;
    cornerType: string;
    labelColor: string;
    iconColor: string;
    rippleColor: string;
    strokeColor: string;
    strokeOpacity: number;
    strokeWidth: number;
    backgroundColor: string;
    backgroundColorOpacity: number;
}
