import IDisplayElement from '../core/IDisplayElement';
import { TextAlign } from '../../enums/TextAlign';
import { WhiteSpace } from '../../enums/WhiteSpace';
import { FontWeight } from '../../enums/FontWeight';
import { TextOverflow } from '../../enums/TextOverflow';
export default interface ITextRenderer extends IDisplayElement {
    text: string;
    fontFamily: string;
    fontSize: number;
    textColor: string;
    fontWeight: FontWeight;
    lineHeight: number;
    whiteSpace: WhiteSpace;
    textOverflow: TextOverflow;
    letterSpacing: number;
    textAlign: TextAlign;
    readonly clientWidth: number;
    readonly clientHeight: number;
}
