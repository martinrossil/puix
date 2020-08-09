import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import LayoutInterface from '../src/interfaces/layouts/LayoutInterface';
import DisplayContainerInterface from '../src/interfaces/containers/DisplayContainerInterface';
import DisplayContainer from '../src/containers/DisplayContainer';
import { Layout } from '../src';

const displayContainer: DisplayContainerInterface = new DisplayContainer();
const baseLayout: LayoutInterface = new Layout();
displayContainer.layout = baseLayout;
document.body.appendChild(displayContainer as unknown as Node);

describe('LayoutInterface interface', () => {
    describe('default values', () => {
        it('default padding should be 0', () => {
            assert.strictEqual(baseLayout.padding, 0);
        });
        it('default paddingTop should be 0', () => {
            assert.strictEqual(baseLayout.paddingTop, 0);
        });
        it('default paddingRight should be 0', () => {
            assert.strictEqual(baseLayout.paddingRight, 0);
        });
        it('default paddingBottom should be 0', () => {
            assert.strictEqual(baseLayout.paddingBottom, 0);
        });
        it('default paddingLeft should be 0', () => {
            assert.strictEqual(baseLayout.paddingLeft, 0);
        });
    });
    beforeEach(() => {
        baseLayout.padding = 0;
        baseLayout.paddingTop = 0;
        baseLayout.paddingRight = 0;
        baseLayout.paddingBottom = 0;
        baseLayout.paddingLeft = 0;
    });

    describe('padding', () => {
        it('given padding is 0, when padding = 10, padding / top / right / bottom / left should be 10', () => {
            baseLayout.padding = 10;
            assert.strictEqual(baseLayout.padding, 10);
            assert.strictEqual(baseLayout.paddingTop, 10);
            assert.strictEqual(baseLayout.paddingRight, 10);
            assert.strictEqual(baseLayout.paddingBottom, 10);
            assert.strictEqual(baseLayout.paddingLeft, 10);
        });
        it('given padding is 10, when padding = -10, padding / top / right / bottom / left should be 0', () => {
            baseLayout.padding = 10;
            baseLayout.padding = -10;
            assert.strictEqual(baseLayout.padding, 0);
            assert.strictEqual(baseLayout.paddingTop, 0);
            assert.strictEqual(baseLayout.paddingRight, 0);
            assert.strictEqual(baseLayout.paddingBottom, 0);
            assert.strictEqual(baseLayout.paddingLeft, 0);
        });
        it('given padding / top / right / bottom / left is 10, when padding = NaN, padding / top / right / bottom / left should be 0', () => {
            baseLayout.padding = 10;
            baseLayout.padding = NaN;
            assert.strictEqual(baseLayout.padding, 0);
            assert.strictEqual(baseLayout.paddingTop, 0);
            assert.strictEqual(baseLayout.paddingRight, 0);
            assert.strictEqual(baseLayout.paddingBottom, 0);
            assert.strictEqual(baseLayout.paddingLeft, 0);
        });
    });
    describe('paddingTop', () => {
        it('given paddingTop is 0, when paddingTop = NaN, paddingTop should be 0', () => {
            baseLayout.paddingTop = NaN;
            assert.strictEqual(baseLayout.paddingTop, 0);
        });
        it('given paddingTop is 0, when paddingTop = 10, paddingTop should be 10', () => {
            baseLayout.paddingTop = 10;
            assert.strictEqual(baseLayout.paddingTop, 10);
        });
        it('given paddingTop is 0, when paddingTop = -10, paddingTop should be 0', () => {
            baseLayout.paddingTop = -10;
            assert.strictEqual(baseLayout.paddingTop, 0);
        });
        it('given paddingTop is 10, when paddingTop = NaN, paddingTop should be 0', () => {
            baseLayout.paddingTop = 10;
            baseLayout.paddingTop = NaN;
            assert.strictEqual(baseLayout.paddingTop, 0);
        });
    });
    describe('paddingRight', () => {
        it('given paddingRight is 0, when paddingRight = NaN, paddingRight should be 0', () => {
            baseLayout.paddingRight = NaN;
            assert.strictEqual(baseLayout.paddingRight, 0);
        });
        it('given paddingRight is 0, when paddingRight = 10, paddingRight should be 10', () => {
            baseLayout.paddingRight = 10;
            assert.strictEqual(baseLayout.paddingRight, 10);
        });
        it('given paddingRight is 0, when paddingRight = -10, paddingRight should be 0', () => {
            baseLayout.paddingRight = -10;
            assert.strictEqual(baseLayout.paddingRight, 0);
        });
        it('given paddingRight is 10, when paddingRight = NaN, paddingRight should be 0', () => {
            baseLayout.paddingRight = 10;
            baseLayout.paddingRight = NaN;
            assert.strictEqual(baseLayout.paddingRight, 0);
        });
    });
    describe('paddingBottom', () => {
        it('given paddingBottom is 0, when paddingBottom = NaN, paddingBottom should be 0', () => {
            baseLayout.paddingBottom = NaN;
            assert.strictEqual(baseLayout.paddingBottom, 0);
        });
        it('given paddingBottom is 0, when paddingBottom = 10, paddingBottom should be 10', () => {
            baseLayout.paddingBottom = 10;
            assert.strictEqual(baseLayout.paddingBottom, 10);
        });
        it('given paddingBottom is 0, when paddingBottom = -10, paddingBottom should be 0', () => {
            baseLayout.paddingBottom = -10;
            assert.strictEqual(baseLayout.paddingBottom, 0);
        });
        it('given paddingBottom is 10, when paddingBottom = NaN, paddingBottom should be 0', () => {
            baseLayout.paddingBottom = 10;
            baseLayout.paddingBottom = NaN;
            assert.strictEqual(baseLayout.paddingBottom, 0);
        });
    });
    describe('paddingLeft', () => {
        it('given paddingLeft is 0, when paddingLeft = NaN, paddingLeft should be 0', () => {
            baseLayout.paddingLeft = NaN;
            assert.strictEqual(baseLayout.paddingLeft, 0);
        });
        it('given paddingLeft is 0, when paddingLeft = 10, paddingLeft should be 10', () => {
            baseLayout.paddingLeft = 10;
            assert.strictEqual(baseLayout.paddingLeft, 10);
        });
        it('given paddingLeft is 0, when paddingLeft = -10, paddingLeft should be 0', () => {
            baseLayout.paddingLeft = -10;
            assert.strictEqual(baseLayout.paddingLeft, 0);
        });
        it('given paddingLeft is 10, when paddingLeft = NaN, paddingLeft should be 0', () => {
            baseLayout.paddingLeft = 10;
            baseLayout.paddingLeft = NaN;
            assert.strictEqual(baseLayout.paddingLeft, 0);
        });
    });

    /* describe('horizontalGap', () => {
        it('given horizontalGap is 0, when horizontalGap = NaN, horizontalGap should be 0', () => {
            baseLayout.horizontalGap = NaN;
            assert.strictEqual(baseLayout.horizontalGap, 0);
        });
        it('given horizontalGap is 0, when horizontalGap = 10, horizontalGap should be 10', () => {
            baseLayout.horizontalGap = 10;
            assert.strictEqual(baseLayout.horizontalGap, 10);
        });
        it('given horizontalGap is 0, when horizontalGap = -10, horizontalGap should be 0', () => {
            baseLayout.horizontalGap = -10;
            assert.strictEqual(baseLayout.horizontalGap, 0);
        });
        it('given horizontalGap is 10, when horizontalGap = NaN, horizontalGap should be 0', () => {
            baseLayout.horizontalGap = 10;
            baseLayout.horizontalGap = NaN;
            assert.strictEqual(baseLayout.horizontalGap, 0);
        });
    });
    describe('verticalGap', () => {
        it('given verticalGap is 0, when verticalGap = NaN, verticalGap should be 0', () => {
            baseLayout.verticalGap = NaN;
            assert.strictEqual(baseLayout.verticalGap, 0);
        });
        it('given verticalGap is 0, when verticalGap = 10, verticalGap should be 10', () => {
            baseLayout.verticalGap = 10;
            assert.strictEqual(baseLayout.verticalGap, 10);
        });
        it('given verticalGap is 0, when verticalGap = -10, verticalGap should be 0', () => {
            baseLayout.verticalGap = -10;
            assert.strictEqual(baseLayout.verticalGap, 0);
        });
        it('given verticalGap is 10, when verticalGap = NaN, verticalGap should be 0', () => {
            baseLayout.verticalGap = 10;
            baseLayout.verticalGap = NaN;
            assert.strictEqual(baseLayout.verticalGap, 0);
        });
    }); */
});
