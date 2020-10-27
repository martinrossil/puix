import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ITextRenderer, TextAlign, TextRenderer } from '../src';

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
});
