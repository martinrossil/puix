import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement } from '../src';
import SizeElement from '../src/core/SizeElement';

describe('ISizeElement interface', () => {
    describe('default values', () => {
        it('default minWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('default maxWidth should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
        it('default minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('default maxHeight should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
        it('default width should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.actualWidth, 0);
        });
        it('default height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
    });
    describe('default physical size should 0, 0', () => {
        const sizeElement: ISizeElement = new SizeElement();
        document.body.appendChild(sizeElement as unknown as Node);
        const sizeElementHTMLElement: HTMLElement = sizeElement as unknown as HTMLElement;
        const rect: DOMRect = sizeElementHTMLElement.getBoundingClientRect();
        assert.strictEqual(rect.width, 0);
        assert.strictEqual(rect.height, 0);
    });
    describe('setSize()', () => {
        it('given default size, setSize(NaN, NaN), width and height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(NaN, NaN);
            assert.isNaN(sizeElement.width);
            assert.isNaN(sizeElement.height);
        });
        it('given size is 100, setSize(100, 100), width and height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            sizeElement.setSize(100, 100);
            assert.strictEqual(sizeElement.width, 100);
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given default size, setSize(100, NaN), width should be 100 and height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, NaN);
            assert.strictEqual(sizeElement.width, 100);
            assert.isNaN(sizeElement.height);
        });
        it('given default size, setSize(NaN, NaN), width should be NaN and height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(NaN, 100);
            assert.isNaN(sizeElement.width);
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given default size, setSize(100, 100), width and height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            assert.strictEqual(sizeElement.width, 100);
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given size is 100, setSize(-100, -100), width and height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            sizeElement.setSize(-100, -100);
            assert.strictEqual(sizeElement.width, 0);
            assert.strictEqual(sizeElement.height, 0);
        });
        it('given size is 100, setSize(NaN, NaN), width and height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            sizeElement.setSize(NaN, NaN);
            assert.isNaN(sizeElement.width);
            assert.isNaN(sizeElement.height);
        });
    });
    describe('actualSize()', () => {
        it('given default actualSize, setSize(100, 100), actualWidth and actualHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            assert.strictEqual(sizeElement.actualWidth, 100);
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
        it('given actualSize is 100, setSize(-100, -100), actualWidth and actualHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            sizeElement.setSize(-100, -100);
            assert.strictEqual(sizeElement.actualWidth, 0);
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
        it('given actualSize is 100, setSize(NaN, NaN), actualWidth and actualHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            sizeElement.setSize(NaN, NaN);
            assert.strictEqual(sizeElement.actualWidth, 0);
            assert.strictEqual(sizeElement.actualHeight, 0);
        });
        it('given size is 100, setActualSize(200, 200), actualWidth and actualHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(100, 100);
            sizeElement.setActualSize(200, 200);
            assert.strictEqual(sizeElement.actualWidth, 100);
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
        it('given size is NaN, setActualSize(NaN, NaN), actualWidth and actualHeight should be minWidth and minHeight', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setActualSize(NaN, NaN);
            assert.strictEqual(sizeElement.actualWidth, sizeElement.minWidth);
            assert.strictEqual(sizeElement.actualHeight, sizeElement.minHeight);
        });
        it('given size is NaN, setActualSize(100, NaN), actualWidth should be 100 and actualHeight should be minHeight', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setActualSize(100, NaN);
            assert.strictEqual(sizeElement.actualWidth, 100);
            assert.strictEqual(sizeElement.actualHeight, sizeElement.minHeight);
        });
        it('given size is NaN, setActualSize(NaN, 100), actualWidth should be minWidth and actualHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setActualSize(NaN, 100);
            assert.strictEqual(sizeElement.actualWidth, sizeElement.minWidth);
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
        it('given size is NaN, setActualSize(100, 100), actualWidth and actualHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setActualSize(100, 100);
            assert.strictEqual(sizeElement.actualWidth, 100);
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
    });
    describe('minWidth', () => {
        it('given default minWidth, when minWidth = -100, minWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minWidth = -100;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('given minWidth is 100, when minWidth = NaN, minWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minWidth = 100;
            sizeElement.minWidth = NaN;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('given minWidth is 100, when minWidth = 100, minWidth should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minWidth = 100;
            sizeElement.minWidth = 100;
            assert.strictEqual(sizeElement.minWidth, 100);
        });
        it('given width is 100, when minWidth = 200, width should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 100;
            sizeElement.minWidth = 200;
            assert.strictEqual(sizeElement.width, 200);
        });
        it('given width is 100, when minWidth = 50, width should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 100;
            sizeElement.minWidth = 50;
            assert.strictEqual(sizeElement.width, 100);
        });
    });
    describe('minWidth', () => {
        it('given default minHeight, when minHeight = NaN, minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = NaN;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('given default minHeight, when minHeight = 0, minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = 0;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('given default minHeight, when minHeight = -100, minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = -100;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('given default minHeight, when minHeight = 100, minHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = 100;
            assert.strictEqual(sizeElement.minHeight, 100);
        });
        it('given height is 100, when minHeight = 200, height should be 200', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 100;
            sizeElement.minHeight = 200;
            assert.strictEqual(sizeElement.height, 200);
        });
        it('given height is 100, when minHeight = 50, height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 100;
            sizeElement.minHeight = 50;
            assert.strictEqual(sizeElement.height, 100);
        });
    });
    describe('maxHeight', () => {
        it('given default maxHeight, when maxHeight = -100, maxHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = -100;
            assert.strictEqual(sizeElement.maxHeight, 0);
        });
        it('given maxHeight is 100, when maxHeight = NaN, maxWidth should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = 100;
            sizeElement.maxHeight = NaN;
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
        it('given maxHeight is 100, when height = 200, height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = 100;
            sizeElement.height = 200;
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given maxHeight is 100, when maxHeight = 100, maxHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = 100;
            sizeElement.maxHeight = 100;
            assert.strictEqual(sizeElement.maxHeight, 100);
        });
        it('given height is 200, when maxHeight = 100, height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 200;
            sizeElement.maxHeight = 100;
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given height is 100, when maxHeight = 200, height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 100;
            sizeElement.maxHeight = 200;
            assert.strictEqual(sizeElement.height, 100);
        });
    });
    describe('actualWidth', () => {
        it('given width is NaN, when actualWidth = NaN, actualWidth should be minWidth', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.actualWidth = NaN;
            assert.strictEqual(sizeElement.actualWidth, sizeElement.minWidth);
        });
        it('given width is NaN, when actualWidth = 100, actualWidth should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.actualWidth = 100;
            assert.strictEqual(sizeElement.actualWidth, 100);
        });
    });
    describe('actualHeight', () => {
        it('given height is NaN, when actualHeight = NaN, actualHeight should be minHeight', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.actualHeight = NaN;
            assert.strictEqual(sizeElement.actualHeight, sizeElement.minHeight);
        });
        it('given height is NaN, when actualHeight = 100, actualHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.actualHeight = 100;
            assert.strictEqual(sizeElement.actualHeight, 100);
        });
    });
    describe('width', () => {
        it('given width is NaN, when width = NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
        it('given width is 100, when width = 100, width should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 100;
            sizeElement.width = 100;
            assert.strictEqual(sizeElement.width, 100);
        });
        it('given width is 100, when width = NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 100;
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
    });

    describe('height', () => {
        it('given height is NaN, when height = NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
        it('given height is 100, when height = 100, height should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 100;
            sizeElement.height = 100;
            assert.strictEqual(sizeElement.height, 100);
        });
        it('given height is 100, when height = NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 100;
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
    });

    describe('maxWidth', () => {
        it('given default maxWidth, when maxWidth = -100, maxWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = -100;
            assert.strictEqual(sizeElement.maxWidth, 0);
        });
        it('given maxWidth is 100, when maxWidth = NaN, maxWidth should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = 100;
            sizeElement.maxWidth = NaN;
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
        it('given maxWidth is 100, when width = 200, width should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = 100;
            sizeElement.width = 200;
            assert.strictEqual(sizeElement.width, 100);
        });
        it('given maxWidth is 100, when maxWidth = 100, maxWidth should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = 100;
            sizeElement.maxWidth = 100;
            assert.strictEqual(sizeElement.maxWidth, 100);
        });
        it('given width is 200, when maxWidth = 100, width should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 200;
            sizeElement.maxWidth = 100;
            assert.strictEqual(sizeElement.width, 100);
        });
        it('given width is 100, when maxWidth = 200, width should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 100;
            sizeElement.maxWidth = 200;
            assert.strictEqual(sizeElement.width, 100);
        });
    });
});
