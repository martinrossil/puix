import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IRippleElement, Point, RippleElement } from '../src';

describe('IIconElement', () => {
    describe('default values', () => {
        it('default rippleColor should be ""', () => {
            const rippleElement: IRippleElement = new RippleElement();
            assert.strictEqual(rippleElement.rippleColor, '');
        });
    });
    describe('rippleColor', () => {
        it('given rippleColor is "", when rippleColor = "", rippleColor should be ""', () => {
            const rippleElement: IRippleElement = new RippleElement();
            rippleElement.rippleColor = '';
            assert.strictEqual(rippleElement.rippleColor, '');
        });
        it('given rippleColor is "", when rippleColor = "red", rippleColor should be "red"', () => {
            const rippleElement: IRippleElement = new RippleElement();
            rippleElement.rippleColor = 'red';
            assert.strictEqual(rippleElement.rippleColor, 'red');
        });
    });
    describe('added to DOM', () => {
        it('given IRippleElement has been added to DOM, updateDisplay() should be called', () => {
            const rippleElement: IRippleElement = new RippleElement();
            document.body.appendChild(rippleElement as unknown as Node);
            assert.isTrue(rippleElement.connected);
        });
    });
    describe('show(point: IPoint)', () => {
        it('given show() is called, code should be covered', () => {
            const rippleElement: IRippleElement = new RippleElement();
            rippleElement.show(new Point(100, 100));
        });
    });
    describe('hide()', () => {
        it('given hide() is called, code should be covered', () => {
            const rippleElement: IRippleElement = new RippleElement();
            rippleElement.hide();
        });
    });
});
