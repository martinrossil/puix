import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ApplicationElement, Events, Overflow } from '../src';
import IApplicationElement from '../src/interfaces/containers/IApplicationElement';

const applicationElement: IApplicationElement = new ApplicationElement();

describe('IApplicationElement interface', () => {
    describe('default values', () => {
        it('actual size should be same as window inner size', () => {
            assert.strictEqual(applicationElement.actualWidth, window.innerWidth);
            assert.strictEqual(applicationElement.actualHeight, window.innerHeight);
        });
        it('overflow should be ' + Overflow.HIDDEN, () => {
            assert.strictEqual(applicationElement.overflow, Overflow.HIDDEN);
        });
        it('backgroundColor should be ""', () => {
            assert.strictEqual(applicationElement.backgroundColor, '');
        });
    });
    describe('dispatch APPLICATION_COMPLETE', () => {
        it('given applicationElement has been added to DOM, APPLICATION_COMPLETE event should be dispatched', () => {
            let hasBeenDispatched = false;
            applicationElement.addEventListener(Events.APPLICATION_COMPLETE, () => {
                hasBeenDispatched = true;
            });
            document.body.appendChild(applicationElement as unknown as Node);
            assert.isTrue(hasBeenDispatched);
        });
    });
    describe('physical size', () => {
        it('given applicationElement has been added to DOM, physical size should be same as window inner size', () => {
            const applicationHTMLElement: HTMLElement = applicationElement as unknown as HTMLElement;
            const domRect: DOMRect = applicationHTMLElement.getBoundingClientRect();
            assert.strictEqual(domRect.width, window.innerWidth);
            assert.strictEqual(domRect.height, window.innerHeight);
        });
    });
    describe('backgroundColor', () => {
        it('given backgroundColor = "red", backgroundColor should be "red"', () => {
            applicationElement.backgroundColor = 'red';
            assert.strictEqual(applicationElement.backgroundColor, 'red');
        });
        it('given backgroundColor is "red", document.body should be "red"', () => {
            assert.strictEqual(document.body.style.getPropertyValue('background-color'), 'red');
        });
    });
});
