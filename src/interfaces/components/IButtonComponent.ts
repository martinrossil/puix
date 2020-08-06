import IDisplayContainer from '../containers/IDisplayContainer';
import IColorRange from '../design/color/IColorRange';

export default interface IButtonComponent extends IDisplayContainer {
    label: string;
    icon: string;
    colorRange: IColorRange;
    labelColor: string;
    buttonType: string;
    iconSize: number;
}
