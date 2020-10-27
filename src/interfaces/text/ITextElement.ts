import IDisplayElement from '../core/IDisplayElement';
import { TextAlign } from '../../enums/TextAlign';
export default interface ITextElement extends IDisplayElement {
    text: string;
    // fontFamily: string;
    fontSize: number;
    // wordwrap: boolean;
    textColor: string;
    // fontWeight: FontWeight;
    // lineHeight: number;
    letterSpacing: number;
    // capHeight: number;
    // verticalOffset: number;
    // horizontalOffset: number;
    textAlign: TextAlign;
}
