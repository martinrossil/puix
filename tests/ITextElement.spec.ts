import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ITextElement, TextElement } from '../src';

describe('ITextElement', () => {
    describe('default values', () => {
        it('verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.verticalGap, 4);
        });
    });
    describe('verticalGap', () => {
        it('given verticalGap is 4, when verticalGap = 4, verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            textElement.verticalGap = 4;
            assert.strictEqual(textElement.verticalGap, 4);
        });
        it('given verticalGap is 4, when verticalGap = -4, verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            textElement.verticalGap = -4;
            assert.strictEqual(textElement.verticalGap, -4);
        });
        it('given verticalGap is 4, when verticalGap = NaN, verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            textElement.verticalGap = NaN;
            assert.strictEqual(textElement.verticalGap, 4);
        });
    });
});
