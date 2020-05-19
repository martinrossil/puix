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
    });
    beforeEach(() => {
        layoutElement.percentWidth = NaN;
        layoutElement.percentHeight = NaN;
    });
});
