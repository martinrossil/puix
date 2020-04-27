import { assert } from 'chai';
import { describe, it } from 'mocha';
import IPositionElement from '../src/interfaces/IPositionElement';
import PositionElement from '../src/core/PositionElement';

const positionElement: IPositionElement = new PositionElement();
document.body.appendChild(positionElement as unknown as Node);

describe('IPositionElement interface', () => {
    it('default x should be 0', () => {
        assert.strictEqual(positionElement.x, 0);
    });
    it('given x is 0, when x = 100, x should be 100', () => {
        positionElement.x = 100;
        assert.strictEqual(positionElement.x, 100);
    });
    it('given x is 100, when x = -100, x should be -100', () => {
        positionElement.x = -100;
        assert.strictEqual(positionElement.x, -100);
    });
    it('given x is -100, when x = NaN, x should be 0', () => {
        positionElement.x = NaN;
        assert.strictEqual(positionElement.x, 0);
    });
    it('default y should be 0', () => {
        assert.strictEqual(positionElement.y, 0);
    });
    it('given y is 0, when y = 100, y should be 100', () => {
        positionElement.y = 100;
        assert.strictEqual(positionElement.y, 100);
    });
    it('given y is 100, when y = -100, y should be -100', () => {
        positionElement.y = -100;
        assert.strictEqual(positionElement.y, -100);
    });
    it('given y is -100, when y = NaN, y should be 0', () => {
        positionElement.y = NaN;
        assert.strictEqual(positionElement.y, 0);
    });
    it('given x === 0 and y === 0, when move(100, 100), x and y should be 100', () => {
        positionElement.move(100, 100);
        assert.strictEqual(positionElement.x, 100);
        assert.strictEqual(positionElement.y, 100);
    });
    it('given x === 100 and y === 100, when move(-100, -100), x and y should be -100', () => {
        positionElement.move(-100, -100);
        assert.strictEqual(positionElement.x, -100);
        assert.strictEqual(positionElement.y, -100);
    });
    it('given x === -100 and y === -100, when move(NaN, NaN), x and y should be 0', () => {
        positionElement.move(NaN, NaN);
        assert.strictEqual(positionElement.x, 0);
        assert.strictEqual(positionElement.y, 0);
    });
});
