import DisplayContainerInterface from '../containers/DisplayContainerInterface';

export default interface ButtonComponentInterface extends DisplayContainerInterface {
    label: string;
    icon: string;
    labelColor: string;
    buttonType: string;
    iconSize: number;
}
