import { assert } from 'chai';
import { describe, it } from 'mocha';
import { FontWeight, ITypeFace, TypeFace } from '../src';

describe('ITypeFace', () => {
    describe('default values', () => {
        it('fontFamily should be "Arial"', () => {
            const typeFace: ITypeFace = new TypeFace();
            assert.strictEqual(typeFace.fontFamily, 'Arial');
        });
        it('capHeight should be 0.715', () => {
            const typeFace: ITypeFace = new TypeFace();
            assert.strictEqual(typeFace.capHeight, 0.715);
        });
        it('fontWeight should be FontWeight.REGULAR_400', () => {
            const typeFace: ITypeFace = new TypeFace();
            assert.strictEqual(typeFace.fontWeight, FontWeight.REGULAR_400);
        });
        it('xOffset should be 0.11', () => {
            const typeFace: ITypeFace = new TypeFace();
            assert.strictEqual(typeFace.xOffset, 0.11);
        });
        it('yOffset should be 0.015', () => {
            const typeFace: ITypeFace = new TypeFace();
            assert.strictEqual(typeFace.yOffset, 0.015);
        });
    });
    describe('fontFamily', () => {
        it('given fontFamily is "Arial", when fontFamily = "Arial", fontFamily should be "Arial"', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.fontFamily = 'Arial';
            assert.strictEqual(typeFace.fontFamily, 'Arial');
        });
        it('given fontFamily is "Arial", when fontFamily = "Verdana", fontFamily should be "Verdana"', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.fontFamily = 'Verdana';
            assert.strictEqual(typeFace.fontFamily, 'Verdana');
        });
    });
    describe('capHeight', () => {
        it('given capHeight is 0.715, when capHeight = 0.715, capHeight should be 0.715', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.capHeight = 0.715;
            assert.strictEqual(typeFace.capHeight, 0.715);
        });
        it('given capHeight is 0.715, when capHeight = NaN, capHeight should be 0.715', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.capHeight = NaN;
            assert.strictEqual(typeFace.capHeight, 0.715);
        });
        it('given capHeight is 0.715, when capHeight = -1, capHeight should be 0.715', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.capHeight = -1;
            assert.strictEqual(typeFace.capHeight, 0.715);
        });
        it('given capHeight is 0.715, when capHeight = 0.8, capHeight should be 0.8', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.capHeight = 0.8;
            assert.strictEqual(typeFace.capHeight, 0.8);
        });
    });
    describe('fontWeight', () => {
        it('given fontWeight is FontWeight.REGULAR_400, when fontWeight = FontWeight.REGULAR_400, fontWeight should be FontWeight.REGULAR_400', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.fontWeight = FontWeight.REGULAR_400;
            assert.strictEqual(typeFace.fontWeight, FontWeight.REGULAR_400);
        });
        it('given fontWeight is FontWeight.REGULAR_400, when fontWeight = FontWeight.BOLD_700, fontWeight should be FontWeight.BOLD_700', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.fontWeight = FontWeight.BOLD_700;
            assert.strictEqual(typeFace.fontWeight, FontWeight.BOLD_700);
        });
    });
    describe('xOffset', () => {
        it('given xOffset is 0.11, when xOffset = 0.11, xOffset should be 0.11', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.xOffset = 0.11;
            assert.strictEqual(typeFace.xOffset, 0.11);
        });
        it('given xOffset is 0.11, when xOffset = NaN, xOffset should be 0.11', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.xOffset = NaN;
            assert.strictEqual(typeFace.xOffset, 0.11);
        });
        it('given xOffset is 0.11, when xOffset = 0.2, xOffset should be 0.2', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.xOffset = 0.2;
            assert.strictEqual(typeFace.xOffset, 0.2);
        });
    });
    describe('yOffset', () => {
        it('given yOffset is 0.015, when yOffset = 0.015, yOffset should be 0.015', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.yOffset = 0.015;
            assert.strictEqual(typeFace.yOffset, 0.015);
        });
        it('given yOffset is 0.015, when yOffset = NaN, yOffset should be 0.027', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.yOffset = NaN;
            assert.strictEqual(typeFace.yOffset, 0.015);
        });
        it('given yOffset is 0.015, when yOffset = 0.03, yOffset should be 0.03', () => {
            const typeFace: ITypeFace = new TypeFace();
            typeFace.yOffset = 0.03;
            assert.strictEqual(typeFace.yOffset, 0.03);
        });
    });
});
