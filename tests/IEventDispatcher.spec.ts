import { assert } from 'chai';
import { describe, it } from 'mocha';
import IEventDispatcher from '../src/interfaces/IEventDispatcher';
import EventDispatcherElement from '../src/core/EventDispatcherElement';

const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
let hasListenerBeenCalled = false;
eventDispatcherElement.addEventListener('test', (e: CustomEvent) => {
    console.log('test event type handler.', e.type, e.detail);
    hasListenerBeenCalled = true;
});

describe('IEventDispatcher interface', () => {
    it('default name should be ""', () => {
        assert.strictEqual(eventDispatcherElement.name, '');
    });
    it('given name is "", when name = "ComponentName", name should be "ComponentName"', () => {
        eventDispatcherElement.name = 'ComponentName';
        assert.strictEqual(eventDispatcherElement.name, 'ComponentName');
    });
    it('given addEventListener("test", (e) => {}), when dispatchEventWith("test"), handler should be called', () => {
        eventDispatcherElement.dispatchEventWith('test', this);
        assert.isTrue(hasListenerBeenCalled);
    });
});
