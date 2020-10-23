import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, DisplayElement, HorizontalAlign, IDisplayContainer, IDisplayElement, Layout, VerticalAlign } from '../src';

describe('VerticalLayout', () => {
    describe('container internalSize', () => {
        describe('given container with padding / gap 20 and child100X100 and child200X200', () => {
            it('container size should be 240, 360', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.HORIZONTAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElements([child200X200, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const containerElement: HTMLElement = container as unknown as HTMLElement;
                const rect: DOMRect = containerElement.getBoundingClientRect();
                assert.strictEqual(rect.width, 360);
                assert.strictEqual(rect.height, 240);
            });
        });
        describe('given container explicit height 400, with padding / gap 20 and child100X100 and child200X200', () => {
            it('container size should be 240, 360', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.HORIZONTAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElements([child200X200, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const containerElement: HTMLElement = container as unknown as HTMLElement;
                const rect: DOMRect = containerElement.getBoundingClientRect();
                assert.strictEqual(rect.width, 360);
                assert.strictEqual(rect.height, 400);
            });
        });
        describe('given container explicit width 400, with padding / gap 20 and child100X100 and childP150X200', () => {
            it('childP150X200 size should be 240, 200', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.width = 400;
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.HORIZONTAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const childP150X200: IDisplayElement = new DisplayElement();
                childP150X200.percentWidth = 150;
                childP150X200.height = 200;
                container.addElements([childP150X200, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const childP150X200Element: HTMLElement = childP150X200 as unknown as HTMLElement;
                const rect: DOMRect = childP150X200Element.getBoundingClientRect();
                assert.strictEqual(rect.width, 240);
                assert.strictEqual(rect.height, 200);
            });
        });
        describe('given container explicit height 400, with padding / gap 20 and child100X100 and child200XP150', () => {
            it('child200XP150 size should be 200, 360', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.padding = 20;
                container.gap = 20;
                container.layout = Layout.HORIZONTAL;
                const child100X100: IDisplayElement = new DisplayElement();
                child100X100.setSize(100, 100);
                const child200XP150: IDisplayElement = new DisplayElement();
                child200XP150.percentHeight = 150;
                child200XP150.width = 200;
                container.addElements([child200XP150, child100X100]);
                document.body.appendChild(container as unknown as Node);
                const child200XP150Element: HTMLElement = child200XP150 as unknown as HTMLElement;
                const rect: DOMRect = child200XP150Element.getBoundingClientRect();
                assert.strictEqual(rect.width, 200);
                assert.strictEqual(rect.height, 360);
            });
        });
        describe('given container with explicit height 400 and child200XP75', () => {
            it('child200XP75 size should 200, 300', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.layout = Layout.HORIZONTAL;
                const child200XP75: IDisplayElement = new DisplayElement();
                child200XP75.percentHeight = 75;
                child200XP75.width = 200;
                container.addElement(child200XP75);
                document.body.appendChild(container as unknown as Node);
                const child200XP75Element: HTMLElement = child200XP75 as unknown as HTMLElement;
                const rect: DOMRect = child200XP75Element.getBoundingClientRect();
                assert.strictEqual(rect.width, 200);
                assert.strictEqual(rect.height, 300);
            });
        });
        describe('given container with explicit height 400 and verticalAlign.FILL', () => {
            it('child200XNaN size should 200, 400', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.layout = Layout.HORIZONTAL;
                container.verticalAlign = VerticalAlign.FILL;
                const child200XNaN: IDisplayElement = new DisplayElement();
                child200XNaN.width = 200;
                container.addElement(child200XNaN);
                document.body.appendChild(container as unknown as Node);
                const child200XNaNElement: HTMLElement = child200XNaN as unknown as HTMLElement;
                const rect: DOMRect = child200XNaNElement.getBoundingClientRect();
                assert.strictEqual(rect.width, 200);
                assert.strictEqual(rect.height, 400);
            });
        });
        describe('given container with explicit height 400 and verticalAlign.TOP', () => {
            it('child200X200 y should be 0', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.layout = Layout.HORIZONTAL;
                container.verticalAlign = VerticalAlign.TOP;
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElement(child200X200);
                document.body.appendChild(container as unknown as Node);
                const child200X200Element: HTMLElement = child200X200 as unknown as HTMLElement;
                const rect: DOMRect = child200X200Element.getBoundingClientRect();
                assert.strictEqual(rect.y, 0);
            });
        });
        describe('given container with explicit height 400 and verticalAlign.MIDDLE', () => {
            it('child200X200 y should be 100', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.layout = Layout.HORIZONTAL;
                container.verticalAlign = VerticalAlign.MIDDLE;
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElement(child200X200);
                document.body.appendChild(container as unknown as Node);
                const child200X200Element: HTMLElement = child200X200 as unknown as HTMLElement;
                const rect: DOMRect = child200X200Element.getBoundingClientRect();
                assert.strictEqual(rect.y, 100);
            });
        });
        describe('given container with explicit height 400 and verticalAlign.BOTTOM', () => {
            it('child200X200 y should be 200', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.layout = Layout.HORIZONTAL;
                container.verticalAlign = VerticalAlign.BOTTOM;
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElement(child200X200);
                document.body.appendChild(container as unknown as Node);
                const child200X200Element: HTMLElement = child200X200 as unknown as HTMLElement;
                const rect: DOMRect = child200X200Element.getBoundingClientRect();
                assert.strictEqual(rect.y, 200);
            });
        });
        describe('given container with explicit height 400 and verticalAlign.FILL', () => {
            it('child200X200 y should be 200', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.height = 400;
                container.layout = Layout.HORIZONTAL;
                container.verticalAlign = VerticalAlign.FILL;
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElement(child200X200);
                document.body.appendChild(container as unknown as Node);
                const child200X200Element: HTMLElement = child200X200 as unknown as HTMLElement;
                const rect: DOMRect = child200X200Element.getBoundingClientRect();
                assert.strictEqual(rect.y, 100);
            });
        });
        describe('given container with explicit width 400 and horizontalAlign.MIDDLE', () => {
            it('child200X200 x should be 100', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.width = 400;
                container.layout = Layout.HORIZONTAL;
                container.horizontalAlign = HorizontalAlign.CENTER;
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElement(child200X200);
                document.body.appendChild(container as unknown as Node);
                const child200X200Element: HTMLElement = child200X200 as unknown as HTMLElement;
                const rect: DOMRect = child200X200Element.getBoundingClientRect();
                assert.strictEqual(rect.x, 100);
            });
        });
        describe('given container with explicit width 400 and horizontalAlign.RIGHT', () => {
            it('child200X200 x should be 200', () => {
                const container: IDisplayContainer = new DisplayContainer();
                container.width = 400;
                container.layout = Layout.HORIZONTAL;
                container.horizontalAlign = HorizontalAlign.RIGHT;
                const child200X200: IDisplayElement = new DisplayElement();
                child200X200.setSize(200, 200);
                container.addElement(child200X200);
                document.body.appendChild(container as unknown as Node);
                const child200X200Element: HTMLElement = child200X200 as unknown as HTMLElement;
                const rect: DOMRect = child200X200Element.getBoundingClientRect();
                assert.strictEqual(rect.x, 200);
            });
        });
    });
});
