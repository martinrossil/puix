import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, DisplayElement, IDisplayContainer, IDisplayElement } from '../src';

const displayContainer: IDisplayContainer = new DisplayContainer();
const child1: IDisplayElement = new DisplayElement();
child1.setSize(300, 50);
const child2: IDisplayElement = new DisplayElement();
child2.setSize(50, 300);
const elements: IDisplayElement[] = [child1, child2];
document.body.appendChild(displayContainer as unknown as Node);

describe('DisplayContainerInterface interface', () => {
    describe('default values', () => {
        it('default numElements should be 0', () => {
            assert.strictEqual(displayContainer.numElements, 0);
        });
    });
    describe('addElement()', () => {
        it('given numElements is 0, when addElement(child),numElements should be 1', () => {
            displayContainer.addElement(child1);
            assert.strictEqual(displayContainer.numElements, 1);
        });
    });
    describe('removeElement()', () => {
        it('given numElements is 1, when removeElement(child), numElements should be 0', () => {
            displayContainer.removeElement(child1);
            assert.strictEqual(displayContainer.numElements, 0);
        });
    });
    describe('addElements()', () => {
        it('given numElements is 0, when addElements([child1, child2]), numElements should be 2', () => {
            displayContainer.addElements(elements);
            assert.strictEqual(displayContainer.numElements, 2);
        });
    });
    describe('resizing from children', () => {
        it('given displayContainer width and height is NaN, container should resize from children', () => {
            assert.strictEqual(displayContainer.actualWidth, 300);
            assert.strictEqual(displayContainer.actualHeight, 300);
        });
        it('when removeElement(), container should resize from children', () => {
            displayContainer.removeElement(child2)
            assert.strictEqual(displayContainer.actualWidth, 300);
            assert.strictEqual(displayContainer.actualHeight, 50);
        });
    });
});
