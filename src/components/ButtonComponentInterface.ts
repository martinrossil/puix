import DisplayContainerInterface from '../containers/DisplayContainerInterface';
import IColorRange from '../interfaces/design/color/IColorRange';

export default interface ButtonComponentInterface extends DisplayContainerInterface {
    label: string;
    icon: string;
    colorRange: IColorRange;
    labelColor: string;
    buttonType: string;
    iconSize: number;
}
