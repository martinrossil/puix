import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IElementCSSInlineStyle, ITween, SizeElement, StyleTween } from '../src';

describe('StyleTween', () => {
    describe('to()', () => {
        it('calling to() should be covered', () => {
            const element: IElementCSSInlineStyle = new SizeElement();
            const styleTween: ITween = new StyleTween(element, 'width', 300);
            styleTween.to(100, 300);
            styleTween.to(100, 300);
            styleTween.to(100, NaN);
            assert.strictEqual(element.style.width, '');
        });
    });
    describe('protected animationFrame', () => {
        it('calling async, animationFrame should be covered', async () => {
            const element: IElementCSSInlineStyle = new SizeElement();
            const styleTween: ITween = new StyleTween(element, 'width', 300);
            styleTween.to(100, 300);
            await new Promise(resolve => setTimeout(resolve, 1000));
            assert.instanceOf(styleTween, StyleTween);
        });
    });
});
