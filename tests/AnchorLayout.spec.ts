import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import IDisplayContainer from '../src/interfaces/IDisplayContainer';
import IDisplayElement from '../src/interfaces/IDisplayElement';
import DisplayContainer from '../src/containers/DisplayContainer';
import DisplayElement from '../src/core/DisplayElement';
import AnchorLayout from '../src/layouts/AnchorLayout';
import ILayout from '../src/interfaces/ILayout';

const displayContainer: IDisplayContainer = new DisplayContainer();
const anchorLayout: ILayout = new AnchorLayout();
const child100x100: IDisplayElement = new DisplayElement();
child100x100.setSize(100, 100);
displayContainer.layout = anchorLayout;
document.body.appendChild(displayContainer as unknown as Node);

const reset = (): void => {
    displayContainer.setSize(NaN, NaN);
    child100x100.setSize(100, 100);
    anchorLayout.padding = NaN;
    child100x100.percentWidth = NaN;
    child100x100.percentHeight = NaN;
    child100x100.horizontalCenter = NaN;
    child100x100.verticalCenter = NaN;
}

describe('AnchorLayout class', () => {
    describe('correct resizing of parent displayContainer from padding and child elements', () => {
        describe('given displayContainer size is NaN', () => {
            beforeEach(reset);
            it('when anchorLayout.padding = 10, displayContainer actualSize should be 20', () => {
                anchorLayout.padding = 10;
                assert.strictEqual(displayContainer.width, 20);
                assert.strictEqual(displayContainer.height, 20);
            });
            describe('given 1 child with size 100', () => {
                beforeEach(reset);
                it('when anchorLayout.padding = 10, displayContainer actualSize should be 120', () => {
                    displayContainer.addElement(child100x100);
                    anchorLayout.padding = 10;
                    assert.strictEqual(displayContainer.width, 120);
                    assert.strictEqual(displayContainer.height, 120);
                    displayContainer.removeElement(child100x100);
                });
            });
            describe('given 1 child width is NaN and height is 100', () => {
                beforeEach(reset);
                it('when child.percentWidth = 100, displayContainer actualWidth should be 0 and actualHeight should be 100', () => {
                    displayContainer.addElement(child100x100);
                    child100x100.width = NaN;
                    child100x100.percentWidth = 100;
                    assert.strictEqual(displayContainer.width, 0);
                    assert.strictEqual(displayContainer.height, 100);
                    displayContainer.removeElement(child100x100);
                    child100x100.width = 100;
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
                        assert.strictEqual(child100x100.actualX, 20);
                        assert.strictEqual(child100x100.actualY, 20);
                        displayContainer.removeElement(child100x100);
                        child100x100.setPosition(NaN, NaN)
                    });
                });
            });
        });
    });
});
