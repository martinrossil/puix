import ITypeData from '../interfaces/design/typography/ITypeData';
import DisplayElementInterface from '../core/DisplayElementInterface';

export default interface TextElementInterface extends DisplayElementInterface {
    text: string;
    typeData: ITypeData;
    fontSize: number;
    wordwrap: boolean;
    color: string;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
}
