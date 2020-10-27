import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IState, State } from '../src';

describe('IState', () => {
    describe('default values', () => {
        it('name should be the name argument in constructor', () => {
            const name = 'state name';
            const state: IState = new State(name);
            assert.strictEqual(state.name, name);
        });
        it('event should be null', () => {
            const name = 'state name';
            const state: IState = new State(name);
            assert.isNull(state.event);
        });
    });
});
