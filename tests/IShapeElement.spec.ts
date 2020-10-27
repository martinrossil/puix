import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IShapeElement, ShapeElement } from '../src';

describe('IShapeElement', () => {
    describe('default values', () => {
        it('default cornerRadius should be 0', () => {
            const shapeElement: IShapeElement = new ShapeElement();
            assert.strictEqual(shapeElement.cornerRadius, 0);
        });
    });
    describe('cornerRadius', () => {
        it('given cornerRadius is 0, when cornerRadius = 0, cornerRadius should be 0', () => {
            const shapeElement: IShapeElement = new ShapeElement();
            shapeElement.cornerRadius = 0;
            assert.strictEqual(shapeElement.cornerRadius, 0);
        });
        it('given cornerRadius is 0, when cornerRadius = -1, cornerRadius should be 0', () => {
            const shapeElement: IShapeElement = new ShapeElement();
            shapeElement.cornerRadius = -1;
            assert.strictEqual(shapeElement.cornerRadius, 0);
        });
        it('given cornerRadius is 0, when cornerRadius = NaN, cornerRadius should be 0', () => {
            const shapeElement: IShapeElement = new ShapeElement();
            shapeElement.cornerRadius = NaN;
            assert.strictEqual(shapeElement.cornerRadius, 0);
        });
        it('given cornerRadius is 1, when cornerRadius = NaN, cornerRadius should be 0', () => {
            const shapeElement: IShapeElement = new ShapeElement();
            shapeElement.cornerRadius = 1;
            shapeElement.cornerRadius = NaN;
            assert.strictEqual(shapeElement.cornerRadius, 0);
        });
    });
});
