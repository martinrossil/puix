import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import ILayoutContainer from '../src/interfaces/ILayoutContainer';
import IDisplayElement from '../src/interfaces/IDisplayElement';
import IAnchorLayoutData from '../src/interfaces/IAnchorLayoutData';
import LayoutContainer from '../src/containers/LayoutContainer';
import DisplayElement from '../src/core/DisplayElement';
import AnchorLayout from '../src/layouts/AnchorLayout';
import AnchorLayoutData from '../src/layouts/AnchorLayoutData';
import ILayout from '../src/interfaces/ILayout';

const layoutContainer: ILayoutContainer = new LayoutContainer();
const anchorLayout: ILayout = new AnchorLayout();
const child100x100: IDisplayElement = new DisplayElement();
child100x100.setSize(100, 100);
const anchorLayoutData: IAnchorLayoutData = new AnchorLayoutData();
const childWithLayoutData: IDisplayElement = new DisplayElement();
childWithLayoutData.layoutData = anchorLayoutData;
layoutContainer.layout = anchorLayout;
document.body.appendChild(layoutContainer as unknown as Node);

const reset = (): void => {
    layoutContainer.setSize(NaN, NaN);
    child100x100.setSize(100, 100);
    anchorLayout.padding = NaN;
    anchorLayout.gap = NaN;
    anchorLayoutData.percentWidth = NaN;
    anchorLayoutData.percentHeight = NaN;
    anchorLayoutData.top = NaN;
    anchorLayoutData.right = NaN;
    anchorLayoutData.bottom = NaN;
    anchorLayoutData.left = NaN;
    anchorLayoutData.horizontalCenter = NaN;
    anchorLayoutData.verticalCenter = NaN;
    childWithLayoutData.setSize(NaN, NaN);
}

describe('AnchorLayout class', () => {
    describe('correct resizing of parent layoutContainer from padding and child elements', () => {
        describe('given layoutContainer size is NaN', () => {
            beforeEach(reset);
            it('when anchorLayout.padding = 10, layoutContainer actualSize should be 20', () => {
                anchorLayout.padding = 10;
                assert.strictEqual(layoutContainer.actualWidth, 20);
                assert.strictEqual(layoutContainer.actualHeight, 20);
            });
            describe('given 1 child with size 100', () => {
                beforeEach(reset);
                it('when anchorLayout.padding = 10, layoutContainer actualSize should be 120', () => {
                    layoutContainer.addElement(child100x100);
                    anchorLayout.padding = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 120);
                    assert.strictEqual(layoutContainer.actualHeight, 120);
                    layoutContainer.removeElement(child100x100);
                });
                it('when anchorLayoutData.left = 10 and anchorLayoutData.right = 10, layoutContainer actualWidth should be 120 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    anchorLayoutData.left = 10;
                    anchorLayoutData.right = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 120);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                });
                it('when anchorLayoutData.top = 10 and anchorLayoutData.bottom = 10, layoutContainer actualWidth should be 100 and actualHeight should be 120', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    anchorLayoutData.top = 10;
                    anchorLayoutData.bottom = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 120);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                });
                it('when anchorLayoutData.right = 10, layoutContainer actualWidth should be 110 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    anchorLayoutData.right = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 110);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                });
                it('when anchorLayoutData.bottom = 10, layoutContainer actualWidth should be 100 and actualHeight should be 110', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    anchorLayoutData.bottom = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 110);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                });
                it('when anchorLayoutData.top = 10, layoutContainer actualWidth should be 100 and actualHeight should be 110', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    anchorLayoutData.top = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 110);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                });
            });
            describe('given 1 child width is NaN and height is 100', () => {
                beforeEach(reset);
                it('when anchorLayoutData.percentWidth = 100, layoutContainer actualWidth should be 0 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.width = NaN;
                    anchorLayoutData.percentWidth = 100;
                    assert.strictEqual(layoutContainer.actualWidth, 0);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.width = 100;
                });
                it('when anchorLayoutData.left = 10 and anchorLayoutData.right = 10, layoutContainer actualWidth should be 20 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.width = NaN;
                    anchorLayoutData.left = 10;
                    anchorLayoutData.right = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 20);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.width = 100;
                });
                it('when anchorLayoutData.left = 10, layoutContainer actualWidth should be 10 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.width = NaN;
                    anchorLayoutData.left = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 10);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.width = 100;
                });
                it('when anchorLayoutData.right = 10, layoutContainer actualWidth should be 10 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.width = NaN;
                    anchorLayoutData.right = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 10);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.width = 100;
                });
                it('when anchorLayoutData properties are NaN, layoutContainer actualWidth should be 0 and actualHeight should be 100', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.width = NaN;
                    assert.strictEqual(layoutContainer.actualWidth, 0);
                    assert.strictEqual(layoutContainer.actualHeight, 100);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.width = 100;
                });
            });
            describe('given 1 child width is 100 and height is NaN', () => {
                beforeEach(reset);
                it('when anchorLayoutData.percentHeight = 100, layoutContainer actualWidth should be 100 and actualHeight should be 0', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.height = NaN;
                    anchorLayoutData.percentHeight = 100;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 0);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.height = 100;
                });
                it('when anchorLayoutData.top = 10 and anchorLayoutData.bottom = 10, layoutContainer actualWidth should be 100 and actualHeight should be 20', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.height = NaN;
                    anchorLayoutData.top = 10;
                    anchorLayoutData.bottom = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 20);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.height = 100;
                });
                it('when anchorLayoutData.left = top, layoutContainer actualWidth should be 100 and actualHeight should be 10', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.height = NaN;
                    anchorLayoutData.top = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 10);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.height = 100;
                });
                it('when anchorLayoutData.bottom = 10, layoutContainer actualWidth should be 100 and actualHeight should be 10', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.height = NaN;
                    anchorLayoutData.bottom = 10;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 10);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.height = 100;
                });
                it('when anchorLayoutData properties are NaN, layoutContainer actualWidth should be 100 and actualHeight should be 0', () => {
                    layoutContainer.addElement(child100x100);
                    child100x100.layoutData = anchorLayoutData;
                    child100x100.height = NaN;
                    assert.strictEqual(layoutContainer.actualWidth, 100);
                    assert.strictEqual(layoutContainer.actualHeight, 0);
                    layoutContainer.removeElement(child100x100);
                    child100x100.layoutData = null;
                    child100x100.height = 100;
                });
            });
        });
        describe('given layoutContainer width is 100 and height is NaN', () => {
            beforeEach(reset);
            it('when anchorLayout.padding = 10, layoutContainer actualWidth should be 100 and actualHeight should be 20', () => {
                layoutContainer.width = 100;
                anchorLayout.padding = 10;
                assert.strictEqual(layoutContainer.actualWidth, 100);
                assert.strictEqual(layoutContainer.actualHeight, 20);
            });
            it('given 1 child with size 100, when anchorLayout.padding = 10, layoutContainer actualWidth should be 100 and actualHeight should be 120', () => {
                layoutContainer.addElement(child100x100);
                layoutContainer.width = 100;
                anchorLayout.padding = 10;
                assert.strictEqual(layoutContainer.actualWidth, 100);
                assert.strictEqual(layoutContainer.actualHeight, 120);
                layoutContainer.removeElement(child100x100);
            });
        });
        describe('given layoutContainer width is NaN and height is 100', () => {
            beforeEach(reset);
            it('when anchorLayout.padding = 10, layoutContainer actualWidth should be 20 and actualHeight should be 100', () => {
                layoutContainer.height = 100;
                anchorLayout.padding = 10;
                assert.strictEqual(layoutContainer.actualWidth, 20);
                assert.strictEqual(layoutContainer.actualHeight, 100);
            });
            it('given 1 child with size 100, when anchorLayout.padding = 10, layoutContainer actualWidth should be 120 and actualHeight should be 100', () => {
                layoutContainer.addElement(child100x100);
                layoutContainer.height = 100;
                anchorLayout.padding = 10;
                assert.strictEqual(layoutContainer.actualWidth, 120);
                assert.strictEqual(layoutContainer.actualHeight, 100);
                layoutContainer.removeElement(child100x100);
            });
        });
        describe('given layoutContainersize is 100', () => {
            beforeEach(reset);
            it('when anchorLayout.padding = 10, layoutContainer actual size should be 100', () => {
                layoutContainer.width = 100;
                layoutContainer.height = 100;
                anchorLayout.padding = 10;
                assert.strictEqual(layoutContainer.actualWidth, 100);
                assert.strictEqual(layoutContainer.actualHeight, 100);
            });
        });
        describe('given layoutContainersize is 400', () => {
            describe('given 1 child size 200', () => {
                describe('given child.layoutData is null', () => {
                    beforeEach(reset);
                    it('when child.x and child.y = 20, child position should be 20, 20', () => {
                        layoutContainer.addElement(child100x100);
                        layoutContainer.setSize(400, 400);
                        child100x100.setSize(200, 200);
                        child100x100.setPosition(20, 20);
                        child100x100.layoutData = null;
                        assert.strictEqual(child100x100.actualX, 20);
                        assert.strictEqual(child100x100.actualY, 20);
                        layoutContainer.removeElement(child100x100);
                        child100x100.setPosition(NaN, NaN)
                    });
                });
                describe('given child.layoutData !== null', () => {
                    beforeEach(reset);
                    it('when horizontalCenter = 0, child.actualX should be 100', () => {
                        layoutContainer.addElement(child100x100);
                        layoutContainer.setSize(400, 400);
                        child100x100.setSize(200, 200);
                        child100x100.layoutData = anchorLayoutData;
                        anchorLayoutData.horizontalCenter = 0;
                        assert.strictEqual(child100x100.actualX, 100);
                        layoutContainer.removeElement(child100x100);
                        child100x100.setPosition(NaN, NaN)
                        child100x100.layoutData = null;
                    });
                    beforeEach(reset);
                    it('when verticalCenter = 0, child.actualY should be 100', () => {
                        layoutContainer.addElement(child100x100);
                        layoutContainer.setSize(400, 400);
                        child100x100.setSize(200, 200);
                        child100x100.layoutData = anchorLayoutData;
                        anchorLayoutData.verticalCenter = 0;
                        assert.strictEqual(child100x100.actualY, 100);
                        layoutContainer.removeElement(child100x100);
                        child100x100.setPosition(NaN, NaN)
                    });
                });
            });
        });
    });
});
