import ILayoutElement from './ILayoutElement';
import ITheme from '../design/ITheme';

export default interface IDisplayElement extends ILayoutElement {
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
