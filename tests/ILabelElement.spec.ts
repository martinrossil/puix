import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ILabelElement, LabelElement } from '../src';

describe('ILabelElement', () => {
    describe('updateDisplay() should be called', () => {
        it('connect should be true', () => {
            const labelElement: ILabelElement = new LabelElement();
            labelElement.text = 'Hello';
            document.body.appendChild(labelElement as unknown as Node);
            assert.isTrue(labelElement.connected);
        });
    });
});
