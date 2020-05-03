import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import ILayoutData from '../src/interfaces/ILayoutData';
import LayoutData from '../src/layouts/LayoutData';
import IDisplayElement from '../src/interfaces/IDisplayElement';
import DisplayElement from '../src/core/DisplayElement';

const host: IDisplayElement = new DisplayElement();
const layoutData: ILayoutData = new LayoutData();
host.layoutData = layoutData;
document.body.appendChild(host as unknown as Node);

beforeEach(() => {
    layoutData.percentWidth = NaN;
    layoutData.percentHeight = NaN;
});

describe('ILayoutData interface', () => {
    describe('default values', () => {
        it('default percentWidth should be NaN', () => {
            assert.isNaN(layoutData.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            assert.isNaN(layoutData.percentHeight);
        });
    });
    describe('percentWidth', () => {
        it('given percentWidth is NaN, when percentWidth = NaN, percentWidth should be NaN', () => {
            layoutData.percentWidth = NaN;
            assert.isNaN(layoutData.percentWidth);
        });
        it('given percentWidth is NaN, when percentWidth = 100, percentWidth should be 100', () => {
            layoutData.percentWidth = 100;
            assert.strictEqual(layoutData.percentWidth, 100);
        });
        it('given percentWidth is NaN, when percentWidth = -100, percentWidth should be 0', () => {
            layoutData.percentWidth = -100;
            assert.strictEqual(layoutData.percentWidth, 0);
        });
        it('given percentWidth is 100, when percentWidth = NaN, percentWidth should be NaN', () => {
            layoutData.percentWidth = 100;
            layoutData.percentWidth = NaN;
            assert.isNaN(layoutData.percentWidth);
        });
    });
    describe('percentHeight', () => {
        it('given percentHeight is NaN, when percentHeight = NaN, percentHeight should be NaN', () => {
            layoutData.percentHeight = NaN;
            assert.isNaN(layoutData.percentHeight);
        });
        it('given percentHeight is NaN, when percentHeight = 100, percentHeight should be 100', () => {
            layoutData.percentHeight = 100;
            assert.strictEqual(layoutData.percentHeight, 100);
        });
        it('given percentHeight is NaN, when percentHeight = -100, percentHeight should be 0', () => {
            layoutData.percentHeight = -100;
            assert.strictEqual(layoutData.percentHeight, 0);
        });
        it('given percentHeight is 100, when percentHeight = NaN, percentHeight should be NaN', () => {
            layoutData.percentWidth = 100;
            layoutData.percentWidth = NaN;
            assert.isNaN(layoutData.percentWidth);
        });
    });
});
