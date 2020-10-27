import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IState, IStateMachine, State, StateMachine } from '../src';

describe('IStateMachine', () => {
    describe('default values', () => {
        it('initialState should be the initial argument in constructor', () => {
            const name = 'initial state';
            const state: IState = new State(name);
            const stateMachine: IStateMachine = new StateMachine(state);
            assert.strictEqual(stateMachine.initial, state);
        });
        it('currentState should be the initial argument in constructor', () => {
            const name = 'initial state';
            const state: IState = new State(name);
            const stateMachine: IStateMachine = new StateMachine(state);
            assert.strictEqual(stateMachine.current, state);
        });
    });
});
