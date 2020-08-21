import IDisplayContainer from '../../../containers/IDisplayContainer';

export default interface IButtonPrimary extends IDisplayContainer {
    text: string;
    textColor: string;
    restingBackgroundColor: string;
    hoveredBackgroundColor: string;
    pressedBackgroundColor: string;
    disabledBackgroundColor: string;
    disabledTextColor: string;
}
