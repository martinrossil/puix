import DisplayElementInterface from '../core/DisplayElementInterface';

export default interface TextElementInterface extends DisplayElementInterface {
    text: string;
    fontFamily: string;
    fontSize: number;
    wordwrap: boolean;
    color: string;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
    capHeight: number;
    verticalOffset: number;
    horizontalOffset: number;
}
