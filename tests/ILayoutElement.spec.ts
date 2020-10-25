import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Events, ILayoutElement, LayoutElement } from '../src';

describe('ILayoutElement interface', () => {
    describe('default values', () => {
        it('default top should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.top);
        });
        it('default right should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.right);
        });
        it('default bottom should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.bottom);
        });
        it('default left should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.left);
        });
        it('default percentWidth should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.percentHeight);
        });
        it('default horizontalCenter should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.horizontalCenter);
        });
        it('default verticalCenter should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            assert.isNaN(layoutElement.verticalCenter);
        });
    });
    describe('given layoutElement has default values', () => {
        it('when top = NaN, top should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.top = NaN;
            assert.isNaN(layoutElement.top);
        });
        it('when right = NaN, right should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.right = NaN;
            assert.isNaN(layoutElement.right);
        });
        it('when bottom = NaN, bottom should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.bottom = NaN;
            assert.isNaN(layoutElement.bottom);
        });
        it('when left = NaN, left should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.left = NaN;
            assert.isNaN(layoutElement.left);
        });
        it('when percentWidth = NaN, percentWidth should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentWidth = NaN;
            assert.isNaN(layoutElement.percentWidth);
        });
        it('when percentHeight = NaN, percentHEight should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentHeight = NaN;
            assert.isNaN(layoutElement.percentHeight);
        });
        it('when horizontalCenter = NaN, horizontalCenter should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.horizontalCenter = NaN;
            assert.isNaN(layoutElement.horizontalCenter);
        });
        it('when verticalCenter = NaN, verticalCenter should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.verticalCenter = NaN;
            assert.isNaN(layoutElement.verticalCenter);
        });
        it('when top = 0, top should be 0 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.top = 0;
            assert.strictEqual(layoutElement.top, 0);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given top is 0, when top = 0, top should be 0 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.top = 0;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.top = 0;
            assert.strictEqual(layoutElement.top, 0);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('when right = 0, right should be 0 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.right = 0;
            assert.strictEqual(layoutElement.right, 0);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given right is 0, when right = 0, right should be 0 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.right = 0;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.right = 0;
            assert.strictEqual(layoutElement.right, 0);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });

        it('when bottom = 0, bottom should be 0 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.bottom = 0;
            assert.strictEqual(layoutElement.bottom, 0);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given bottom is 0, when bottom = 0, bottom should be 0 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.bottom = 0;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.bottom = 0;
            assert.strictEqual(layoutElement.bottom, 0);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });

        it('when left = 0, left should be 0 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.left = 0;
            assert.strictEqual(layoutElement.left, 0);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given left is 0, when left = 0, left should be 0 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.left = 0;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.left = 0;
            assert.strictEqual(layoutElement.left, 0);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });

        it('when percentWidth = 100, percentWidth should be 100 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentWidth = 100;
            assert.strictEqual(layoutElement.percentWidth, 100);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given percentWidth is 100, when percentWidth = 100, percentWidth should be 100 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentWidth = 100;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentWidth = 100;
            assert.strictEqual(layoutElement.percentWidth, 100);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given percentWidth is 100, when percentWidth = NaN, percentWidth should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentWidth = 100;
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentWidth = NaN;
            assert.isNaN(layoutElement.percentWidth);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('when percentWidth = -100, percentWidth should be 0', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentWidth = -100;
            assert.strictEqual(layoutElement.percentWidth, 0);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given percentWidth is 0, when percentWidth = -100, percentWidth should be 0', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentWidth = 0;
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentWidth = -100;
            assert.strictEqual(layoutElement.percentWidth, 0);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('when percentHeight = 100, percentHeight should be 100 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentHeight = 100;
            assert.strictEqual(layoutElement.percentHeight, 100);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given percentHeight is 100, when percentHeight = 100, percentHeight should be 100 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentHeight = 100;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentHeight = 100;
            assert.strictEqual(layoutElement.percentHeight, 100);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });

        it('given percentHeight is 100, when percentHeight = NaN, percentHEight should be NaN', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentHeight = 100;
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentHeight = NaN;
            assert.isNaN(layoutElement.percentHeight);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given percentHeight is 0, when percentHeight = -100, percentHeight should be 0', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.percentHeight = 0;
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentHeight = -100;
            assert.strictEqual(layoutElement.percentHeight, 0);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('when percentHeight = -100, percentWidth should be 0', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.percentHeight = -100;
            assert.strictEqual(layoutElement.percentHeight, 0);
            document.body.removeChild(layoutElement as unknown as Node);
        });

        it('when horizontalCenter = 0, horizontalCenter should be 0 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.horizontalCenter = 0;
            assert.strictEqual(layoutElement.horizontalCenter, 0);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given horizontalCenter is 0, when horizontalCenter = 0, horizontalCenter should be 0 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.horizontalCenter = 0;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.horizontalCenter = 0;
            assert.strictEqual(layoutElement.horizontalCenter, 0);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });

        it('when verticalCenter = 0, verticalCenter should be 0 and Events.LAYOUT_DATA_CHANGED should be dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.verticalCenter = 0;
            assert.strictEqual(layoutElement.verticalCenter, 0);
            assert.isTrue(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
        it('given verticalCenter is 0, when verticalCenter = 0, verticalCenter should be 0 and Events.LAYOUT_DATA_CHANGED should be NOT dispatched', () => {
            const layoutElement: ILayoutElement = new LayoutElement();
            layoutElement.verticalCenter = 0;
            let didRecieveEvent = false;
            layoutElement.addEventListener(Events.LAYOUT_DATA_CHANGED, () => {
                didRecieveEvent = true;
            })
            document.body.appendChild(layoutElement as unknown as Node);
            layoutElement.verticalCenter = 0;
            assert.strictEqual(layoutElement.verticalCenter, 0);
            assert.isFalse(didRecieveEvent);
            document.body.removeChild(layoutElement as unknown as Node);
        });
    });
});
