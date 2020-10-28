import { TextAlign } from '../../enums/TextAlign';
import IDisplayElement from '../core/IDisplayElement';
import ITypeFace from './ITypeFace';

export default interface IBaseText extends IDisplayElement {
    text: string;
    fontSize: number;
    textColor: string;
    letterSpacing: number;
    textAlign: TextAlign;
    typeFace: ITypeFace;
}
