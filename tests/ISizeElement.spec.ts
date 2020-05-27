import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import ISizeElement from '../src/interfaces/core/ISizeElement';
import SizeElement from '../src/core/SizeElement';

const sizeElement: ISizeElement = new SizeElement();
document.body.appendChild(sizeElement as unknown as Node);

beforeEach(() => {
    sizeElement.minWidth = 0;
    sizeElement.maxWidth = Infinity;
    sizeElement.actualWidth = 0;
    sizeElement.actualHeight = 0;
    sizeElement.minHeight = 0;
    sizeElement.maxHeight = Infinity;
    sizeElement.width = NaN;
    sizeElement.height = NaN;
});

describe('ISizeElement interface', () => {
    describe('default values', () => {
        it('default minWidth should be 0', () => {
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('default maxWidth should be Infinity', () => {
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
        it('default minHeight should be 0', () => {
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('default maxHeight should be Infinity', () => {
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
        it('default width should be 0', () => {
            assert.strictEqual(sizeElement.actualWidth, 0);
        });
        it('default height should be 0', () => {
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
        it('given default actualSize, setSize(100, 100), width and height should be 100', () => {
            sizeElement.setSize(100, 100);
            assert.strictEqual(sizeElement.width, 100);
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given actualSize is 100, setSize(-100, -100), width and height should be 0', () => {
            sizeElement.setSize(100, 100);
            sizeElement.setSize(-100, -100);
            assert.strictEqual(sizeElement.width, 0);
            assert.strictEqual(sizeElement.height, 0);
        });
        it('given actualSize is 100, setSize(NaN, NaN), width and height should be 0', () => {
            sizeElement.setSize(100, 100);
            sizeElement.setSize(NaN, NaN);
            assert.isNaN(sizeElement.width);
            assert.isNaN(sizeElement.height);
        });
    });
    describe('setSize() side effects', () => {
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
        it('given default minWidth, when minWidth = 100, width should be 100', () => {
            sizeElement.minWidth = 100;
            assert.strictEqual(sizeElement.actualWidth, 100);
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
    describe('maxHeight', () => {
        it('given default maxHeight, when maxHeight = -100, maxHeight should be 0', () => {
            sizeElement.maxHeight = -100;
            assert.strictEqual(sizeElement.maxHeight, 0);
        });
    });
    describe('maxHeight side effects', () => {
        it('given width is 100, when minWidth = 200, width should be 200', () => {
            sizeElement.actualWidth = 100;
            sizeElement.minWidth = 200;
            assert.strictEqual(sizeElement.actualWidth, 200);
        });
    });
});
