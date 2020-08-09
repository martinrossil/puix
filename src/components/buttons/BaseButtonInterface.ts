import DisplayContainerInterface from '../../containers/DisplayContainerInterface';

export default interface BaseButtonInterface extends DisplayContainerInterface {
    icon: string;
    label: string;
    cornerSize: number;
    labelColor: string;
    iconColor: string;
    rippleColor: string;
    strokeColor: string;
    strokeOpacity: number;
    strokeWidth: number;
    backgroundColor: string;
    backgroundColorOpacity: number;
}
