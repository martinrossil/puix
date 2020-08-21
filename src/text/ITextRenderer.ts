import IDisplayElement from '../core/IDisplayElement';
import { TextAlign } from '../enums/TextAlign';
import { WhiteSpace } from '../enums/WhiteSpace';
import { TextOverflow } from '../enums/TextOverflow';
import { FontWeight } from '../enums/FontWeight';
export default interface ITextRenderer extends IDisplayElement {
    text: string;
    clientWidth: number;
    clientHeight: number;
    fontFamily: string;
    fontSize: number;
    textColor: string;
    fontWeight: FontWeight;
    lineHeight: number;
    whiteSpace: WhiteSpace;
    textOverflow: TextOverflow;
    letterSpacing: number;
    textAlign: TextAlign;
}
