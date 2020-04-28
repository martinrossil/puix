import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import ISizeElement from '../src/interfaces/ISizeElement';
import SizeElement from '../src/core/SizeElement';

const sizeElement: ISizeElement = new SizeElement();
document.body.appendChild(sizeElement as unknown as Node);

beforeEach(() => {
    sizeElement.minWidth = 0;
    sizeElement.maxWidth = Infinity;
    sizeElement.width = NaN;
    sizeElement.actualWidth = 0;
    sizeElement.minHeight = 0;
    sizeElement.maxHeight = Infinity;
    sizeElement.height = NaN;
    sizeElement.actualHeight = 0;
});

describe('ISizeElement interface', () => {
    describe('default values', () => {
        it('default minWidth should be 0', () => {
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('default width should be NaN', () => {
            assert.isNaN(sizeElement.width);
        });
        it('default maxWidth should be Infinity', () => {
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
        it('default minHeight should be 0', () => {
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('default height should be NaN', () => {
            assert.isNaN(sizeElement.height);
        });
        it('default maxHeight should be Infinity', () => {
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
        it('default actualWidth should be 0', () => {
            assert.strictEqual(sizeElement.actualWidth, 0);
        });
        it('default actualHeight should be 0', () => {
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
    });
    describe('setSize()', () => {
        it('given default size, setSize(100, 100), width and height should be 100', () => {
            sizeElement.setSize(100, 100);
            assert.strictEqual(sizeElement.width, 100);
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given size is 100, setSize(-100, -100), width and height should be 0', () => {
            sizeElement.setSize(100, 100);
            sizeElement.setSize(-100, -100);
            assert.strictEqual(sizeElement.width, 0);
            assert.strictEqual(sizeElement.height, 0);
        });
        it('given size is 100, setSize(NaN, NaN), width and height should be NaN', () => {
            sizeElement.setSize(100, 100);
            sizeElement.setSize(NaN, NaN);
            assert.isNaN(sizeElement.width);
            assert.isNaN(sizeElement.height);
        });
    });
    describe('actualSize()', () => {
        it('given default actualSize, setActualSize(100, 100), actualWidth and actualHeight should be 100', () => {
            sizeElement.setActualSize(100, 100);
            assert.strictEqual(sizeElement.actualWidth, 100);
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
        it('given actualSize is 100, setActualSize(-100, -100), actualWidth and actualHeight should be 0', () => {
            sizeElement.setActualSize(100, 100);
            sizeElement.setActualSize(-100, -100);
            assert.strictEqual(sizeElement.actualWidth, 0);
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
        it('given actualSize is 100, setActualSize(NaN, NaN), actualWidth and actualHeight should be 0', () => {
            sizeElement.setActualSize(100, 100);
            sizeElement.setActualSize(NaN, NaN);
            assert.strictEqual(sizeElement.actualWidth, 0);
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
    });
    describe('setSize() side effects', () => {
        it('given default size, setSize(100, 100), actualWidth and actualHeight should be 100', () => {
            sizeElement.setSize(100, 100);
            assert.strictEqual(sizeElement.actualWidth, 100);
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
        it('given size is 100, setSize(-100, -100), actualWidth and actualHeight should be 0', () => {
            sizeElement.setSize(100, 100);
            sizeElement.setSize(-100, -100);
            assert.strictEqual(sizeElement.actualWidth, 0);
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
    });
    describe('minWidth', () => {
        it('given default minWidth, when minWidth = -100, minWidth should be 0', () => {
            sizeElement.minWidth = -100;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('given minWidth is 100, when minWidth = NaN, minWidth should be 0', () => {
            sizeElement.minWidth = 100;
            sizeElement.minWidth = NaN;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
    });
    describe('minWidth side effects', () => {
        it('given default minWidth, when minWidth = 100, actualWidth should be 100', () => {
            sizeElement.minWidth = 100;
            assert.strictEqual(sizeElement.actualWidth, 100);
        });
        it('given default minWidth and maxWidth === 100, when minWidth = 200, maxWidth should be 200', () => {
            sizeElement.maxWidth = 100;
            sizeElement.minWidth = 200;
            assert.strictEqual(sizeElement.maxWidth, 200);
        });
    });
    describe('maxWidth', () => {
        it('given default maxWidth, when maxWidth = -100, maxWidth should be 0', () => {
            sizeElement.maxWidth = -100;
            assert.strictEqual(sizeElement.maxWidth, 0);
        });
        it('given maxWidth is 100, when maxWidth = NaN, maxWidth should be Infinity', () => {
            sizeElement.maxWidth = 100;
            sizeElement.maxWidth = NaN;
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
    });
    describe('maxWidth side effects', () => {
        it('given minWidth is 200, when maxWidth = 100, minWidth should be 100', () => {
            sizeElement.minWidth = 200;
            sizeElement.maxWidth = 100;
            assert.strictEqual(sizeElement.minWidth, 100);
        });
    });
    describe('minHeight', () => {
        it('given default minHeight, when minHeight = -100, minHeight should be 0', () => {
            sizeElement.minHeight = -100;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('given minHeight is 100, when minHeight = NaN, minHeight should be 0', () => {
            sizeElement.minHeight = 100;
            sizeElement.minHeight = NaN;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
    });
    describe('minHeight side effects', () => {
        it('given maxHeight is 100, when minHeight = 200, maxHeight should be 200', () => {
            sizeElement.maxHeight = 100;
            sizeElement.minHeight = 200;
            assert.strictEqual(sizeElement.maxHeight, 200);
        });
    });
    describe('maxHeight', () => {
        it('given default maxHeight, when maxHeight = -100, maxHeight should be 0', () => {
            sizeElement.maxHeight = -100;
            assert.strictEqual(sizeElement.maxHeight, 0);
        });
        it('given maxHeight is 100, when maxHeight = NaN, maxHeight should be Infinity', () => {
            sizeElement.maxHeight = 100;
            sizeElement.maxHeight = NaN;
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
    });
    describe('maxHeight side effects', () => {
        it('given minHeight is 200, when maxHeight = 100, minHeight should be 100', () => {
            sizeElement.minHeight = 200;
            sizeElement.maxHeight = 100;
            assert.strictEqual(sizeElement.minHeight, 100);
        });
        it('given actualWidth is 100, when minWidth = 200, actualWidth should be 200', () => {
            sizeElement.actualWidth = 100;
            sizeElement.minWidth = 200;
            assert.strictEqual(sizeElement.actualWidth, 200);
        });
    });
});
