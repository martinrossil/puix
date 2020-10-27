import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ITextElement, TextAlign, TextElement } from '../src';

describe('ITextElement', () => {
    describe('default values', () => {
        it('text should be ""', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.text, '');
        });
        it('fontSize should be 11.2', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('textColor should be ""', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.textColor, '');
        });
        it('letterSpacing should be 0.0', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.letterSpacing, 0.0);
        });
        it('textAlign should be TextAlign.LEFT', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.textAlign, TextAlign.LEFT);
        });
    });
    describe('text', () => {
        it('given text is "", when text = "", text should be ""', () => {
            const textElement: ITextElement = new TextElement();
            textElement.text = '';
            assert.strictEqual(textElement.text, '');
        });
        it('given text is "", when text = "Lorem Ipsum", text should be "Lorem Ipsum"', () => {
            const textElement: ITextElement = new TextElement();
            textElement.text = 'Lorem Ipsum';
            assert.strictEqual(textElement.text, 'Lorem Ipsum');
        });
    });
    describe('fontSize', () => {
        it('given fontSize is 11.2, when fontSize = 11.2, fontSize should be 11.2', () => {
            const textElement: ITextElement = new TextElement();
            textElement.fontSize = 11.2;
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = NaN, fontSize should be 11.2', () => {
            const textElement: ITextElement = new TextElement();
            textElement.fontSize = NaN;
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = -10, fontSize should be 11.2', () => {
            const textElement: ITextElement = new TextElement();
            textElement.fontSize = -10;
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = 16, fontSize should be 16', () => {
            const textElement: ITextElement = new TextElement();
            textElement.fontSize = 16;
            assert.strictEqual(textElement.fontSize, 16);
        });
    });
    describe('textColor', () => {
        it('given textColor is "", when textColor = "", textColor should be ""', () => {
            const textElement: ITextElement = new TextElement();
            textElement.textColor = '';
            assert.strictEqual(textElement.textColor, '');
        });
        it('given textColor is "", when textColor = "red", textColor should be "red"', () => {
            const textElement: ITextElement = new TextElement();
            textElement.textColor = 'red';
            assert.strictEqual(textElement.textColor, 'red');
        });
    });
    describe('letterSpacing', () => {
        it('given letterSpacing is 0.0, when letterSpacing = 0.0, letterSpacing should be 0.0', () => {
            const textElement: ITextElement = new TextElement();
            textElement.letterSpacing = 0.0;
            assert.strictEqual(textElement.letterSpacing, 0.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = NaN, letterSpacing should be 0.0', () => {
            const textElement: ITextElement = new TextElement();
            textElement.letterSpacing = NaN;
            assert.strictEqual(textElement.letterSpacing, 0.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = -1.0, letterSpacing should be -1.0', () => {
            const textElement: ITextElement = new TextElement();
            textElement.letterSpacing = -1.0;
            assert.strictEqual(textElement.letterSpacing, -1.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = 1.0, letterSpacing should be 1.0', () => {
            const textElement: ITextElement = new TextElement();
            textElement.letterSpacing = 1.0;
            assert.strictEqual(textElement.letterSpacing, 1.0);
        });
    });
    describe('textAlign', () => {
        it('given textAlign is TextAlign.LEFT, when textAlign = TextAlign.LEFT, textAlign should be TextAlign.LEFT', () => {
            const textElement: ITextElement = new TextElement();
            textElement.textAlign = TextAlign.LEFT;
            assert.strictEqual(textElement.textAlign, TextAlign.LEFT);
        });
        it('given textAlign is TextAlign.LEFT, when textAlign = TextAlign.CENTER, textAlign should be TextAlign.CENTER', () => {
            const textElement: ITextElement = new TextElement();
            textElement.textAlign = TextAlign.CENTER;
            assert.strictEqual(textElement.textAlign, TextAlign.CENTER);
        });
    });
});
