import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { ILayoutElement, LayoutElement } from '../src';

const layoutElement: ILayoutElement = new LayoutElement();

describe('LayoutElementInterface interface', () => {
    beforeEach(() => {
        layoutElement.percentWidth = NaN;
        layoutElement.percentHeight = NaN;
    });
    describe('default values', () => {
        it('default percentWidth should be NaN', () => {
            assert.isNaN(layoutElement.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            assert.isNaN(layoutElement.percentHeight);
        });
    });
});
