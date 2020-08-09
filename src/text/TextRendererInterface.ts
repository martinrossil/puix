import DisplayElementInterface from '../core/DisplayElementInterface';

export default interface TextRendererInterface extends DisplayElementInterface {
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
    letterSpacing: number;
}
