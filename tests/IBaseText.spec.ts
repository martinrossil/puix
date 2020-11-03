import { assert } from 'chai';
import { describe, it } from 'mocha';
import { BaseText, IBaseText, TextAlign, TypeFace } from '../src';
describe('IBaseText', () => {
    describe('default values', () => {
        it('text should be ""', () => {
            const baseText: IBaseText = new BaseText();
            assert.strictEqual(baseText.text, '');
        });
        it('fontSize should be 11.2', () => {
            const baseText: IBaseText = new BaseText();
            assert.strictEqual(baseText.fontSize, 11.2);
        });
        it('textColor should be ""', () => {
            const baseText: IBaseText = new BaseText();
            assert.strictEqual(baseText.textColor, '');
        });
        it('letterSpacing should be 0.0', () => {
            const baseText: IBaseText = new BaseText();
            assert.strictEqual(baseText.letterSpacing, 0.0);
        });
        it('textAlign should be TextAlign.LEFT', () => {
            const baseText: IBaseText = new BaseText();
            assert.strictEqual(baseText.textAlign, TextAlign.LEFT);
        });
    });
    describe('text', () => {
        it('given text is "", when text = "", text should be ""', () => {
            const textElement: IBaseText = new BaseText();
            textElement.text = '';
            assert.strictEqual(textElement.text, '');
        });
        it('given text is "", when text = "Lorem Ipsum", text should be "Lorem Ipsum"', () => {
            const textElement: IBaseText = new BaseText();
            textElement.text = 'Lorem Ipsum';
            assert.strictEqual(textElement.text, 'Lorem Ipsum');
        });
    });
    describe('fontSize', () => {
        it('given fontSize is 11.2, when fontSize = 11.2, fontSize should be 11.2', () => {
            const textElement: IBaseText = new BaseText();
            textElement.fontSize = 11.2;
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = NaN, fontSize should be 11.2', () => {
            const textElement: IBaseText = new BaseText();
            textElement.fontSize = NaN;
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = -10, fontSize should be 11.2', () => {
            const textElement: IBaseText = new BaseText();
            textElement.fontSize = -10;
            assert.strictEqual(textElement.fontSize, 11.2);
        });
        it('given fontSize is 11.2, when fontSize = 16, fontSize should be 16', () => {
            const textElement: IBaseText = new BaseText();
            textElement.fontSize = 16;
            assert.strictEqual(textElement.fontSize, 16);
        });
    });
    describe('textColor', () => {
        it('given textColor is "", when textColor = "", textColor should be ""', () => {
            const textElement: IBaseText = new BaseText();
            textElement.textColor = '';
            assert.strictEqual(textElement.textColor, '');
        });
        it('given textColor is "", when textColor = "red", textColor should be "red"', () => {
            const textElement: IBaseText = new BaseText();
            textElement.textColor = 'red';
            assert.strictEqual(textElement.textColor, 'red');
        });
    });
    describe('letterSpacing', () => {
        it('given letterSpacing is 0.0, when letterSpacing = 0.0, letterSpacing should be 0.0', () => {
            const textElement: IBaseText = new BaseText();
            textElement.letterSpacing = 0.0;
            assert.strictEqual(textElement.letterSpacing, 0.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = NaN, letterSpacing should be 0.0', () => {
            const textElement: IBaseText = new BaseText();
            textElement.letterSpacing = NaN;
            assert.strictEqual(textElement.letterSpacing, 0.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = -1.0, letterSpacing should be -1.0', () => {
            const textElement: IBaseText = new BaseText();
            textElement.letterSpacing = -1.0;
            assert.strictEqual(textElement.letterSpacing, -1.0);
        });
        it('given letterSpacing is 0.0, when letterSpacing = 1.0, letterSpacing should be 1.0', () => {
            const textElement: IBaseText = new BaseText();
            textElement.letterSpacing = 1.0;
            assert.strictEqual(textElement.letterSpacing, 1.0);
        });
    });
    describe('textAlign', () => {
        it('given textAlign is TextAlign.LEFT, when textAlign = TextAlign.LEFT, textAlign should be TextAlign.LEFT', () => {
            const textElement: IBaseText = new BaseText();
            textElement.textAlign = TextAlign.LEFT;
            assert.strictEqual(textElement.textAlign, TextAlign.LEFT);
        });
        it('given textAlign is TextAlign.LEFT, when textAlign = TextAlign.CENTER, textAlign should be TextAlign.CENTER', () => {
            const textElement: IBaseText = new BaseText();
            textElement.textAlign = TextAlign.CENTER;
            assert.strictEqual(textElement.textAlign, TextAlign.CENTER);
        });
    });
    describe('typeFace', () => {
        it('given default typeFace, when typeFace = new TypeFace(), typeFace should be covered', () => {
            const textElement: IBaseText = new BaseText();
            textElement.typeFace = new TypeFace();
        });
    });
});
