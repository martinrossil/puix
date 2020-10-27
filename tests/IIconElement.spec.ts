import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IconElement, IIconElement } from '../src';

describe('IIconElement', () => {
    describe('default values', () => {
        it('default size should be 24 x 24', () => {
            const iconElement: IIconElement = new IconElement();
            assert.strictEqual(iconElement.width, 24);
            assert.strictEqual(iconElement.height, 24);
        });
        it('default icon should be ""', () => {
            const iconElement: IIconElement = new IconElement();
            assert.strictEqual(iconElement.icon, '');
        });
        it('default color should be ""', () => {
            const iconElement: IIconElement = new IconElement();
            assert.strictEqual(iconElement.color, '');
        });
    });
    describe('icon', () => {
        it('given icon is "", when icon = "", icon should be ""', () => {
            const iconElement: IIconElement = new IconElement();
            iconElement.icon = '';
            assert.strictEqual(iconElement.icon, '');
        });
        it('given icon is "", when icon = "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z", icon should be "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"', () => {
            const iconElement: IIconElement = new IconElement();
            iconElement.icon = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';
            assert.strictEqual(iconElement.icon, 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z');
        });
    });
    describe('color', () => {
        it('given color is "", when color = "", color should be ""', () => {
            const iconElement: IIconElement = new IconElement();
            iconElement.color = '';
            assert.strictEqual(iconElement.color, '');
        });
        it('given color is "", when color = "red", color should be "red"', () => {
            const iconElement: IIconElement = new IconElement();
            iconElement.color = 'red';
            assert.strictEqual(iconElement.color, 'red');
        });
    });
});
