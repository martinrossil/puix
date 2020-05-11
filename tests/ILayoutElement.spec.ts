import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import ILayoutElement from '../src/interfaces/ILayoutElement';
import LayoutElement from '../src/core/LayoutElement';

const layoutElement: ILayoutElement = new LayoutElement();

describe('ILayoutElement interface', () => {
    describe('default values', () => {
        it('default percentWidth should be NaN', () => {
            assert.isNaN(layoutElement.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            assert.isNaN(layoutElement.percentHeight);
        });
        it('default horizontalCenter should be NaN', () => {
            assert.isNaN(layoutElement.horizontalCenter);
        });
        it('default verticalCenter should be NaN', () => {
            assert.isNaN(layoutElement.verticalCenter);
        });
    });
    beforeEach(() => {
        layoutElement.percentWidth = NaN;
        layoutElement.percentHeight = NaN;
        layoutElement.horizontalCenter = NaN;
        layoutElement.verticalCenter = NaN;
    });
    describe('horizontalCenter', () => {
        it('given horizontalCenter is NaN, when horizontalCenter = NaN, horizontalCenter should be NaN', () => {
            layoutElement.horizontalCenter = NaN;
            assert.isNaN(layoutElement.horizontalCenter);
        });
        it('given horizontalCenter is NaN, when horizontalCenter = 0, horizontalCenter should be 0', () => {
            layoutElement.horizontalCenter = 0;
            assert.strictEqual(layoutElement.horizontalCenter, 0);
        });
        it('given horizontalCenter is 0, when horizontalCenter = 0, horizontalCenter should be 0', () => {
            layoutElement.horizontalCenter = 0;
            layoutElement.horizontalCenter = 0;
            assert.strictEqual(layoutElement.horizontalCenter, 0);
        });
        it('given horizontalCenter is 0, when horizontalCenter = NaN, horizontalCenter should be NaN', () => {
            layoutElement.horizontalCenter = 0;
            layoutElement.horizontalCenter = NaN;
            assert.isNaN(layoutElement.horizontalCenter);
        });
    });
    describe('verticalCenter', () => {
        it('given verticalCenter is NaN, when verticalCenter = NaN, verticalCenter should be NaN', () => {
            layoutElement.verticalCenter = NaN;
            assert.isNaN(layoutElement.verticalCenter);
        });
        it('given verticalCenter is NaN, when verticalCenter = 0, verticalCenter should be 0', () => {
            layoutElement.verticalCenter = 0;
            assert.strictEqual(layoutElement.verticalCenter, 0);
        });
        it('given verticalCenter is 0, when verticalCenter = 0, verticalCenter should be 0', () => {
            layoutElement.verticalCenter = 0;
            layoutElement.verticalCenter = 0;
            assert.strictEqual(layoutElement.verticalCenter, 0);
        });
        it('given verticalCenter is 0, when verticalCenter = NaN, verticalCenter should be NaN', () => {
            layoutElement.verticalCenter = 0;
            layoutElement.verticalCenter = NaN;
            assert.isNaN(layoutElement.verticalCenter);
        });
    });
});
