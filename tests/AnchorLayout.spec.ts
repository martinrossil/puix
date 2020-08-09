import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import DisplayContainerInterface from '../src/containers/DisplayContainerInterface';
import DisplayElementInterface from '../src/core/DisplayElementInterface';
import DisplayContainer from '../src/containers/DisplayContainer';
import DisplayElement from '../src/core/DisplayElement';
import AnchorLayout from '../src/layouts/AnchorLayout';
import LayoutInterface from '../src/layouts/LayoutInterface';

const displayContainer: DisplayContainerInterface = new DisplayContainer();
const anchorLayout: LayoutInterface = new AnchorLayout();
const child100x100: DisplayElementInterface = new DisplayElement();
child100x100.setSize(100, 100);
displayContainer.layout = anchorLayout;
document.body.appendChild(displayContainer as unknown as Node);

const reset = (): void => {
    displayContainer.setSize(NaN, NaN);
    child100x100.setSize(100, 100);
    anchorLayout.padding = NaN;
    child100x100.percentWidth = NaN;
    child100x100.percentHeight = NaN;
}

describe('AnchorLayout class', () => {
    describe('correct resizing of parent displayContainer from padding and child elements', () => {
        describe('given displayContainer size is NaN', () => {
            beforeEach(reset);
            it('when anchorLayout.padding = 10, displayContainer actualSize should be 20', () => {
                anchorLayout.padding = 10;
                assert.strictEqual(displayContainer.actualWidth, 20);
                assert.strictEqual(displayContainer.actualHeight, 20);
            });
            describe('given 1 child with size 100', () => {
                beforeEach(reset);
                it('when anchorLayout.padding = 10, displayContainer actualSize should be 120', () => {
                    displayContainer.addElement(child100x100);
                    anchorLayout.padding = 10;
                    assert.strictEqual(displayContainer.actualWidth, 120);
                    assert.strictEqual(displayContainer.actualHeight, 120);
                    displayContainer.removeElement(child100x100);
                });
            });
        });
        describe('given layoutContainersize is 400', () => {
            describe('given 1 child size 200', () => {
                describe('given child.layoutData is null', () => {
                    beforeEach(reset);
                    it('when child.x and child.y = 20, child position should be 20, 20', () => {
                        displayContainer.addElement(child100x100);
                        displayContainer.setSize(400, 400);
                        child100x100.setSize(200, 200);
                        child100x100.setPosition(20, 20);
                        assert.strictEqual(child100x100.x, 20);
                        assert.strictEqual(child100x100.y, 20);
                        displayContainer.removeElement(child100x100);
                        child100x100.setPosition(NaN, NaN)
                    });
                });
            });
        });
    });
});
