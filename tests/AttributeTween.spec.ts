import { assert } from 'chai';
import { describe, it } from 'mocha';
import { AttributeTween, ITween, SizeElement } from '../src';

describe('StyleTween', () => {
    describe('to()', () => {
        it('calling to() should be covered', () => {
            const element: Element = new SizeElement();
            const attributeTween: ITween = new AttributeTween(element, 'radius', 300);
            attributeTween.to(100, 300);
            attributeTween.to(100, 300);
            attributeTween.to(100, NaN);
            assert.isNull(element.getAttribute('radius'));
        });
    });
    describe('protected animationFrame', () => {
        it('calling async, animationFrame should be covered', async () => {
            const element: Element = new SizeElement();
            const attributeTween: ITween = new AttributeTween(element, 'radius', 300);
            attributeTween.to(100, 300);
            await new Promise(resolve => setTimeout(resolve, 1000));
            assert.strictEqual(element.getAttribute('radius'), '100');
        });
    });
});
