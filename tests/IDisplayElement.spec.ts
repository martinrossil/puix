import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Cursor, DisplayElement, IDisplayElement, Overflow } from '../src';

describe('IDisplayElement interface', () => {
    describe('default values', () => {
        it('default opacity should be 1.0', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.opacity, 1.0);
        });
        it('default enabled should be true', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.isTrue(displayElement.enabled);
        });
        it('default overflow should be Overflow.VISIBLE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.overflow, Overflow.VISIBLE);
        });
        it('default overflowX should be Overflow.VISIBLE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.overflowX, Overflow.VISIBLE);
        });
        it('default overflowY should be Overflow.VISIBLE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.overflowY, Overflow.VISIBLE);
        });
        it('default cornerRadius should be 0', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.cornerRadius, 0);
        });
        it('default cursor should be Cursor.NONE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.cursor, Cursor.NONE);
        });
        it('default backgroundColor should be ""', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            assert.strictEqual(displayElement.backgroundColor, '');
        });
    });
    describe('opacity', () => {
        it('given opacity is 1, when opacity = -1, opacity should be 0', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.opacity = -1;
            assert.strictEqual(displayElement.opacity, 0);
        });
        it('given opacity is 0, when opacity = 2, opacity should be 1', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.opacity = 2;
            assert.strictEqual(displayElement.opacity, 1);
        });
        it('given opacity is 1, when opacity = Number.NaN, opacity should be 1', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.opacity = 1;
            displayElement.opacity = Number.NaN;
            assert.strictEqual(displayElement.opacity, 1);
        });
        it('given opacity is 1, when opacity = 0.5, opacity should be 0.5', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.opacity = 0.5;
            assert.strictEqual(displayElement.opacity, 0.5);
        });
    });
    describe('enabled', () => {
        it('given enabled is true, when enabled = false, enabled should be false', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.enabled = false;
            assert.isFalse(displayElement.enabled);
        });
        it('given enabled is true, when enabled = true, enabled should be true', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.enabled = true;
            assert.isTrue(displayElement.enabled);
        });
        it('given enabled is false, when enabled = true, enabled should be true', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.enabled = false;
            displayElement.enabled = true;
            assert.isTrue(displayElement.enabled);
        });
    });
    describe('overflow', () => {
        it('given overflow is Overflow.VISIBLE, when overflow = Overflow.VISIBLE, overflow should be Overflow.VISIBLE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflow = Overflow.VISIBLE;
            assert.strictEqual(displayElement.overflow, Overflow.VISIBLE);
        });
        it('given overflow is Overflow.VISIBLE, when overflow = Overflow.HIDDEN, overflow should be overflow.HIDDEN', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflow = Overflow.HIDDEN;
            assert.strictEqual(displayElement.overflow, Overflow.HIDDEN);
        });
        it('given overflow is Overflow.VISIBLE, when overflow = Overflow.SCROLL, overflow should be overflow.SCROLL', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflow = Overflow.SCROLL;
            assert.strictEqual(displayElement.overflow, Overflow.SCROLL);
        });
    });
    describe('overflowX', () => {
        it('given overflowX is Overflow.VISIBLE, when overflowX = Overflow.VISIBLE, overflowX should be Overflow.VISIBLE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflowX = Overflow.VISIBLE;
            assert.strictEqual(displayElement.overflowX, Overflow.VISIBLE);
        });
        it('given overflowX is Overflow.VISIBLE, when overflowX = Overflow.HIDDEN, overflowX should be overflow.HIDDEN', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflowX = Overflow.HIDDEN;
            assert.strictEqual(displayElement.overflowX, Overflow.HIDDEN);
        });
        it('given overflowX is Overflow.VISIBLE, when overflowX = Overflow.SCROLL, overflowX should be overflow.SCROLL', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflowX = Overflow.SCROLL;
            assert.strictEqual(displayElement.overflowX, Overflow.SCROLL);
        });
    });
    describe('overflowY', () => {
        it('given overflowY is Overflow.VISIBLE, when overflowY = Overflow.VISIBLE, overflowY should be Overflow.VISIBLE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflowY = Overflow.VISIBLE;
            assert.strictEqual(displayElement.overflowY, Overflow.VISIBLE);
        });
        it('given overflowY is Overflow.VISIBLE, when overflowY = Overflow.HIDDEN, overflowY should be overflow.HIDDEN', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflowY = Overflow.HIDDEN;
            assert.strictEqual(displayElement.overflowY, Overflow.HIDDEN);
        });
        it('given overflowY is Overflow.VISIBLE, when overflowY = Overflow.SCROLL, overflowY should be overflow.SCROLL', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.overflowY = Overflow.SCROLL;
            assert.strictEqual(displayElement.overflowY, Overflow.SCROLL);
        });
    });
    describe('cornerRadius', () => {
        it('given cornerRadius is 0, when cornerRadius = -1, cornerRadius should be 0', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cornerRadius = -1;
            assert.strictEqual(displayElement.cornerRadius, 0);
        });
        it('given cornerRadius is 0, when cornerRadius = 0, cornerRadius should be 0', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cornerRadius = 0;
            assert.strictEqual(displayElement.cornerRadius, 0);
        });
        it('given cornerRadius is 0, when cornerRadius = NaN, cornerRadius should be 0', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cornerRadius = NaN;
            assert.strictEqual(displayElement.cornerRadius, 0);
        });
        it('given cornerRadius is 0, when cornerRadius = 8, cornerRadius should be 8', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cornerRadius = 8;
            assert.strictEqual(displayElement.cornerRadius, 8);
        });
    });
    describe('cursor', () => {
        it('given cursor is Cursor.NONE, when cursor = Cursor.POINTER, cursor should be Cursor.POINTER', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cursor = Cursor.POINTER;
            assert.strictEqual(displayElement.cursor, Cursor.POINTER);
        });
        it('given cursor is Cursor.POINTER, when cursor = Cursor.NONE, cursor should be Cursor.NONE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cursor = Cursor.POINTER;
            displayElement.cursor = Cursor.NONE;
            assert.strictEqual(displayElement.cursor, Cursor.NONE);
        });
        it('given cursor is Cursor.NONE, when cursor = Cursor.NONE, cursor should be Cursor.NONE', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.cursor = Cursor.NONE;
            assert.strictEqual(displayElement.cursor, Cursor.NONE);
        });
    });
    /* describe('shadow', () => {
        it('given shadow is "", when shadow = "", shadow should be ""', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.shadow = '';
            assert.strictEqual(displayElement.shadow, '');
        });
        it('given shadow is "", when shadow = 0 25px 50px -12px rgba(0, 0, 0, 0.25), shadow should be 0 25px 50px -12px rgba(0, 0, 0, 0.25)', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.shadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            assert.strictEqual(displayElement.shadow, '0 25px 50px -12px rgba(0, 0, 0, 0.25)');
        });
        it('given shadow is 0 25px 50px -12px rgba(0, 0, 0, 0.25), when shadow = "", shadow should be ""', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.shadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            displayElement.shadow = '';
            assert.strictEqual(displayElement.shadow, '');
        });
    }); */
    describe('backgroundColor', () => {
        it('given backgroundColor is "", when backgroundColor = "", backgroundColor should be ""', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.backgroundColor = '';
            assert.strictEqual(displayElement.backgroundColor, '');
        });
        it('given backgroundColor is "", when backgroundColor = "red", backgroundColor should be "red"', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.backgroundColor = 'red';
            assert.strictEqual(displayElement.backgroundColor, 'red');
        });
        it('given backgroundColor is "red", when backgroundColor = "", backgroundColor should be ""', () => {
            const displayElement: IDisplayElement = new DisplayElement();
            displayElement.backgroundColor = '';
            assert.strictEqual(displayElement.backgroundColor, '');
        });
    });
});
