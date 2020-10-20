import { assert } from 'chai';
import { describe, it } from 'mocha';
import { EventDispatcher, EventDispatcherElement, IEventDispatcher, IEventListener } from '../src';

let handlerHasBeenCalled = false;
let handlerHasBeenCalled2 = false;
const handler: IEventListener = () => {
    handlerHasBeenCalled = true;
};
const handler2: IEventListener = () => {
    handlerHasBeenCalled2 = true;
};
const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
eventDispatcherElement.addEventListener('test', handler);

const eventDispatcher: IEventDispatcher = new EventDispatcher();
eventDispatcher.addEventListener('test', handler2);

describe('EventDispatcherInterface interface', () => {
    describe('default values', () => {
        it('default name should be ""', () => {
            assert.strictEqual(eventDispatcherElement.name, '');
            assert.strictEqual(eventDispatcher.name, '');
        });
    });
    describe('name', () => {
        it('given name is "", when name = "ComponentName", name should be "ComponentName"', () => {
            eventDispatcherElement.name = 'ComponentName';
            eventDispatcher.name = 'ComponentName';
            assert.strictEqual(eventDispatcherElement.name, 'ComponentName');
            assert.strictEqual(eventDispatcher.name, 'ComponentName');
        });
    });
    describe('addEventListener()', () => {
        it('given addEventListener(), when dispatchEventWith("type"), handler should have been called', () => {
            eventDispatcherElement.dispatchEventWith('test', this, false);
            eventDispatcher.dispatchEventWith('test', this, false);
            assert.isTrue(handlerHasBeenCalled);
            assert.isTrue(handlerHasBeenCalled2);
        });
    });
    describe('removeEventListener()', () => {
        it('given removeEventListener(), when dispatchEventWith("type"), handler should NOT have been called', () => {
            handlerHasBeenCalled = false;
            handlerHasBeenCalled2 = false;
            eventDispatcher.removeEventListener('test', handler2);
            eventDispatcherElement.removeEventListener('test', handler);
            eventDispatcherElement.dispatchEventWith('test', this, false);
            eventDispatcher.dispatchEventWith('test', this, false);
            assert.isFalse(handlerHasBeenCalled);
            assert.isFalse(handlerHasBeenCalled2);
        });
    });
});
