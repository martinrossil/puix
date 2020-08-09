import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import LayoutElementInterface from '../src/core/LayoutElementInterface';
import LayoutElement from '../src/core/LayoutElement';

const layoutElement: LayoutElementInterface = new LayoutElement();

describe('LayoutElementInterface interface', () => {
    describe('default values', () => {
        it('default percentWidth should be NaN', () => {
            assert.isNaN(layoutElement.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            assert.isNaN(layoutElement.percentHeight);
        });
    });
    beforeEach(() => {
        layoutElement.percentWidth = NaN;
        layoutElement.percentHeight = NaN;
    });
});
