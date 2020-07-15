import ITypeData from '../design/typography/ITypeData';
import IDisplayElement from '../core/IDisplayElement';

export default interface ITextElement extends IDisplayElement {
    text: string;
    typeData: ITypeData;
    fontSize: number;
    wordwrap: boolean;
    color: string;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
}
