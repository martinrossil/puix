import { assert } from 'chai';
import { describe, it } from 'mocha';
import IDisplayContainer from '../src/interfaces/IDisplayContainer';
import DisplayContainer from '../src/core/DisplayContainer';
import IDisplayElement from '../src/interfaces/IDisplayElement';
import DisplayElement from '../src/core/DisplayElement';

const displayContainer: IDisplayContainer = new DisplayContainer();
const child1: IDisplayElement = new DisplayElement();
const child2: IDisplayElement = new DisplayElement();
const elements: IDisplayElement[] = [child1, child2];

describe('IDisplayElement interface', () => {
    describe('default values', () => {
        it('default children length should be 0', () => {
            assert.strictEqual(displayContainer.children.length, 0);
        });
    });
    describe('addElement()', () => {
        it('given children.length is 0, when addElement(child), children.length should be 1', () => {
            displayContainer.addElement(child1);
            assert.strictEqual(displayContainer.children.length, 1);
        });
    });
    describe('removeElement()', () => {
        it('given children.length is 1, when removeElement(child), children.length should be 0', () => {
            displayContainer.removeElement(child1);
            assert.strictEqual(displayContainer.children.length, 0);
        });
    });
    describe('addElements()', () => {
        it('given children.length is 0, when addElements([child1, child2]), children.length should be 2', () => {
            displayContainer.addElements(elements);
            assert.strictEqual(displayContainer.children.length, 2);
        });
    });
});
