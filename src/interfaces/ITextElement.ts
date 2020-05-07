import IFontDescription from './IFontDescription';
import IDisplayElement from './IDisplayElement';
import FontWeight from '../enums/FontWeight';
import WhiteSpace from '../enums/WhiteSpace';
import TextOverflow from '../enums/TextOverflow';

export default interface ITextElement extends IDisplayElement {
    text: string;
    fontDescription: IFontDescription;
    /**
     * The font-size CSS property sets the size of the font.
     * This property is also used to compute the size of em, ex, and other relative <length> units.
     */
    fontSize: number;
    /**
     * The font-weight CSS property sets the weight (or boldness) of the font.
     * The weights available depend on the font-family you are using.
     */
    fontWeight: FontWeight;
    /**
     * The line-height CSS property sets the height of a line box.
     * It's commonly used to set the distance between lines of text.
     * On block-level elements, it specifies the minimum height of line boxes within the element.
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     */
    lineHeight: number;
    whiteSpace: WhiteSpace;
    color: string;
    letterSpacing: number;
    truncate: boolean;
    textOverflow: TextOverflow;
}
