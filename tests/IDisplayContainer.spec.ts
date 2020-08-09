import { assert } from 'chai';
import { describe, it } from 'mocha';
import DisplayContainerInterface from '../src/containers/DisplayContainerInterface';
import DisplayContainer from '../src/containers/DisplayContainer';
import DisplayElementInterface from '../src/core/DisplayElementInterface';
import DisplayElement from '../src/core/DisplayElement';

const displayContainer: DisplayContainerInterface = new DisplayContainer();
const child1: DisplayElementInterface = new DisplayElement();
child1.setSize(300, 50);
const child2: DisplayElementInterface = new DisplayElement();
child2.setSize(50, 300);
const elements: DisplayElementInterface[] = [child1, child2];
document.body.appendChild(displayContainer as unknown as Node);

describe('DisplayContainerInterface interface', () => {
    describe('default values', () => {
        it('default elements length should be 0', () => {
            assert.strictEqual(displayContainer.elements.length, 0);
        });
    });
    describe('addElement()', () => {
        it('given elements.length is 0, when addElement(child), elements.length should be 1', () => {
            displayContainer.addElement(child1);
            assert.strictEqual(displayContainer.elements.length, 1);
        });
    });
    describe('removeElement()', () => {
        it('given elements.length is 1, when removeElement(child), elements.length should be 0', () => {
            displayContainer.removeElement(child1);
            assert.strictEqual(displayContainer.elements.length, 0);
        });
    });
    describe('addElements()', () => {
        it('given children.length is 0, when addElements([child1, child2]), elements.length should be 2', () => {
            displayContainer.addElements(elements);
            assert.strictEqual(displayContainer.elements.length, 2);
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
