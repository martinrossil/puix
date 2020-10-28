import { assert } from 'chai';
import { describe, it } from 'mocha';
import { FontWeight, ITextRenderer, TextAlign, TextOverflow, TextRenderer, WhiteSpace } from '../src';

describe('ItextRenderer', () => {
    describe('default values', () => {
        it('text should be ""', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.text, '');
        });
        it('fontSize should be 11.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.fontSize, 11.2);
        });
        it('textColor should be ""', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.textColor, '');
        });
        it('letterSpacing should be 0.0', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.letterSpacing, 0.0);
        });
        it('textAlign should be TextAlign.LEFT', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.textAlign, TextAlign.LEFT);
        });
        it('fontFamily should be "Arial"', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.fontFamily, 'Arial');
        });
        it('whiteSpace should be WhiteSpace.NORMAL', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.whiteSpace, WhiteSpace.NORMAL);
        });
        it('textOverflow should be TextOverflow.CLIP', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.textOverflow, TextOverflow.CLIP);
        });
        it('fontWeight should be FontWeight.REGULAR_400', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.fontWeight, FontWeight.REGULAR_400);
        });
        it('lineHeight should be 1.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            assert.strictEqual(textRenderer.lineHeight, 1.2);
        });
    });
    describe('text', () => {
        it('given text is "", when text = "", text should be ""', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.text = '';
            assert.strictEqual(textRenderer.text, '');
        });
        it('given text is "", when text = "Lorem Ipsum", text should be "Lorem Ipsum"', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.text = 'Lorem Ipsum';
            assert.strictEqual(textRenderer.text, 'Lorem Ipsum');
        });
    });
    describe('fontSize', () => {
        it('given fontSize is 11.2, when fontSize = 11.2, fontSize should be 11.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontSize = 11.2;
            assert.strictEqual(textRenderer.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = NaN, fontSize should be 11.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontSize = NaN;
            assert.strictEqual(textRenderer.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = -10, fontSize should be 11.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontSize = -10;
            assert.strictEqual(textRenderer.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = 16, fontSize should be 16', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontSize = 16;
            assert.strictEqual(textRenderer.fontSize, 16);
        });
    });
    describe('textColor', () => {
        it('given textColor is "", when textColor = "", textColor should be ""', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.textColor = '';
            assert.strictEqual(textRenderer.textColor, '');
        });
        it('given textColor is "", when textColor = "red", textColor should be "red"', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.textColor = 'red';
            assert.strictEqual(textRenderer.textColor, 'red');
        });
    });
    describe('letterSpacing', () => {
        it('given letterSpacing is 0.0, when letterSpacing = 0.0, letterSpacing should be 0.0', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.letterSpacing = 0.0;
            assert.strictEqual(textRenderer.letterSpacing, 0.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = NaN, letterSpacing should be 0.0', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.letterSpacing = NaN;
            assert.strictEqual(textRenderer.letterSpacing, 0.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = -1.0, letterSpacing should be -1.0', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.letterSpacing = -1.0;
            assert.strictEqual(textRenderer.letterSpacing, -1.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = 1.0, letterSpacing should be 1.0', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.letterSpacing = 1.0;
            assert.strictEqual(textRenderer.letterSpacing, 1.0);
        });
    });
    describe('textAlign', () => {
        it('given textAlign is TextAlign.LEFT, when textAlign = TextAlign.LEFT, textAlign should be TextAlign.LEFT', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.textAlign = TextAlign.LEFT;
            assert.strictEqual(textRenderer.textAlign, TextAlign.LEFT);
        });
        it('given textAlign is TextAlign.LEFT, when textAlign = TextAlign.CENTER, textAlign should be TextAlign.CENTER', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.textAlign = TextAlign.CENTER;
            assert.strictEqual(textRenderer.textAlign, TextAlign.CENTER);
        });
    });
    describe('fontFamily', () => {
        it('given fontFamily is "Arial", when fontFamily = "Arial", fontFamily should be "Arial"', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontFamily = 'Arial';
            assert.strictEqual(textRenderer.fontFamily, 'Arial');
        });
        it('given fontFamily is "Arial", when fontFamily = "Verdana", fontFamily should be "Verdana"', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontFamily = 'Verdana';
            assert.strictEqual(textRenderer.fontFamily, 'Verdana');
        });
    });
    describe('whiteSpace', () => {
        it('given whiteSpace is WhiteSpace.NORMAL, when whiteSpace = WhiteSpace.NORMAL, whiteSpace should be WhiteSpace.NORMAL', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.whiteSpace = WhiteSpace.NORMAL;
            assert.strictEqual(textRenderer.whiteSpace, WhiteSpace.NORMAL);
        });
        it('given whiteSpace is WhiteSpace.NORMAL, when whiteSpace = WhiteSpace.NO_WRAP, whiteSpace should be WhiteSpace.NO_WRAP', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.whiteSpace = WhiteSpace.NO_WRAP;
            assert.strictEqual(textRenderer.whiteSpace, WhiteSpace.NO_WRAP);
        });
    });
    describe('textOverflow', () => {
        it('given textOverflow is TextOverFlow.CLIP, when textOverflow = TextOverFlow.CLIP, textOverflow should be TextOverFlow.CLIP', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.textOverflow = TextOverflow.CLIP;
            assert.strictEqual(textRenderer.textOverflow, TextOverflow.CLIP);
        });
        it('given textOverflow is TextOverFlow.CLIP, when textOverflow = TextOverFlow.ELLIPSIS, textOverflow should be TextOverFlow.ELLIPSIS', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.textOverflow = TextOverflow.ELLIPSIS;
            assert.strictEqual(textRenderer.textOverflow, TextOverflow.ELLIPSIS);
        });
    });
    describe('fontWeight', () => {
        it('given fontWeight is FontWeight.REGULAR_400, when fontWeight = FontWeight.REGULAR_400, fontWeight should be FontWeight.REGULAR_400', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontWeight = FontWeight.REGULAR_400;
            assert.strictEqual(textRenderer.fontWeight, FontWeight.REGULAR_400);
        });
        it('given fontWeight is FontWeight.REGULAR_400, when fontWeight = FontWeight.BOLD_700, fontWeight should be FontWeight.BOLD_700', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.fontWeight = FontWeight.BOLD_700;
            assert.strictEqual(textRenderer.fontWeight, FontWeight.BOLD_700);
        });
    });
    describe('lineHeight', () => {
        it('given lineHeight is 1.2, when lineHeight = 1.2, lineHeight should be 1.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.lineHeight = 1.2;
            assert.strictEqual(textRenderer.lineHeight, 1.2);
        });
        it('given lineHeight is 1.2, when lineHeight = NaN, lineHeight should be 1.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.lineHeight = NaN;
            assert.strictEqual(textRenderer.lineHeight, 1.2);
        });
        it('given lineHeight is 1.2, when lineHeight = -1.2, lineHeight should be 1.2', () => {
            const textRenderer: ITextRenderer = new TextRenderer();
            textRenderer.lineHeight = -1.2;
            assert.strictEqual(textRenderer.lineHeight, 1.2);
        });
    });
});
