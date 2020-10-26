import ILayoutElement from './ILayoutElement';

export default interface IDisplayElement extends ILayoutElement {
    opacity: number;
    clip: boolean;
    enabled: boolean;
    cornerRadius: number;
    tabIndex: number;
    cursor: string;
    backgroundColor: string;
    shadow: string;
}
