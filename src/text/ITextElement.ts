import DisplayElementInterface from '../core/DisplayElementInterface';
import { TextAlign } from '../enums/TextAlign';
import { FontWeight } from '../enums/FontWeight';
export default interface ITextElement extends DisplayElementInterface {
    text: string;
    fontFamily: string;
    fontSize: number;
    wordwrap: boolean;
    textColor: string;
    fontWeight: FontWeight;
    lineHeight: number;
    letterSpacing: number;
    capHeight: number;
    verticalOffset: number;
    horizontalOffset: number;
    textAlign: TextAlign;
}
