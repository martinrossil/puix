import { assert } from 'chai';
import { describe, it } from 'mocha';
import IDisplayElement from '../src/interfaces/IDisplayElement';
import DisplayElement from '../src/core/DisplayElement';

const displayElement: IDisplayElement = new DisplayElement();

describe('IDisplayElement interface', () => {
    it('default backgroundColor should be ""', () => {
        assert.strictEqual(displayElement.backgroundColor, '');
    });
    it('default opacity should be 1', () => {
        assert.strictEqual(displayElement.opacity, 1);
    });
    it('given backgroundColor is "", when backgroundColor = #CC0000, backgroundColor should be #CC0000', () => {
        displayElement.backgroundColor = '#CC0000';
        assert.strictEqual(displayElement.backgroundColor, '#CC0000');
    });
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
