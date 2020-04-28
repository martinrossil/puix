import { assert } from 'chai';
import { describe, it } from 'mocha';
import IEventDispatcher from '../src/interfaces/IEventDispatcher';
import EventDispatcherElement from '../src/core/EventDispatcherElement';

const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
let handlerHasBeenCalled = false;
eventDispatcherElement.addEventListener('test', () => {
    handlerHasBeenCalled = true;
});

describe('IEventDispatcher interface', () => {
    describe('default values', () => {
        it('default name should be ""', () => {
            assert.strictEqual(eventDispatcherElement.name, '');
        });
    });
    describe('name', () => {
        it('given name is "", when name = "ComponentName", name should be "ComponentName"', () => {
            eventDispatcherElement.name = 'ComponentName';
            assert.strictEqual(eventDispatcherElement.name, 'ComponentName');
        });
    });
    describe('addEventListener()', () => {
        it('given addEventListener(), when dispatchEventWith("type"), handler should have been called', () => {
            eventDispatcherElement.dispatchEventWith('test', this);
            assert.isTrue(handlerHasBeenCalled);
        });
    });
});
