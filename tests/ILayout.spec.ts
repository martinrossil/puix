import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, DisplayElement, IDisplayContainer, IDisplayElement } from '../src';

let container: IDisplayContainer;
let innerContainer: IDisplayContainer;
const child200X200: IDisplayElement = new DisplayElement();
child200X200.setSize(200, 200);
const child100X100: IDisplayElement = new DisplayElement();
child100X100.setSize(100, 100);
const childP100XP100: IDisplayElement = new DisplayElement();
childP100XP100.percentWidth = childP100XP100.percentHeight = 100;
const childNaNXP100: IDisplayElement = new DisplayElement();
childNaNXP100.percentHeight = 100;
const childP100XNaN: IDisplayElement = new DisplayElement();
childP100XNaN.percentWidth = 100;
const childT0R0B0L0: IDisplayElement = new DisplayElement();
childT0R0B0L0.top = childT0R0B0L0.right = childT0R0B0L0.bottom = childT0R0B0L0.left = 0;
const childL0R0: IDisplayElement = new DisplayElement();
childL0R0.left = childL0R0.right = 0;
const childT0B0: IDisplayElement = new DisplayElement();
childT0B0.top = childT0B0.bottom = 0;
const child100X100R0: IDisplayElement = new DisplayElement();
child100X100R0.setSize(100, 100);
child100X100R0.right = 0;
const child100X100L20: IDisplayElement = new DisplayElement();
child100X100L20.setSize(100, 100);
child100X100L20.left = 20;
const child100X100T20: IDisplayElement = new DisplayElement();
child100X100T20.setSize(100, 100);
child100X100T20.top = 20;
const child100X100B20: IDisplayElement = new DisplayElement();
child100X100B20.setSize(100, 100);
child100X100B20.bottom = 20;
const child100X100B20R20: IDisplayElement = new DisplayElement();
child100X100B20R20.setSize(100, 100);
child100X100B20R20.bottom = child100X100B20R20.right = 20;
const childL0R0H100: IDisplayElement = new DisplayElement();
childL0R0H100.left = childL0R0H100.right = 0;

describe('Physical Sizing', () => {
    describe('AnchorLayout internal sizing of container', () => {
        describe('given container with padding === 20 and children 200X200 and child 100X100', () => {
            describe('given container does not have explicit size', () => {
                it('container size should be 240', () => {
                    container = new DisplayContainer();
                    container.padding = 20;
                    container.addElements([child200X200, child100X100]);
                    document.body.appendChild(container as unknown as Node);
                    const containerHTMLElement: HTMLElement = container as unknown as HTMLElement;
                    const domRect: DOMRect = containerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.width, 240);
                    assert.strictEqual(domRect.height, 240);
                    document.body.removeChild(container as unknown as Node);
                });
            });
            describe('given container have width === 300 and height === NaN', () => {
                it('container size should be 300, 240', () => {
                    container = new DisplayContainer();
                    container.padding = 20;
                    container.width = 300;
                    container.addElements([child200X200, child100X100]);
                    document.body.appendChild(container as unknown as Node);
                    const containerHTMLElement: HTMLElement = container as unknown as HTMLElement;
                    const domRect: DOMRect = containerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.width, 300);
                    assert.strictEqual(domRect.height, 240);
                    document.body.removeChild(container as unknown as Node);
                });
            });
            describe('given container have width === NaN and height === 300', () => {
                it('container size should be 240, 300', () => {
                    container = new DisplayContainer();
                    container.padding = 20;
                    container.height = 300;
                    container.addElements([child200X200, child100X100]);
                    document.body.appendChild(container as unknown as Node);
                    const containerHTMLElement: HTMLElement = container as unknown as HTMLElement;
                    const domRect: DOMRect = containerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.width, 240);
                    assert.strictEqual(domRect.height, 300);
                    document.body.removeChild(container as unknown as Node);
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and childP100XP100', () => {
                    it('childP100XP100 size should be 200', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, childP100XP100]);
                        document.body.appendChild(container as unknown as Node);
                        const childP100XP100HTMLElement: HTMLElement = childP100XP100 as unknown as HTMLElement;
                        const domRect: DOMRect = childP100XP100HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.width, 200);
                        assert.strictEqual(domRect.height, 200);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and childNaNXP100', () => {
                    it('childNaNXP100 size should be 0X200', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, childNaNXP100]);
                        document.body.appendChild(container as unknown as Node);
                        const childNaNXP100HTMLElement: HTMLElement = childNaNXP100 as unknown as HTMLElement;
                        const domRect: DOMRect = childNaNXP100HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.width, 0);
                        assert.strictEqual(domRect.height, 200);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and childP100XNaN', () => {
                    it('childP100XNaN size should be 200X0', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, childP100XNaN]);
                        document.body.appendChild(container as unknown as Node);
                        const childP100XNaNHTMLElement: HTMLElement = childP100XNaN as unknown as HTMLElement;
                        const domRect: DOMRect = childP100XNaNHTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.width, 200);
                        assert.strictEqual(domRect.height, 0);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and childT0R0B0L0', () => {
                    it('childT0R0B0L0 size should be 200X200', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, childT0R0B0L0]);
                        document.body.appendChild(container as unknown as Node);
                        const childT0R0B0L0HTMLElement: HTMLElement = childT0R0B0L0 as unknown as HTMLElement;
                        const domRect: DOMRect = childT0R0B0L0HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.width, 200);
                        assert.strictEqual(domRect.height, 200);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and childL0R0', () => {
                    it('childL0R0 size should be 200X0', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, childL0R0]);
                        document.body.appendChild(container as unknown as Node);
                        const childL0R0HTMLElement: HTMLElement = childL0R0 as unknown as HTMLElement;
                        const domRect: DOMRect = childL0R0HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.width, 200);
                        assert.strictEqual(domRect.height, 0);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and childT0B0', () => {
                    it('childT0B0 size should be 0X200', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, childT0B0]);
                        document.body.appendChild(container as unknown as Node);
                        const childT0B0HTMLElement: HTMLElement = childT0B0 as unknown as HTMLElement;
                        const domRect: DOMRect = childT0B0HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.width, 0);
                        assert.strictEqual(domRect.height, 200);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and child100X100R0', () => {
                    it('child100X100R0.x should be 120', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, child100X100R0]);
                        document.body.appendChild(container as unknown as Node);
                        const child100X100R0HTMLElement: HTMLElement = child100X100R0 as unknown as HTMLElement;
                        const domRect: DOMRect = child100X100R0HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.x, 120);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and child100X100L20', () => {
                    it('child100X100L20.x should be 40', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, child100X100L20]);
                        document.body.appendChild(container as unknown as Node);
                        const child100X100L20HTMLElement: HTMLElement = child100X100L20 as unknown as HTMLElement;
                        const domRect: DOMRect = child100X100L20HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.x, 40);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and child100X100B20', () => {
                    it('child100X100B20.y should be 100', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, child100X100B20]);
                        document.body.appendChild(container as unknown as Node);
                        const child100X100B20HTMLElement: HTMLElement = child100X100B20 as unknown as HTMLElement;
                        const domRect: DOMRect = child100X100B20HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.y, 100);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and child100X100T20', () => {
                    it('child100X100T20.y should be 40', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, child100X100T20]);
                        document.body.appendChild(container as unknown as Node);
                        const child100X100T20HTMLElement: HTMLElement = child100X100T20 as unknown as HTMLElement;
                        const domRect: DOMRect = child100X100T20HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.y, 40);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container does not have explicit size', () => {
                describe('given children 200X200 and child100X100B20R20', () => {
                    it('child100X100B20R20 position should be 100, 100', () => {
                        container = new DisplayContainer();
                        container.padding = 20;
                        container.addElements([child200X200, child100X100B20R20]);
                        document.body.appendChild(container as unknown as Node);
                        const child100X100B20R20HTMLElement: HTMLElement = child100X100B20R20 as unknown as HTMLElement;
                        const domRect: DOMRect = child100X100B20R20HTMLElement.getBoundingClientRect();
                        assert.strictEqual(domRect.x, 100);
                        assert.strictEqual(domRect.y, 100);
                        document.body.removeChild(container as unknown as Node);
                    });
                });
            });
            describe('given container size 300, 300 and innerContainer has left /right 0', () => {
                it('innerContainer width should be 300', () => {
                    container = new DisplayContainer();
                    container.setSize(300, 300);
                    innerContainer = new DisplayContainer();
                    innerContainer.left = innerContainer.right = 0;
                    container.addElement(innerContainer);
                    document.body.appendChild(container as unknown as Node);
                    const innerContainerHTMLElement: HTMLElement = innerContainer as unknown as HTMLElement;
                    const domRect: DOMRect = innerContainerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.width, 300);
                    document.body.removeChild(container as unknown as Node);
                });
            });
            describe('given container size 300, 300 and innerContainer has percentHeight 100', () => {
                it('innerContainer width should be 300', () => {
                    container = new DisplayContainer();
                    container.setSize(300, 300);
                    innerContainer = new DisplayContainer();
                    innerContainer.percentHeight = 100;
                    container.addElement(innerContainer);
                    document.body.appendChild(container as unknown as Node);
                    const innerContainerHTMLElement: HTMLElement = innerContainer as unknown as HTMLElement;
                    const domRect: DOMRect = innerContainerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.height, 300);
                    document.body.removeChild(container as unknown as Node);
                });
            });
            describe('given container size 300, 300 and innerContainer has top / bottom 0', () => {
                it('innerContainer height should be 300', () => {
                    container = new DisplayContainer();
                    container.setSize(300, 300);
                    innerContainer = new DisplayContainer();
                    innerContainer.top = innerContainer.bottom = 0;
                    container.addElement(innerContainer);
                    document.body.appendChild(container as unknown as Node);
                    const innerContainerHTMLElement: HTMLElement = innerContainer as unknown as HTMLElement;
                    const domRect: DOMRect = innerContainerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.height, 300);
                    document.body.removeChild(container as unknown as Node);
                });
            });
            describe('given container size 300, 300 and innerContainer percentWidth 100', () => {
                it('innerContainer width should be 300', () => {
                    const outer: IDisplayContainer = new DisplayContainer();
                    outer.setSize(300, 300);
                    const inner: IDisplayContainer = new DisplayContainer();
                    inner.percentWidth = 100;
                    outer.addElement(inner);
                    document.body.appendChild(outer as unknown as Node);
                    const innerHTMLElement: HTMLElement = inner as unknown as HTMLElement;
                    const domRect: DOMRect = innerHTMLElement.getBoundingClientRect();
                    assert.strictEqual(domRect.width, 300);
                    document.body.removeChild(outer as unknown as Node);
                });
            });
        });
    });
    describe('AnchorLayout', () => {
        describe('Given container size 500, 500', () => {
            describe('Given child size 300, 300', () => {
                it('when child.horizontalCenter = 0, child.x should be 100', () => {
                    const container: IDisplayContainer = new DisplayContainer();
                    container.setSize(500, 500);
                    const child: IDisplayElement = new DisplayElement();
                    child.setSize(300, 300);
                    child.horizontalCenter = 0;
                    container.addElement(child);
                    document.body.appendChild(container as unknown as Node);
                    assert.strictEqual(child.x, 100);
                });
                it('when child.verticalCenter = 0, child.y should be 100', () => {
                    const container: IDisplayContainer = new DisplayContainer();
                    container.setSize(500, 500);
                    const child: IDisplayElement = new DisplayElement();
                    child.setSize(300, 300);
                    child.verticalCenter = 0;
                    container.addElement(child);
                    document.body.appendChild(container as unknown as Node);
                    assert.strictEqual(child.y, 100);
                });
            });
        });
    });
});
