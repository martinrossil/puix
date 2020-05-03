import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import IAnchorLayoutData from '../src/interfaces/IAnchorLayoutData';
import AnchorLayoutData from '../src/layouts/AnchorLayoutData';

const anchorLayoutData: IAnchorLayoutData = new AnchorLayoutData();

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
});
