import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, DisplayElement, HorizontalAlign, IDisplayContainer, IDisplayElement, Layout } from '../src';

describe('VerticalLayout', () => {
    describe('container internalSize', () => {
        describe('given container with padding / gap 20 and child100X100 and child200X200', () => {
            it('container size should be 240, 360', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.VERTICAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElements([child200X200, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const containerElement: HTMLElement = container as unknown as HTMLElement;
                const rect: DOMRect = containerElement.getBoundingClientRect();
                assert.strictEqual(rect.width, 240);
                assert.strictEqual(rect.height, 360);
            });
        });
        describe('given container with explicit height 400, padding / gap 20 and child100X100 and child200X200', () => {
            it('container size should be 240, 400', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.VERTICAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElements([child200X200, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const containerElement: HTMLElement = container as unknown as HTMLElement;
                const rect: DOMRect = containerElement.getBoundingClientRect();
                assert.strictEqual(rect.width, 240);
                assert.strictEqual(rect.height, 400);
            });
        });
        describe('given container with explicit height 400, padding / gap 20 and child100X100 and child200XP100', () => {
            it('child200XP100 size should 200, 240', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.VERTICAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200XP100: IDisplayElement = new DisplayElement();
                child200XP100.width = 200;
                child200XP100.percentHeight = 100;
                container.addElements([child200XP100, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const child200XP100Element: HTMLElement = child200XP100 as unknown as HTMLElement;
                const rect: DOMRect = child200XP100Element.getBoundingClientRect();
                assert.strictEqual(rect.width, 200);
                assert.strictEqual(rect.height, 240);
            });
        });
        describe('given container with explicit height 400, padding / gap 20 and child100X100 and child200XP150', () => {
            it('child200XP150 size should 200, 240', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.VERTICAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200XP150: IDisplayElement = new DisplayElement();
                child200XP150.width = 200;
                child200XP150.percentHeight = 150;
                container.addElements([child200XP150, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const child200XP150Element: HTMLElement = child200XP150 as unknown as HTMLElement;
                const rect: DOMRect = child200XP150Element.getBoundingClientRect();
                assert.strictEqual(rect.width, 200);
                assert.strictEqual(rect.height, 240);
            });
        });
        describe('given container with explicit width 400, childNaNX100 and horizontalAlign.FILL', () => {
            it('childNaNX100 size should 400, 100', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.width = 400;
                container.layout = Layout.VERTICAL;
                container.horizontalAlign = HorizontalAlign.FILL;
                const childNaNX100: IDisplayElement = new DisplayElement();
                childNaNX100.height = 100;
                container.addElement(childNaNX100);
                document.body.appendChild(container as unknown as Node);
                const childNaNX100Element: HTMLElement = childNaNX100 as unknown as HTMLElement;
                const rect: DOMRect = childNaNX100Element.getBoundingClientRect();
                assert.strictEqual(rect.width, 400);
                assert.strictEqual(rect.height, 100);
            });
        });
    });
});
