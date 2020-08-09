import LayoutElementInterface from './LayoutElementInterface';
import ITheme from '../interfaces/design/ITheme';

export default interface DisplayElementInterface extends LayoutElementInterface {
    opacity: number;
    overflow: string;
    overflowX: string;
    overflowY: string;
    enabled: boolean;
    borderRadius: number;
    shadow: string;
    theme: ITheme;
    tabIndex: number;
    cursor: string;
    backgroundColor: string;
    visible: boolean;
}
