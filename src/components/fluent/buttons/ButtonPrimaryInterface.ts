import DisplayContainerInterface from '../../../containers/DisplayContainerInterface';

export default interface ButtonPrimaryInterface extends DisplayContainerInterface {
    text: string;
    textColor: string;
    restingBackgroundColor: string;
    hoveredBackgroundColor: string;
    pressedBackgroundColor: string;
    disabledBackgroundColor: string;
    disabledTextColor: string;
}
