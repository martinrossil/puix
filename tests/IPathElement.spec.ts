import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IPathElement, PathElement } from '../src';

describe('IPathElement', () => {
    describe('default values', () => {
        it('default pathData should be ""', () => {
            const pathElement: IPathElement = new PathElement();
            assert.strictEqual(pathElement.pathData, '');
        });
        it('default strokeColor should be ""', () => {
            const pathElement: IPathElement = new PathElement();
            assert.strictEqual(pathElement.strokeColor, '');
        });
        it('default strokeWidth should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            assert.strictEqual(pathElement.strokeWidth, 0);
        });
        it('default strokeOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            assert.strictEqual(pathElement.strokeOpacity, 1);
        });
        it('default fillColor should be ""', () => {
            const pathElement: IPathElement = new PathElement();
            assert.strictEqual(pathElement.fillColor, '');
        });
        it('default fillOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            assert.strictEqual(pathElement.fillOpacity, 1);
        });
    });
    describe('pathData', () => {
        it('given pathData is "", when pathData = "", pathData should be ""', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.pathData = '';
            assert.strictEqual(pathElement.pathData, '');
        });
        it('given pathData is "", when pathData = "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z", pathData should be "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.pathData = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';
            assert.strictEqual(pathElement.pathData, 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z');
        });
    });
    describe('strokeColor', () => {
        it('given strokeColor is "", when strokeColor = "", strokeColor should be ""', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeColor = '';
            assert.strictEqual(pathElement.strokeColor, '');
        });
        it('given strokeColor is "", when strokeColor = "red", strokeColor should be "red"', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeColor = 'red';
            assert.strictEqual(pathElement.strokeColor, 'red');
        });
    });
    describe('strokeWidth', () => {
        it('given strokeWidth is 0, when strokeWidth = 0, strokeWidth should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeWidth = 0;
            assert.strictEqual(pathElement.strokeWidth, 0);
        });
        it('given strokeWidth is 0, when strokeWidth = 1, strokeWidth should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeWidth = 1;
            assert.strictEqual(pathElement.strokeWidth, 1);
        });
        it('given strokeWidth is 0, when strokeWidth = -1, strokeWidth should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeWidth = -1;
            assert.strictEqual(pathElement.strokeWidth, 0);
        });
        it('given strokeWidth is 0, when strokeWidth = NaN, strokeWidth should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeWidth = NaN;
            assert.strictEqual(pathElement.strokeWidth, 0);
        });
        it('given strokeWidth is 1, when strokeWidth = NaN, strokeWidth should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeWidth = 1;
            pathElement.strokeWidth = NaN;
            assert.strictEqual(pathElement.strokeWidth, 0);
        });
    });
    describe('strokeOpacity', () => {
        it('given strokeOpacity is 1, when strokeOpacity = 1, strokeOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeOpacity = 1;
            assert.strictEqual(pathElement.strokeOpacity, 1);
        });
        it('given strokeOpacity is 1, when strokeOpacity = 0, strokeOpacity should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeOpacity = 0;
            assert.strictEqual(pathElement.strokeOpacity, 0);
        });
        it('given strokeOpacity is 1, when strokeOpacity = -1, strokeOpacity should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeOpacity = -1;
            assert.strictEqual(pathElement.strokeOpacity, 0);
        });
        it('given strokeOpacity is 1, when strokeOpacity = NaN, strokeOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeOpacity = NaN;
            assert.strictEqual(pathElement.strokeOpacity, 1);
        });
        it('given strokeOpacity is 1, when strokeOpacity = 2, strokeOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.strokeOpacity = 2;
            assert.strictEqual(pathElement.strokeOpacity, 1);
        });
    });
    describe('fillColor', () => {
        it('given fillColor is "", when fillColor = "", fillColor should be ""', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillColor = '';
            assert.strictEqual(pathElement.fillColor, '');
        });
        it('given fillColor is "", when fillColor = "red", fillColor should be "red"', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillColor = 'red';
            assert.strictEqual(pathElement.fillColor, 'red');
        });
    });
    describe('fillOpacity', () => {
        it('given fillOpacity is 1, when fillOpacity = 1, fillOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillOpacity = 1;
            assert.strictEqual(pathElement.fillOpacity, 1);
        });
        it('given fillOpacity is 1, when fillOpacity = 0, fillOpacity should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillOpacity = 0;
            assert.strictEqual(pathElement.fillOpacity, 0);
        });
        it('given fillOpacity is 1, when fillOpacity = -1, fillOpacity should be 0', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillOpacity = -1;
            assert.strictEqual(pathElement.fillOpacity, 0);
        });
        it('given fillOpacity is 1, when fillOpacity = NaN, fillOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillOpacity = NaN;
            assert.strictEqual(pathElement.fillOpacity, 1);
        });
        it('given fillOpacity is 1, when fillOpacity = 2, fillOpacity should be 1', () => {
            const pathElement: IPathElement = new PathElement();
            pathElement.fillOpacity = 2;
            assert.strictEqual(pathElement.fillOpacity, 1);
        });
    });
});
