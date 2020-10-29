import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, IDisplayContainer, ITextElement, ITypeFace, TextElement } from '../src';

describe('ITextElement', () => {
    describe('default values', () => {
        it('verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            assert.strictEqual(textElement.verticalGap, 4);
        });
        it('typeFace should not be null', () => {
            const textElement: ITextElement = new TextElement();
            assert.isNotNull(textElement.typeFace);
        });
    });
    describe('verticalGap', () => {
        it('given verticalGap is 4, when verticalGap = 4, verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            textElement.verticalGap = 4;
            assert.strictEqual(textElement.verticalGap, 4);
        });
        it('given verticalGap is 4, when verticalGap = -4, verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            textElement.verticalGap = -4;
            assert.strictEqual(textElement.verticalGap, -4);
        });
        it('given verticalGap is 4, when verticalGap = NaN, verticalGap should be 4', () => {
            const textElement: ITextElement = new TextElement();
            textElement.verticalGap = NaN;
            assert.strictEqual(textElement.verticalGap, 4);
        });
    });
    describe('typeFace', () => {
        it('given typeFace is not null, when typeFace = typeFace, set should return early', () => {
            const textElement: ITextElement = new TextElement();
            const typeFace: ITypeFace = textElement.typeFace;
            textElement.typeFace = typeFace;
        });
    });
    describe('protected hasExplicitWidth', () => {
        it('given IBaseText width is 100, hasExplicitWidth should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.width = 100;
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.width, 100);
        });
        it('given IBaseText percentWidth is 100, hasExplicitWidth should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.percentWidth = 100;
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.percentWidth, 100);
        });
        it('given IBaseText left and right is 20, hasExplicitWidth should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.left = 20;
            textElement.right = 20;
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.left, 20);
            assert.strictEqual(textElement.right, 20);
        });
    });
    describe('protected hasExplicitHeight', () => {
        it('given IBaseText height is 100, hasExplicitHeight should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.height = 100;
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.height, 100);
        });
        it('given IBaseText percentHeight is 100, hasExplicitHeight should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.percentHeight = 100;
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.percentHeight, 100);
        });
        it('given IBaseText top and bottom is 20, hasExplicitHeight should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.top = 20;
            textElement.bottom = 20;
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.top, 20);
            assert.strictEqual(textElement.bottom, 20);
        });
    });
    describe('protected hasExplicitSize', () => {
        it('given IBaseText size is 100, 100, hasExplicitSize should return true', () => {
            const container: IDisplayContainer = new DisplayContainer();
            const textElement: ITextElement = new TextElement();
            textElement.setSize(100, 100);
            textElement.text = 'Lorem';
            container.addElement(textElement);
            document.body.appendChild(container as unknown as Node);
            assert.strictEqual(textElement.width, 100);
            assert.strictEqual(textElement.height, 100);
        });
    });
});
