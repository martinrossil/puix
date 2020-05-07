/**
 * Defines the possible values for the ITextElement.whiteSpace property.
 */
enum WhiteSpace {

    /**
     * Sequences of white space are collapsed.
     * Newline characters in the source are handled the same as other white space.
     * Lines are broken as necessary to fill line boxes.
     */
    NORMAL = 'normal',

    /**
     * Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.
     */
    NO_WRAP = 'nowrap',

    /**
     * Sequences of white space are preserved.
     * Lines are only broken at newline characters in the source and at <br> elements.
     */
    PRE = 'pre',

    /**
     * Sequences of white space are preserved.
     * Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
     */
    PRE_WRAP = 'pre-wrap',

    /**
     * Sequences of white space are collapsed.
     * Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
     */
    PRE_LINE = 'pre-line',

    /**
     * The behavior is identical to that of pre-wrap, except that:
     * - Any sequence of preserved white space always takes up space, including at the end of the line.
     * - A line breaking opportunity exists after every preserved white space character, including between white space characters.
     * - Such preserved spaces take up space and do not hang, and thus affect the box’s intrinsic sizes (min-content size and max-content size).
     */
    BREAK_SPCES = 'break-spaces'
}
export default WhiteSpace;
