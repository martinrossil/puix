import ILayoutElement from './ILayoutElement';
import ITheme from '../design/ITheme';

export default interface IDisplayElement extends ILayoutElement {
    backgroundColor: string;
    opacity: number;
    overflow: string;
    overflowHorizontal: string;
    overflowVertical: string;
    interactive: boolean;
    cornerRadius: number;
    z: number;
    theme: ITheme;
}