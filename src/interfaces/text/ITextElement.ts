import ITypeData from './ITypeData';
import IDisplayElement from '../core/IDisplayElement';

export default interface ITextElement extends IDisplayElement {
    text: string;
    typeData: ITypeData;
    letterHeight: number;
    wordwrap: boolean;
    color: string;
    fontWeight: number;
    lineHeight: number;
}
