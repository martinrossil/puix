import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import DisplayElementInterface from '../src/core/DisplayElementInterface';
import DisplayElement from '../src/core/DisplayElement';

const displayElement: DisplayElementInterface = new DisplayElement();

beforeEach(() => {
    displayElement.opacity = 1;
});

describe('DisplayElementInterface interface', () => {
    describe('opacity', () => {
        it('given opacity is 1, when opacity = -1, opacity should be 0', () => {
            displayElement.opacity = -1;
            assert.strictEqual(displayElement.opacity, 0);
        });
        it('given opacity is 0, when opacity = 2, opacity should be 1', () => {
            displayElement.opacity = 2;
            assert.strictEqual(displayElement.opacity, 1);
        });
        it('given opacity is 1, when opacity = Number.NaN, opacity should be 1', () => {
            displayElement.opacity = 1;
            displayElement.opacity = Number.NaN;
            assert.strictEqual(displayElement.opacity, 1);
        });
        it('given opacity is 1, when opacity = 0.5, opacity should be 0.5', () => {
            displayElement.opacity = 0.5;
            assert.strictEqual(displayElement.opacity, 0.5);
        });
    });
});
