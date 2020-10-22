import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, DisplayElement, HorizontalAlign, IDisplayContainer, IDisplayElement, ILayoutElement, Layout, VerticalAlign } from '../src';

const displayContainer: IDisplayContainer = new DisplayContainer();
const child1: IDisplayElement = new DisplayElement();
child1.setSize(300, 50);
const child2: IDisplayElement = new DisplayElement();
child2.setSize(50, 300);
const elements: IDisplayElement[] = [child1, child2];
document.body.appendChild(displayContainer as unknown as Node); 

describe('IDisplayContainer interface', () => {
    describe('default values', () => {
        it('default numElements should be 0', () => {
            assert.strictEqual(displayContainer.numElements, 0);
        });
        it('default layout should be Layout.ANCHOR', () => {
            assert.strictEqual(displayContainer.layout, Layout.ANCHOR);
        });
        it('default gap should be 0', () => {
            assert.strictEqual(displayContainer.gap, 0);
        });
        it('default horizontalGap should be 0', () => {
            assert.strictEqual(displayContainer.horizontalGap, 0);
        });
        it('default verticalGap should be 0', () => {
            assert.strictEqual(displayContainer.verticalGap, 0);
        });
        it('default horizontalAlign should be HorizontalAlign.LEFT', () => {
            assert.strictEqual(displayContainer.horizontalAlign, HorizontalAlign.LEFT);
        });
        it('default verticalAlign should be VerticalAlign.TOP', () => {
            assert.strictEqual(displayContainer.verticalAlign, VerticalAlign.TOP);
        });
        it('default padding should be 0', () => {
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('default paddingLeft should be 0', () => {
            assert.strictEqual(displayContainer.paddingLeft, 0);
        });
        it('default paddingTop should be 0', () => {
            assert.strictEqual(displayContainer.paddingTop, 0);
        });
        it('default paddingRight should be 0', () => {
            assert.strictEqual(displayContainer.paddingRight, 0);
        });
        it('default paddingBottom should be 0', () => {
            assert.strictEqual(displayContainer.paddingBottom, 0);
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
            const displayContainerNode: Node = displayContainer as unknown as Node;
            assert.strictEqual(displayContainerNode.childNodes.length, 0);
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
    describe('removeAllElements()', () => {
        it('given numElements is 2, when removeAllElements(), numElements should be 0', () => {
            displayContainer.removeAllElements();
            assert.strictEqual(displayContainer.numElements, 0);
        });
    });
    describe('addElementAt()', () => {
        it('given numElements is 0, when addElementAt(child1, 0), numElements should be 1', () => {
            displayContainer.addElementAt(child1, 0);
            assert.strictEqual(displayContainer.numElements, 1);
        });
        it('given child1 has been added, when addElementAt(child2, 0), numElements should be 2', () => {
            displayContainer.addElementAt(child2, 0);
            assert.strictEqual(displayContainer.numElements, 2);
        });
    });
    describe('getElementAt()', () => {
        it('given child2 is at index 0, getElementAt(0) should return child2', () => {
            const element: ILayoutElement = displayContainer.getElementAt(0);
            assert.strictEqual(child2, element);
        });
        it('given 2 child elements, getElementAt(2) should return null', () => {
            const element: ILayoutElement = displayContainer.getElementAt(2);
            assert.isNull(element);
        });
    });
    describe('layout property', () => {
        it('given layout === Layout.ANCHOR, when layout = Layout.ANCHOR, layout should be Layout.ANCHOR', () => {
            displayContainer.layout = Layout.ANCHOR;
            assert.strictEqual(displayContainer.layout, Layout.ANCHOR);
        });
        it('given layout === Layout.ANCHOR, when layout = Layout.HORIZONTAL, layout should be Layout.HORIZONTAL', () => {
            displayContainer.layout = Layout.HORIZONTAL;
            assert.strictEqual(displayContainer.layout, Layout.HORIZONTAL);
        });
        it('given layout === Layout.HORIZONTAL, when layout = Layout.VERTICAL, layout should be Layout.VERTICAL', () => {
            displayContainer.layout = Layout.VERTICAL;
            assert.strictEqual(displayContainer.layout, Layout.VERTICAL);
        });
        it('given layout === Layout.VERTICAL, when layout = Layout.ANCHOR, layout should be Layout.ANCHOR', () => {
            displayContainer.layout = Layout.ANCHOR;
            assert.strictEqual(displayContainer.layout, Layout.ANCHOR);
        });
        it('given layout === Layout.ANCHOR, when layout = Layout.HORIZONTAL, layout should be Layout.HORIZONTAL', () => {
            displayContainer.layout = Layout.HORIZONTAL;
            assert.strictEqual(displayContainer.layout, Layout.HORIZONTAL);
        });
        it('given layout === Layout.HORIZONTAL, when layout = Layout.VERTICAL, layout should be Layout.VERTICAL', () => {
            displayContainer.layout = Layout.VERTICAL;
            assert.strictEqual(displayContainer.layout, Layout.VERTICAL);
        });
    });
    describe('gap property', () => {
        it('given gap is 0, when gap = NaN, gap should be 0', () => {
            displayContainer.gap = NaN;
            assert.strictEqual(displayContainer.gap, 0);
        });
        it('given gap is 0, when gap = -1, gap should be 0', () => {
            displayContainer.gap = -1;
            assert.strictEqual(displayContainer.gap, 0);
        });
        it('given gap is 0, when gap = 8, gap should be 8', () => {
            displayContainer.gap = 8;
            assert.strictEqual(displayContainer.gap, 8);
        });
        it('given gap is 8, horizontalGap should be 8', () => {
            assert.strictEqual(displayContainer.horizontalGap, 8);
        });
        it('given gap is 8, verticalGap should be 8', () => {
            displayContainer.gap = 8;
            assert.strictEqual(displayContainer.verticalGap, 8);
        });
        it('given gap is 8, when gap = NaN, gap, verticalGap and horizontalGap should be 0', () => {
            displayContainer.gap = NaN;
            assert.strictEqual(displayContainer.gap, 0);
            assert.strictEqual(displayContainer.horizontalGap, 0);
            assert.strictEqual(displayContainer.verticalGap, 0);
        });
    });
    describe('horizontalGap property', () => {
        it('given horizontalGap is 0, when horizontalGap = NaN, horizontalGap should be 0', () => {
            displayContainer.horizontalGap = NaN;
            assert.strictEqual(displayContainer.horizontalGap, 0);
        });
        it('given horizontalGap is 0, when horizontalGap = -1, horizontalGap should be 0', () => {
            displayContainer.horizontalGap = -1;
            assert.strictEqual(displayContainer.horizontalGap, 0);
        });
        it('given horizontalGap is 0, when horizontalGap = 8, horizontalGap should be 8', () => {
            displayContainer.horizontalGap = 8;
            assert.strictEqual(displayContainer.horizontalGap, 8);
        });
        it('given horizontalGap is 8, when horizontalGap = NaN, horizontalGap should be 0', () => {
            displayContainer.horizontalGap = NaN;
            assert.strictEqual(displayContainer.horizontalGap, 0);
        });
        it('given horizontalGap is 0, when horizontalGap = 0, horizontalGap should be 0', () => {
            displayContainer.horizontalGap = 0;
            assert.strictEqual(displayContainer.horizontalGap, 0);
        });
    });

    describe('verticalGap property', () => {
        it('given verticalGap is 0, when verticalGap = NaN, verticalGap should be 0', () => {
            displayContainer.verticalGap = NaN;
            assert.strictEqual(displayContainer.verticalGap, 0);
        });
        it('given verticalGap is 0, when verticalGap = -1, verticalGap should be 0', () => {
            displayContainer.verticalGap = -1;
            assert.strictEqual(displayContainer.verticalGap, 0);
        });
        it('given verticalGap is 0, when verticalGap = 8, verticalGap should be 8', () => {
            displayContainer.verticalGap = 8;
            assert.strictEqual(displayContainer.verticalGap, 8);
        });
        it('given verticalGap is 8, when verticalGap = NaN, verticalGap should be 0', () => {
            displayContainer.verticalGap = NaN;
            assert.strictEqual(displayContainer.verticalGap, 0);
        });
        it('given verticalGap is 0, when verticalGap = 0, verticalGap should be 0', () => {
            displayContainer.verticalGap = 0;
            assert.strictEqual(displayContainer.verticalGap, 0);
        });
    });
    describe('horizontalAlign property', () => {
        it('given horizontalAlign is HorizontalAlign.LEFT, when horizontalAlign = HorizontalAlign.LEFT, horizontalAlign should be HorizontalAlign.LEFT', () => {
            displayContainer.horizontalAlign = HorizontalAlign.LEFT;
            assert.strictEqual(displayContainer.horizontalAlign, HorizontalAlign.LEFT);
        });
        it('given horizontalAlign is HorizontalAlign.LEFT, when horizontalAlign = HorizontalAlign.CENTER, horizontalAlign should be HorizontalAlign.CENTER', () => {
            displayContainer.horizontalAlign = HorizontalAlign.CENTER;
            assert.strictEqual(displayContainer.horizontalAlign, HorizontalAlign.CENTER);
        });
        it('given horizontalAlign is HorizontalAlign.CENTER, when horizontalAlign = HorizontalAlign.RIGHT, horizontalAlign should be HorizontalAlign.RIGHT', () => {
            displayContainer.horizontalAlign = HorizontalAlign.RIGHT;
            assert.strictEqual(displayContainer.horizontalAlign, HorizontalAlign.RIGHT);
        });
        it('given horizontalAlign is HorizontalAlign.RIGHT, when horizontalAlign = HorizontalAlign.FILL, horizontalAlign should be HorizontalAlign.FILL', () => {
            displayContainer.horizontalAlign = HorizontalAlign.FILL;
            assert.strictEqual(displayContainer.horizontalAlign, HorizontalAlign.FILL);
        });
        it('given horizontalAlign is HorizontalAlign.FILL, when horizontalAlign = HorizontalAlign.LEFT, horizontalAlign should be HorizontalAlign.LEFT', () => {
            displayContainer.horizontalAlign = HorizontalAlign.LEFT;
            assert.strictEqual(displayContainer.horizontalAlign, HorizontalAlign.LEFT);
        });
    });
    describe('verticalAlign property', () => {
        it('given verticalAlign is VerticalAlign.TOP, when verticalAlign = VerticalAlign.TOP, VerticalAlign should be VerticalAlign.TOP', () => {
            displayContainer.verticalAlign = VerticalAlign.TOP;
            assert.strictEqual(displayContainer.verticalAlign, VerticalAlign.TOP);
        });
        it('given verticalAlign is VerticalAlign.TOP, when verticalAlign = VerticalAlign.MIDDLE, verticalAlign should be VerticalAlign.MIDDLE', () => {
            displayContainer.verticalAlign = VerticalAlign.MIDDLE;
            assert.strictEqual(displayContainer.verticalAlign, VerticalAlign.MIDDLE);
        });
        it('given verticalAlign is VerticalAlign.MIDDLE, when verticalAlign = VerticalAlign.BOTTOM, verticalAlign should be VerticalAlign.BOTTOM', () => {
            displayContainer.verticalAlign = VerticalAlign.BOTTOM;
            assert.strictEqual(displayContainer.verticalAlign, VerticalAlign.BOTTOM);
        });
        it('given verticalAlign is VerticalAlign.BOTTOM, when verticalAlign = VerticalAlign.FILL, verticalAlign should be VerticalAlign.FILL', () => {
            displayContainer.verticalAlign = VerticalAlign.FILL;
            assert.strictEqual(displayContainer.verticalAlign, VerticalAlign.FILL);
        });
        it('given verticalAlign is VerticalAlign.FILL, when verticalAlign = VerticalAlign.TOP, verticalAlign should be VerticalAlign.TOP', () => {
            displayContainer.verticalAlign = VerticalAlign.TOP;
            assert.strictEqual(displayContainer.verticalAlign, VerticalAlign.TOP);
        });
    });
    describe('padding property', () => {
        it('given padding is 0, when padding = NaN, padding should be 0', () => {
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is 0, when padding = -1, padding should be 0', () => {
            displayContainer.padding = -1;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is 0, when padding = 8, padding should be 8', () => {
            displayContainer.padding = 8;
            assert.strictEqual(displayContainer.padding, 8);
        });
        it('given padding is 8, paddingLeft should be 8', () => {
            assert.strictEqual(displayContainer.paddingLeft, 8);
        });
        it('given padding is 8, paddingTop should be 8', () => {
            assert.strictEqual(displayContainer.paddingTop, 8);
        });
        it('given padding is 8, paddingRight should be 8', () => {
            assert.strictEqual(displayContainer.paddingRight, 8);
        });
        it('given padding is 8, paddingBottom should be 8', () => {
            assert.strictEqual(displayContainer.paddingBottom, 8);
        });
        it('given padding is 8, when padding = NaN, padding, paddingLeft, paddingTop, paddingRight and paddingBottom should be 0', () => {
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.padding, 0);
            assert.strictEqual(displayContainer.paddingLeft, 0);
            assert.strictEqual(displayContainer.paddingTop, 0);
            assert.strictEqual(displayContainer.paddingRight, 0);
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
        it('given padding is 0, when padding = 0, padding should be 0', () => {
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
    });
    describe('paddingLeft property', () => {
        it('given paddingLeft is 0, when paddingLeft = NaN, paddingLeft should be 0', () => {
            displayContainer.paddingLeft = NaN;
            assert.strictEqual(displayContainer.paddingLeft, 0);
        });
        it('given paddingLeft is 0, when paddingLeft = -1, paddingLeft should be 0', () => {
            displayContainer.paddingLeft = -1;
            assert.strictEqual(displayContainer.paddingLeft, 0);
        });
        it('given paddingLeft is 0, when paddingLeft = 8, paddingLeft should be 8', () => {
            displayContainer.paddingLeft = 8;
            assert.strictEqual(displayContainer.paddingLeft, 8);
        });
        it('given paddingLeft is 8, when paddingLeft = 0, paddingLeft should be 0', () => {
            displayContainer.paddingLeft = 0;
            assert.strictEqual(displayContainer.paddingLeft, 0);
        });
        it('given paddingLeft is 0, when paddingLeft = 0, paddingLeft should be 0', () => {
            displayContainer.paddingLeft = 0;
            assert.strictEqual(displayContainer.paddingLeft, 0);
        });
        it('given paddingLeft is 8, when paddingLeft = NaN, paddingLeft should be 0', () => {
            displayContainer.paddingLeft = 8;
            displayContainer.paddingLeft = NaN;
            assert.strictEqual(displayContainer.paddingLeft, 0);
        });
    });
    describe('paddingTop property', () => {
        it('given paddingTop is 0, when paddingTop = NaN, paddingTop should be 0', () => {
            displayContainer.paddingTop = NaN;
            assert.strictEqual(displayContainer.paddingTop, 0);
        });
        it('given paddingTop is 0, when paddingTop = -1, paddingTop should be 0', () => {
            displayContainer.paddingTop = -1;
            assert.strictEqual(displayContainer.paddingTop, 0);
        });
        it('given paddingTop is 0, when paddingTop = 8, paddingTop should be 8', () => {
            displayContainer.paddingTop = 8;
            assert.strictEqual(displayContainer.paddingTop, 8);
        });
        it('given paddingTop is 8, when paddingTop = 0, paddingTop should be 0', () => {
            displayContainer.paddingTop = 0;
            assert.strictEqual(displayContainer.paddingTop, 0);
        });
        it('given paddingTop is 0, when paddingTop = 0, paddingTop should be 0', () => {
            displayContainer.paddingTop = 0;
            assert.strictEqual(displayContainer.paddingTop, 0);
        });
        it('given paddingTop is 8, when paddingTop = NaN, paddingTop should be 0', () => {
            displayContainer.paddingTop = 8;
            displayContainer.paddingTop = NaN;
            assert.strictEqual(displayContainer.paddingTop, 0);
        });
    });
    describe('paddingRight property', () => {
        it('given paddingRight is 0, when paddingRight = NaN, paddingRight should be 0', () => {
            displayContainer.paddingRight = NaN;
            assert.strictEqual(displayContainer.paddingRight, 0);
        });
        it('given paddingRight is 0, when paddingRight = -1, paddingRight should be 0', () => {
            displayContainer.paddingRight = -1;
            assert.strictEqual(displayContainer.paddingRight, 0);
        });
        it('given paddingRight is 0, when paddingRight = 8, paddingRight should be 8', () => {
            displayContainer.paddingRight = 8;
            assert.strictEqual(displayContainer.paddingRight, 8);
        });
        it('given paddingRight is 8, when paddingRight = 0, paddingRight should be 0', () => {
            displayContainer.paddingRight = 0;
            assert.strictEqual(displayContainer.paddingRight, 0);
        });
        it('given paddingRight is 0, when paddingRight = 0, paddingRight should be 0', () => {
            displayContainer.paddingRight = 0;
            assert.strictEqual(displayContainer.paddingRight, 0);
        });
        it('given paddingRight is 8, when paddingRight = NaN, paddingRight should be 0', () => {
            displayContainer.paddingRight = 8;
            displayContainer.paddingRight = NaN;
            assert.strictEqual(displayContainer.paddingRight, 0);
        });
    });
    describe('paddingBottom property', () => {
        it('given paddingBottom is 0, when paddingBottom = NaN, paddingBottom should be 0', () => {
            displayContainer.paddingBottom = NaN;
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
        it('given paddingBottom is 0, when paddingBottom = -1, paddingBottom should be 0', () => {
            displayContainer.paddingBottom = -1;
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
        it('given paddingBottom is 0, when paddingBottom = 8, paddingBottom should be 8', () => {
            displayContainer.paddingBottom = 8;
            assert.strictEqual(displayContainer.paddingBottom, 8);
        });
        it('given paddingBottom is 8, when paddingBottom = 0, paddingBottom should be 0', () => {
            displayContainer.paddingBottom = 0;
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
        it('given paddingBottom is 0, when paddingBottom = 0, paddingBottom should be 0', () => {
            displayContainer.paddingBottom = 0;
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
        it('given paddingBottom is 8, when paddingBottom = NaN, paddingBottom should be 0', () => {
            displayContainer.paddingBottom = 8;
            displayContainer.paddingBottom = NaN;
            assert.strictEqual(displayContainer.paddingBottom, 0);
        });
    });
});
