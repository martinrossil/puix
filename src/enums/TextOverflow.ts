/**
 * Defines the possible values for the ITextElement.textOverflow property.
 */
enum TextOverflow {
    /**
     * The default for this property.
     * This keyword value will truncate the text at the limit of the content area,
     * therefore the truncation can happen in the middle of a character.
     */
    CLIP = 'clip',
    /**
     * This keyword value will display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) to represent clipped text.
     * The ellipsis is displayed inside the content area, decreasing the amount of text displayed.
     * If there is not enough space to display the ellipsis, it is clipped.
     */
    ELLIPSIS = 'ellipsis',
    /**
     * To clip at the transition between characters you can specify textOverflow as EMPTY,
     * if that is supported in your target browsers.
     */
    EMPTY = ''

}
export default TextOverflow;
