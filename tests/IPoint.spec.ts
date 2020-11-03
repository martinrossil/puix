import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IPoint, Point } from '../src';

describe('IPoint interface', () => {
    describe('default values', () => {
        const point: IPoint = new Point();
        it('default x should be 0', () => {
            assert.strictEqual(point.x, 0);
        });
        it('default y should be 0', () => {
            assert.strictEqual(point.y, 0);
        });
    });
    describe('contructing new IPoint with arguments NaN, NaN, x and y should be 0', () => {
        const point: IPoint = new Point(NaN, NaN);
        it('x and y should be 0', () => {
            assert.strictEqual(point.x, 0);
            assert.strictEqual(point.y, 0);
        });
    });
    describe('contructing new IPoint with arguments 1, 1, x and y should be 1', () => {
        const point: IPoint = new Point(1, 1);
        it('x and y should be 1', () => {
            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 1);
        });
    });
});
