import { assert } from 'chai';
import { describe, it } from 'mocha';
import { EventDispatcher, EventDispatcherElement, IEventDispatcher, IEventListener } from '../src';

describe('IEventDispatcher interface', () => {
    describe('default values', () => {
        it('default name should be ""', () => {
            const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            assert.strictEqual(eventDispatcherElement.name, '');
            assert.strictEqual(eventDispatcher.name, '');
        });
    });
    describe('name', () => {
        it('given name is "", when name = "ComponentName", name should be "ComponentName"', () => {
            const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcherElement.name = 'ComponentName';
            eventDispatcher.name = 'ComponentName';
            assert.strictEqual(eventDispatcherElement.name, 'ComponentName');
            assert.strictEqual(eventDispatcher.name, 'ComponentName');
        });
        it('given name is "", when name = "", name should be ""', () => {
            const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcherElement.name = '';
            eventDispatcher.name = '';
            assert.strictEqual(eventDispatcherElement.name, '');
            assert.strictEqual(eventDispatcher.name, '');
        });
    });
    describe('addEventListener()', () => {
        it('given addEventListener(), when dispatchEventWith("type"), handler should have been called', () => {
            const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            let handlerHasBeenCalled = false;
            let handlerHasBeenCalled2 = false;
            eventDispatcherElement.addEventListener('test', () => {
                handlerHasBeenCalled = true;
            });
            eventDispatcher.addEventListener('test', () => {
                handlerHasBeenCalled2 = true;
            });
            eventDispatcherElement.dispatchEventWith('test', this, false);
            eventDispatcher.dispatchEventWith('test', this, false);
            assert.isTrue(handlerHasBeenCalled);
            assert.isTrue(handlerHasBeenCalled2);
        });
        it('given addEventListener() is called twice, addEventListener should be covered', () => {
            let handlerHasBeenCalled = false;
            let handlerHasBeenCalled2 = false;
            const eventHandler: IEventListener = () => {
                handlerHasBeenCalled = true;
            };
            const eventHandler2: IEventListener = () => {
                handlerHasBeenCalled2 = true;
            };
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcher.addEventListener('test', eventHandler);
            eventDispatcher.addEventListener('test', eventHandler2);
            eventDispatcher.dispatchEvent(new Event('test'));
            eventDispatcher.dispatchEvent(new Event('test'));
            assert.isTrue(handlerHasBeenCalled);
            assert.isTrue(handlerHasBeenCalled2);
        });
    });
    describe('removeEventListener()', () => {
        it('given removeEventListener(), when dispatchEventWith("type"), handler should NOT have been called', () => {
            const eventDispatcherElement: IEventDispatcher = new EventDispatcherElement();
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            let handlerHasBeenCalled = false;
            let handlerHasBeenCalled2 = false;
            const eventHandler: IEventListener = () => {
                handlerHasBeenCalled = true;
            };
            const eventHandler2: IEventListener = () => {
                handlerHasBeenCalled2 = true;
            };
            eventDispatcherElement.addEventListener('test', eventHandler);
            eventDispatcher.addEventListener('test', eventHandler2);
            eventDispatcherElement.removeEventListener('test', eventHandler);
            eventDispatcher.removeEventListener('test', eventHandler2);
            eventDispatcherElement.dispatchEventWith('test', this, false);
            eventDispatcher.dispatchEventWith('test', this, false);
            assert.isFalse(handlerHasBeenCalled);
            assert.isFalse(handlerHasBeenCalled2);
        });
        it('given addEventListener() is called twice, removeEventListener() twice should be covered', () => {
            let handlerHasBeenCalled = false;
            let handlerHasBeenCalled2 = false;
            const eventHandler: IEventListener = () => {
                handlerHasBeenCalled = true;
            };
            const eventHandler2: IEventListener = () => {
                handlerHasBeenCalled2 = true;
            };
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcher.addEventListener('test', eventHandler);
            eventDispatcher.addEventListener('test', eventHandler2);
            eventDispatcher.removeEventListener('test', eventHandler);
            eventDispatcher.removeEventListener('test', eventHandler2);
            assert.isFalse(handlerHasBeenCalled);
            assert.isFalse(handlerHasBeenCalled2);
        });
        it('given removeEventListener() with unknown listener', () => {
            let handlerHasBeenCalled = false;
            const eventHandler: IEventListener = () => {
                handlerHasBeenCalled = true;
            };
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcher.removeEventListener('test', eventHandler);
            assert.isFalse(handlerHasBeenCalled);
        });
        it('given removeEventListener() with known and unknown listener', () => {
            let handlerHasBeenCalled = false;
            let handlerHasBeenCalled2 = false;
            const eventHandler: IEventListener = () => {
                handlerHasBeenCalled = true;
            };
            const eventHandler2: IEventListener = () => {
                handlerHasBeenCalled2 = true;
            };
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcher.addEventListener('test', eventHandler);
            eventDispatcher.removeEventListener('test', eventHandler2);
            eventDispatcher.removeEventListener('test', eventHandler);
            assert.isFalse(handlerHasBeenCalled);
            assert.isFalse(handlerHasBeenCalled2);
        });
    });
    describe('dispatchEvent()', () => {
        it('given there are listeners, dispatchEvent should cover typeListeners !== undefined', () => {
            const listener: IEventListener = () => {
                console.log('listener triggered');
            };
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcher.addEventListener('test', listener);
            eventDispatcher.dispatchEvent(new Event('test'));
        });
        it('given there are listeners, dispatchEvent with unknown type should cover else clause', () => {
            const listener: IEventListener = () => {
                console.log('listener triggered');
            };
            const eventDispatcher: IEventDispatcher = new EventDispatcher();
            eventDispatcher.addEventListener('test', listener);
            eventDispatcher.dispatchEvent(new Event('no_type'));
        });
    });
});
