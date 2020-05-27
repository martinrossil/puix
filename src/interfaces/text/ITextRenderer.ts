import IDisplayElement from '../core/IDisplayElement';

export default interface ITextRenderer extends IDisplayElement {
    text: string;
    clientWidth: number;
    clientHeight: number;
    fontFamily: string;
    fontSize: number;
    color: string;
    fontWeight: number;
    lineHeight: number;
    whiteSpace: string;
    textOverflow: string;
}
