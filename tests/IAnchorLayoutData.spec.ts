import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import IAnchorLayoutData from '../src/interfaces/IAnchorLayoutData';
import AnchorLayoutData from '../src/layouts/AnchorLayoutData';

const anchorLayoutData: IAnchorLayoutData = new AnchorLayoutData();

describe('IAnchorLayoutData interface', () => {
    describe('default values', () => {
        it('default percentWidth should be NaN', () => {
            assert.isNaN(anchorLayoutData.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            assert.isNaN(anchorLayoutData.percentHeight);
        });
        it('default left should be NaN', () => {
            assert.isNaN(anchorLayoutData.left);
        });
        it('default top should be NaN', () => {
            assert.isNaN(anchorLayoutData.top);
        });
        it('default right should be NaN', () => {
            assert.isNaN(anchorLayoutData.right);
        });
        it('default bottom should be NaN', () => {
            assert.isNaN(anchorLayoutData.bottom);
        });
        it('default horizontalCenter should be NaN', () => {
            assert.isNaN(anchorLayoutData.horizontalCenter);
        });
        it('default verticalCenter should be NaN', () => {
            assert.isNaN(anchorLayoutData.verticalCenter);
        });
    });
    beforeEach(() => {
        anchorLayoutData.percentWidth = NaN;
        anchorLayoutData.percentHeight = NaN;
        anchorLayoutData.left = NaN;
        anchorLayoutData.top = NaN;
        anchorLayoutData.right = NaN;
        anchorLayoutData.bottom = NaN;
        anchorLayoutData.horizontalCenter = NaN;
        anchorLayoutData.verticalCenter = NaN;
    });
    describe('horizontalCenter', () => {
        it('given horizontalCenter is NaN, when horizontalCenter = NaN, horizontalCenter should be NaN', () => {
            anchorLayoutData.horizontalCenter = NaN;
            assert.isNaN(anchorLayoutData.horizontalCenter);
        });
        it('given horizontalCenter is NaN, when horizontalCenter = 0, horizontalCenter should be 0', () => {
            anchorLayoutData.horizontalCenter = 0;
            assert.strictEqual(anchorLayoutData.horizontalCenter, 0);
        });
        it('given horizontalCenter is 0, when horizontalCenter = 0, horizontalCenter should be 0', () => {
            anchorLayoutData.horizontalCenter = 0;
            anchorLayoutData.horizontalCenter = 0;
            assert.strictEqual(anchorLayoutData.horizontalCenter, 0);
        });
        it('given horizontalCenter is 0, when horizontalCenter = NaN, horizontalCenter should be NaN', () => {
            anchorLayoutData.horizontalCenter = 0;
            anchorLayoutData.horizontalCenter = NaN;
            assert.isNaN(anchorLayoutData.horizontalCenter);
        });
    });
    describe('verticalCenter', () => {
        it('given verticalCenter is NaN, when verticalCenter = NaN, verticalCenter should be NaN', () => {
            anchorLayoutData.verticalCenter = NaN;
            assert.isNaN(anchorLayoutData.verticalCenter);
        });
        it('given verticalCenter is NaN, when verticalCenter = 0, verticalCenter should be 0', () => {
            anchorLayoutData.verticalCenter = 0;
            assert.strictEqual(anchorLayoutData.verticalCenter, 0);
        });
        it('given verticalCenter is 0, when verticalCenter = 0, verticalCenter should be 0', () => {
            anchorLayoutData.verticalCenter = 0;
            anchorLayoutData.verticalCenter = 0;
            assert.strictEqual(anchorLayoutData.verticalCenter, 0);
        });
        it('given verticalCenter is 0, when verticalCenter = NaN, verticalCenter should be NaN', () => {
            anchorLayoutData.verticalCenter = 0;
            anchorLayoutData.verticalCenter = NaN;
            assert.isNaN(anchorLayoutData.verticalCenter);
        });
    });
    describe('top', () => {
        it('given top is NaN, when top = NaN, top should be NaN', () => {
            anchorLayoutData.top = NaN;
            assert.isNaN(anchorLayoutData.top);
        });
        it('given top is NaN, when top = 0, top should be 0', () => {
            anchorLayoutData.top = 0;
            assert.strictEqual(anchorLayoutData.top, 0);
        });
        it('given top is 0, when top = 0, top should be 0', () => {
            anchorLayoutData.top = 0;
            anchorLayoutData.top = 0;
            assert.strictEqual(anchorLayoutData.top, 0);
        });
        it('given top is 0, when top = NaN, top should be NaN', () => {
            anchorLayoutData.top = 0;
            anchorLayoutData.top = NaN;
            assert.isNaN(anchorLayoutData.top);
        });
    });
    describe('right', () => {
        it('given right is NaN, when right = NaN, right should be NaN', () => {
            anchorLayoutData.right = NaN;
            assert.isNaN(anchorLayoutData.right);
        });
        it('given right is NaN, when right = 0, right should be 0', () => {
            anchorLayoutData.right = 0;
            assert.strictEqual(anchorLayoutData.right, 0);
        });
        it('given right is 0, when right = 0, right should be 0', () => {
            anchorLayoutData.right = 0;
            anchorLayoutData.right = 0;
            assert.strictEqual(anchorLayoutData.right, 0);
        });
        it('given right is 0, when right = NaN, right should be NaN', () => {
            anchorLayoutData.right = 0;
            anchorLayoutData.right = NaN;
            assert.isNaN(anchorLayoutData.right);
        });
    });
    describe('bottom', () => {
        it('given bottom is NaN, when bottom = NaN, bottom should be NaN', () => {
            anchorLayoutData.bottom = NaN;
            assert.isNaN(anchorLayoutData.bottom);
        });
        it('given bottom is NaN, when bottom = 0, bottom should be 0', () => {
            anchorLayoutData.bottom = 0;
            assert.strictEqual(anchorLayoutData.bottom, 0);
        });
        it('given bottom is 0, when bottom = 0, bottom should be 0', () => {
            anchorLayoutData.bottom = 0;
            anchorLayoutData.bottom = 0;
            assert.strictEqual(anchorLayoutData.bottom, 0);
        });
        it('given bottom is 0, when bottom = NaN, bottom should be NaN', () => {
            anchorLayoutData.bottom = 0;
            anchorLayoutData.bottom = NaN;
            assert.isNaN(anchorLayoutData.bottom);
        });
    });
    describe('left', () => {
        it('given left is NaN, when left = NaN, left should be NaN', () => {
            anchorLayoutData.left = NaN;
            assert.isNaN(anchorLayoutData.left);
        });
        it('given left is NaN, when left = 0, left should be 0', () => {
            anchorLayoutData.left = 0;
            assert.strictEqual(anchorLayoutData.left, 0);
        });
        it('given left is 0, when left = 0, left should be 0', () => {
            anchorLayoutData.left = 0;
            anchorLayoutData.left = 0;
            assert.strictEqual(anchorLayoutData.left, 0);
        });
        it('given left is 0, when left = NaN, left should be NaN', () => {
            anchorLayoutData.left = 0;
            anchorLayoutData.left = NaN;
            assert.isNaN(anchorLayoutData.left);
        });
    });
});
