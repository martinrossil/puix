import { FontWeight } from '../../enums/FontWeight';

export default interface ITypeFace {
    fontFamily: string;
    fontWeight: FontWeight;
    capHeight: number;
    xOffset: number;
    yOffset: number;
}
