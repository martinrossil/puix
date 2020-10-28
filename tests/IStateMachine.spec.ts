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
    describe('addState()', () => {
        it('when addState(state), states.has(state) should be true', () => {
            const initial: IState = new State('initial');
            const stateMachine: IStateMachine = new StateMachine(initial);
            const state: IState = new State('state');
            stateMachine.addState(state);
            assert.isTrue(stateMachine.states.has(state));
        });
    });
    describe('given start() is called, StateMachine.STATE_CHANGED should be dispatched', () => {
        const initial: IState = new State('initial');
        const stateMachine: IStateMachine = new StateMachine(initial);
        let stateChangedRecieved = false;
        stateMachine.addEventListener(StateMachine.STATE_CHANGED, () => {
            stateChangedRecieved = true;
        });
        stateMachine.start();
        assert.isTrue(stateChangedRecieved);
    });
    describe('given stop() is called, StateMachine.STATE_CHANGED should not be dispatched', () => {
        const initial: IState = new State('initial');
        const stateMachine: IStateMachine = new StateMachine(initial);
        let stateChangedRecieved = false;
        stateMachine.addEventListener(StateMachine.STATE_CHANGED, () => {
            stateChangedRecieved = true;
        });
        stateMachine.stop();
        assert.isFalse(stateChangedRecieved);
    });
    describe('given send(), StateMachine.STATE_CHANGED should be dispatched', () => {
        const initial: IState = new State('initial');
        const final: IState = new State('final');
        initial.addTransition('click', final);
        const stateMachine: IStateMachine = new StateMachine(initial);
        stateMachine.addState(final);
        let stateChangedRecieved = false;
        stateMachine.addEventListener(StateMachine.STATE_CHANGED, () => {
            stateChangedRecieved = true;
        });
        stateMachine.send(new Event('click'));
        assert.isTrue(stateChangedRecieved);
    });
    describe('given send("no state event type"), StateMachine.STATE_CHANGED should not be dispatched', () => {
        const initial: IState = new State('initial');
        const final: IState = new State('final');
        initial.addTransition('click', final);
        const stateMachine: IStateMachine = new StateMachine(initial);
        stateMachine.addState(final);
        let stateChangedRecieved = false;
        stateMachine.addEventListener(StateMachine.STATE_CHANGED, () => {
            stateChangedRecieved = true;
        });
        stateMachine.send(new Event('no state event type'));
        assert.isFalse(stateChangedRecieved);
    });
});
