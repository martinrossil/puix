import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayElement, HorizontalAlign, IDisplayElement, ILayoutElement, IScrollContainer, Layout, ScrollContainer, VerticalAlign } from '../src';

describe('IScrollContainer', () => {
    describe('default values', () => {
        it('name should be ScrollContainer', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.name, 'ScrollContainer');
        });
        it('scrollEnabled should be false', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.isFalse(scrollContainer.scrollEnabled);
        });
        it('horizontalScrollEnabled should be false', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.isFalse(scrollContainer.horizontalScrollEnabled);
        });
        it('verticalScrollEnabled should be false', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.isFalse(scrollContainer.verticalScrollEnabled);
        });
        it('layout should be Layout.ANCHOR', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.layout, Layout.ANCHOR);
        });
        it('numElements should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.numElements, 0);
        });
        it('gap should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.gap, 0);
        });
        it('horizontalGap should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.horizontalGap, 0);
        });
        it('verticalGap should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.verticalGap, 0);
        });
        it('horizontalAlign should be HorizontalAlign.LEFT', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.horizontalAlign, HorizontalAlign.LEFT);
        });
        it('verticalAlign should be VerticalAlign.TOP', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.verticalAlign, VerticalAlign.TOP);
        });
        it('padding should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.padding, 0);
        });
        it('paddingTop should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.paddingTop, 0);
        });
        it('paddingRight should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.paddingRight, 0);
        });
        it('paddingBottom should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.paddingBottom, 0);
        });
        it('paddingLeft should be 0', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.paddingLeft, 0);
        });
    });
    describe('IDisplayContainer method overrides', () => {
        it('when container.addElement(child), addElement() should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            const child: IDisplayElement = new DisplayElement();
            container.addElement(child);
            document.body.appendChild(container as unknown as Node);
        });
        it('when container.addElementAt(child, 0), addElementAt() should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            const child: IDisplayElement = new DisplayElement();
            container.addElementAt(child, 0);
            document.body.appendChild(container as unknown as Node);
        });
        it('given scrollContainer with child, when container.removeElement(child), removeElement() should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            const child: IDisplayElement = new DisplayElement();
            container.addElement(child);
            container.removeElement(child);
        });
        it('given empty scrollContainer, when container.getElementAt(0), getElementAt() should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.getElementAt(0);
        });
        it('given scrollContainer with child, when container.removeAllElements(), removeAllElements() should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            const child: IDisplayElement = new DisplayElement();
            container.addElement(child);
            container.removeAllElements();
        });
        it('given empty scrollContainer, when container.addElements([child1, child2]), addElements() should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            const child1: IDisplayElement = new DisplayElement();
            const child2: IDisplayElement = new DisplayElement();
            const children: ILayoutElement[] = [child1, child2];
            container.addElements(children);
        });
    });
    describe('scrollEnabled', () => {
        it('given scrollEnabled is false, when scrollEnabled = false, scrollEnabled should be false', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.scrollEnabled = false;
            assert.isFalse(container.scrollEnabled);
        });
        it('given scrollEnabled is false, when scrollEnabled = true, scrollEnabled should be true', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.scrollEnabled = true;
            assert.isTrue(container.scrollEnabled);
        });
        it('given scrollEnabled is true, when scrollEnabled = false, scrollEnabled should be false', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.scrollEnabled = true;
            container.scrollEnabled = false;
            assert.isFalse(container.scrollEnabled);
        });
    });
    describe('horizontalScrollEnabled', () => {
        it('given horizontalScrollEnabled is false, when horizontalScrollEnabled = false, horizontalScrollEnabled should be false', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.horizontalScrollEnabled = false;
            assert.isFalse(container.horizontalScrollEnabled);
        });
        it('given horizontalScrollEnabled is false, when horizontalScrollEnabled = true, horizontalScrollEnabled should be true', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.horizontalScrollEnabled = true;
            assert.isTrue(container.horizontalScrollEnabled);
        });
        it('given horizontalScrollEnabled is true, when horizontalScrollEnabled = false, horizontalScrollEnabled should be false', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.horizontalScrollEnabled = true;
            container.horizontalScrollEnabled = false;
            assert.isFalse(container.horizontalScrollEnabled);
        });
    });
    describe('verticalScrollEnabled', () => {
        it('given verticalScrollEnabled is false, when verticalScrollEnabled = false, verticalScrollEnabled should be false', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.verticalScrollEnabled = false;
            assert.isFalse(container.verticalScrollEnabled);
        });
        it('given verticalScrollEnabled is false, when verticalScrollEnabled = true, verticalScrollEnabled should be true', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.verticalScrollEnabled = true;
            assert.isTrue(container.verticalScrollEnabled);
        });
        it('given verticalScrollEnabled is true, when verticalScrollEnabled = false, verticalScrollEnabled should be false', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.verticalScrollEnabled = true;
            container.verticalScrollEnabled = false;
            assert.isFalse(container.verticalScrollEnabled);
        });
    });
    describe('cover childChanged()', () => {
        it('when container.addElement(child), childChanged should be covered', () => {
            const container: IScrollContainer = new ScrollContainer();
            const child: IDisplayElement = new DisplayElement();
            child.setSize(300, 300);
            document.body.appendChild(container as unknown as Node);
            container.addElement(child);
        });
    });
    describe('cover IDisplayContainer setters', () => {
        it('layout', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.layout = Layout.VERTICAL;
        });
        it('gap', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.gap = 20;
        });
        it('horizontalGap', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.horizontalGap = 20;
        });
        it('verticalGap', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.verticalGap = 20;
        });
        it('horizontalAlign', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.horizontalAlign = HorizontalAlign.CENTER;
        });
        it('verticalAlign', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.verticalAlign = VerticalAlign.MIDDLE;
        });
        it('padding', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.padding = 20;
        });
        it('paddingLeft', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.paddingLeft = 20;
        });
        it('paddingTop', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.paddingTop = 20;
        });
        it('paddingRight', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.paddingRight = 20;
        });
        it('paddingBottom', () => {
            const container: IScrollContainer = new ScrollContainer();
            container.paddingBottom = 20;
        });
    });
    describe('physical sizing rules', () => {
        it('given container size is 0x0, when setSize(10, 10), explicitSize should be 10x10', () => {
            const container: IScrollContainer = new ScrollContainer();
            document.body.appendChild(container as unknown as Node);
            container.setSize(10, 10);
            assert.strictEqual(container.width, 10);
            assert.strictEqual(container.height, 10);
        });
        it('given container size is 0x0, when setSize(10, NaN), explicitSize should be 10xNaN', () => {
            const container: IScrollContainer = new ScrollContainer();
            document.body.appendChild(container as unknown as Node);
            container.setSize(10, NaN);
            assert.strictEqual(container.width, 10);
            assert.isNaN(container.height);
        });
        it('given container size is 0x0, when setSize(NaN, 10), explicitSize should be NaNx10', () => {
            const container: IScrollContainer = new ScrollContainer();
            document.body.appendChild(container as unknown as Node);
            container.setSize(NaN, 10);
            assert.isNaN(container.width);
            assert.strictEqual(container.height, 10);
        });
        describe('given container size is 10x10', () => {
            it('when horizontalScrollEnabled = true, if statement should be covered', () => {
                const container: IScrollContainer = new ScrollContainer();
                document.body.appendChild(container as unknown as Node);
                container.setSize(10, 10);
                container.horizontalScrollEnabled = true;
                assert.isTrue(container.horizontalScrollEnabled);
            });
        });
        describe('given container size is 10x10', () => {
            it('when verticalScrollEnabled = true, if statement should be covered', () => {
                const container: IScrollContainer = new ScrollContainer();
                document.body.appendChild(container as unknown as Node);
                container.setSize(10, 10);
                container.verticalScrollEnabled = true;
                assert.isTrue(container.verticalScrollEnabled);
            });
        });
    });
});
