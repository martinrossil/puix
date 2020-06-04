import ILayoutElement from './ILayoutElement';
import ITheme from '../design/ITheme';

export default interface IDisplayElement extends ILayoutElement {
    opacity: number;
    overflow: string;
    overflowHorizontal: string;
    overflowVertical: string;
    interactive: boolean;
    borderRadius: number;
    z: number;
    theme: ITheme;
    tabIndex: number;
    cursor: string;
}
