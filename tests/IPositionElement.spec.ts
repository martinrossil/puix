import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { IPositionElement, PositionElement } from '../src';

const positionElement: IPositionElement = new PositionElement();
document.body.appendChild(positionElement as unknown as Node);

beforeEach(() => {
    positionElement.setPosition(NaN, NaN);
});

describe('PositionElementInterface interface', () => {
    describe('default values', () => {
        it('default x should be NaN', () => {
            assert.isNaN(positionElement.x);
        });
        it('default y should be NaN', () => {
            assert.isNaN(positionElement.y);
        });
    });
    describe('setPosition()', () => {
        it('given x === 0 and y === 0, when setPosition(100, 100), x and y should be 100', () => {
            positionElement.setPosition(100, 100);
            assert.strictEqual(positionElement.x, 100);
            assert.strictEqual(positionElement.y, 100);
        });
        it('given x === 100 and y === 100, when setPosition(-100, -100), x and y should be -100', () => {
            positionElement.setPosition(100, 100);
            positionElement.setPosition(-100, -100);
            assert.strictEqual(positionElement.x, -100);
            assert.strictEqual(positionElement.y, -100);
        });
        it('given x === -100 and y === -100, when setPosition(NaN, NaN), x and y should be NaN', () => {
            positionElement.setPosition(-100, -100);
            positionElement.setPosition(NaN, NaN);
            assert.isNaN(positionElement.x);
            assert.isNaN(positionElement.y);
        });
    });
    describe('x', () => {
        it('given x is 0, when x = 100, x should be 100', () => {
            positionElement.x = 100;
            assert.strictEqual(positionElement.x, 100);
        });
        it('given x is 0, when x = -100, x should be -100', () => {
            positionElement.x = -100;
            assert.strictEqual(positionElement.x, -100);
        });
        it('given x is -100, when x = NaN, x should be NaN', () => {
            positionElement.x = -100;
            positionElement.x = NaN;
            assert.isNaN(positionElement.x);
        });
    });
    describe('y', () => {
        it('given y is 0, when y = 100, y should be 100', () => {
            positionElement.y = 100;
            assert.strictEqual(positionElement.y, 100);
        });
        it('given y is 100, when y = -100, y should be -100', () => {
            positionElement.y = 100;
            positionElement.y = -100;
            assert.strictEqual(positionElement.y, -100);
        });
        it('given y is 0, when y = NaN, y should be NaN', () => {
            positionElement.y = NaN;
            assert.isNaN(positionElement.y);
        });
    });
});
