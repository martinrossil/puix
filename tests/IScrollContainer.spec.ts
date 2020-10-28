import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IScrollContainer, ScrollContainer } from '../src';

describe('IScrollContainer', () => {
    describe('default values', () => {
        it('name should be ScrollContainer', () => {
            const scrollContainer: IScrollContainer = new ScrollContainer();
            assert.strictEqual(scrollContainer.name, 'ScrollContainer');
        });
    });
});
