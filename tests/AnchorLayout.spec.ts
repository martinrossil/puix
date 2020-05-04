import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import ILayoutContainer from '../src/interfaces/ILayoutContainer';
import IDisplayElement from '../src/interfaces/IDisplayElement';
import IAnchorLayoutData from '../src/interfaces/IAnchorLayoutData';
import LayoutContainer from '../src/core/LayoutContainer';
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
// childWithLayoutData.layoutData = anchorLayoutData;
layoutContainer.layout = anchorLayout;
document.body.appendChild(layoutContainer as unknown as Node);

beforeEach(() => {
    layoutContainer.setSize(NaN, NaN);
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
});

describe('AnchorLayout class', () => {
    describe('correct resizing of parent layoutContainer from padding and child elements', () => {
        it('given layoutContainer.width / height is NaN, when anchorLayout.padding = 10, layoutContainer actualSize should be 20', () => {
            anchorLayout.padding = 10;
            assert.strictEqual(layoutContainer.actualWidth, 20);
            assert.strictEqual(layoutContainer.actualHeight, 20);
        });
        it('given layoutContainer.width is 100 and height is NaN, when anchorLayout.padding = 10, layoutContainer actualWidth should be 100 and actualHeight should be 20', () => {
            layoutContainer.width = 100;
            anchorLayout.padding = 10;
            assert.strictEqual(layoutContainer.actualWidth, 100);
            assert.strictEqual(layoutContainer.actualHeight, 20);
        });
        it('given layoutContainer.width is NaN and height is 100, when anchorLayout.padding = 10, layoutContainer actualWidth should be 20 and actualHeight should be 100', () => {
            layoutContainer.height = 100;
            anchorLayout.padding = 10;
            assert.strictEqual(layoutContainer.actualWidth, 20);
            assert.strictEqual(layoutContainer.actualHeight, 100);
        });
        it('given layoutContainer size is 100, when anchorLayout.padding = 10, layoutContainer actual size should be 100', () => {
            layoutContainer.width = 100;
            layoutContainer.height = 100;
            anchorLayout.padding = 10;
            assert.strictEqual(layoutContainer.actualWidth, 100);
            assert.strictEqual(layoutContainer.actualHeight, 100);
        });
        it('given layoutContainer.width / height is NaN and 1 child with size 100, when anchorLayout.padding = 10, layoutContainer actualSize should be 120', () => {
            anchorLayout.padding = 10;
            layoutContainer.addElement(child100x100);
            assert.strictEqual(layoutContainer.actualWidth, 120);
            assert.strictEqual(layoutContainer.actualHeight, 120);
        });
        it('given layoutContainer.width is 100 and height is NaN and 1 child with size 100, when anchorLayout.padding = 10, layoutContainer actualWidth should be 100 and actualHeight should be 120', () => {
            layoutContainer.width = 100;
            anchorLayout.padding = 10;
            assert.strictEqual(layoutContainer.actualWidth, 100);
            assert.strictEqual(layoutContainer.actualHeight, 120);
        });
        it('given layoutContainer.width is NaN and height is 100 and 1 child with size 100, when anchorLayout.padding = 10, layoutContainer actualWidth should be 120 and actualHeight should be 100', () => {
            layoutContainer.height = 100;
            anchorLayout.padding = 10;
            assert.strictEqual(layoutContainer.actualWidth, 120);
            assert.strictEqual(layoutContainer.actualHeight, 100);
        });
        it('given layoutContainer size is NaN and 1 child with size 100, when anchorLayoutData.left = 10 and anchorLayoutData.right = 10, layoutContainer actualWidth should be 120 and actualHeight should be 100', () => {
            layoutContainer.height = 100;
            child100x100.layoutData = anchorLayoutData;
            anchorLayoutData.left = 10;
            anchorLayoutData.right = 10;
            assert.strictEqual(layoutContainer.actualWidth, 120);
            assert.strictEqual(layoutContainer.actualHeight, 100);
        });
    });
});
