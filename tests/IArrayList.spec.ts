import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ArrayList, Events, IArrayList } from '../src';

describe('IArrayList interface', () => {
    describe('default values', () => {
        it('length should be 0', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            assert.strictEqual(arrayList.length, 0);
        });
        it('arrayData should be empty', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            assert.strictEqual(arrayList.arrayData.length, 0);
        });
    });
    describe('addItem(item: Item)', () => {
        it('given the IArrayList is empty, addItem("bob"), arrayData should include "bob"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItem('bob');
            assert.isTrue(arrayList.arrayData.includes('bob'));
            assert.strictEqual(arrayList.length, 1);
        });
    });
    describe('removeItem(item: Item)', () => {
        it('given the IArrayList includeds "bob", when removeItem("bob"), arrayData should not include "bob"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItem('bob');
            arrayList.removeItem('bob');
            assert.isFalse(arrayList.arrayData.includes('bob'));
            assert.strictEqual(arrayList.length, 0);
        });
        it('given the IArrayList does not include "bob", when removeItem("bob"), arrayData should not include "bob"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.removeItem('bob');
            assert.isFalse(arrayList.arrayData.includes('bob'));
            assert.strictEqual(arrayList.length, 0);
        });
    });
    describe('dispatching Event.ITEM_ADDED', () => {
        it('addItem(item: Item) should dispatch Event.ITEM_ADDED with detail === item', () => {
            let itemAddedRecieved = false;
            let item = '';
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addEventListener(Events.ITEM_ADDED, (e: CustomEvent<string>) => {
                itemAddedRecieved = true;
                item = e.detail;
            })
            arrayList.addItem('bob');
            assert.isTrue(itemAddedRecieved);
            assert.strictEqual(item, 'bob');
        });
    });
    describe('dispatching Event.ITEM_REMOVED', () => {
        it('removeItem(item: Item) should dispatch Event.ITEM_REMOVED with detail === item', () => {
            let itemRemovedRecieved = false;
            let removedItem = '';
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            arrayList.addEventListener(Events.ITEM_REMOVED, (e: CustomEvent<string>) => {
                itemRemovedRecieved = true;
                removedItem = e.detail;
            })
            arrayList.removeItem('bob');
            assert.isTrue(itemRemovedRecieved);
            assert.strictEqual(removedItem, 'bob');
        });
    });
    describe('addItems(items: String[])', () => {
        it('given the IArrayList is empty, addItems("bob", "alice"), arrayData should include "bob" and "alice"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            assert.isTrue(arrayList.arrayData.includes('bob'));
            assert.isTrue(arrayList.arrayData.includes('alice'));
            assert.strictEqual(arrayList.length, 2);
        });
    });
    describe('getItemIndex(item: Item): number, given the IArrayList includes "bob" and "alice"', () => {
        it('when getItemIndex("bob"), index should be 0', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            const bobIndex = arrayList.getItemIndex('bob');
            assert.strictEqual(bobIndex, 0);
        });
        it('when getItemIndex("alice"), index should be 1', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            const aliceIndex = arrayList.getItemIndex('alice');
            assert.strictEqual(aliceIndex, 1);
        });
        it('when getItemIndex("not in array"), index should be -1', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            const notIndex = arrayList.getItemIndex('not in array');
            assert.strictEqual(notIndex, -1);
        });
    });
    describe('getItemAt(index: number): Item | null, given the IArrayList includes "bob" and "alice"', () => {
        it('when getItemAt(0), item should be "bob"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            const bobItem: string = arrayList.getItemAt(0);
            assert.strictEqual(bobItem, 'bob');
        });
        it('when getItemAt(1), item should be "alice"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            const aliceItem: string = arrayList.getItemAt(1);
            assert.strictEqual(aliceItem, 'alice');
        });
        it('when getItemAt(2), item should be null', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            const nullItem: string = arrayList.getItemAt(2);
            assert.isNull(nullItem);
        });
    });
    describe('removeItemAt(index: number): void, given the IArrayList includes "bob" and "alice"', () => {
        it('when removeItemAt(0), IArrayList should not include "bob"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            arrayList.removeItemAt(0);
            assert.isFalse(arrayList.arrayData.includes('bob'));
            assert.strictEqual(arrayList.length, 1);
        });
        it('when removeItemAt(0), IArrayList should not include "bob"', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItem('bob');
            arrayList.removeItemAt(0);
            assert.isFalse(arrayList.arrayData.includes('bob'));
            assert.strictEqual(arrayList.length, 0);
        });
        it('given arrayList is empty, when removeItemAt(0), ITEM_REMOVED should not be dispatched', () => {
            const arrayList: IArrayList<string> = new ArrayList();
            let removeItemRecieved = false;
            arrayList.addEventListener(Events.ITEM_REMOVED, () => {
                removeItemRecieved = true;
            });
            arrayList.removeItemAt(0);
            assert.isFalse(removeItemRecieved);
        });
    });
    describe('dispatching Event.ITEMS_ADDED', () => {
        it('when addItems(["bob", "alice"]), Events.ITEMS_ADDED should be dispatched', () => {
            let itemsAddedRecieved = false;
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addEventListener(Events.ITEMS_ADDED, () => {
                itemsAddedRecieved = true;
            });
            arrayList.addItems(['bob', 'alice']);
            assert.isTrue(itemsAddedRecieved);
            assert.strictEqual(arrayList.length, 2);
        });
    });
    describe('dispatching Event.RESET', () => {
        it('given the IArrayList includes "bob" and "alice", when removeAll(), Events.RESET should be dispatched', () => {
            let resetRecieved = false;
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addItems(['bob', 'alice']);
            arrayList.addEventListener(Events.RESET, () => {
                resetRecieved = true;
            });
            arrayList.removeAll();
            assert.isTrue(resetRecieved);
            assert.strictEqual(arrayList.length, 0);
            assert.isFalse(arrayList.arrayData.includes('bob'));
            assert.isFalse(arrayList.arrayData.includes('alice'));
        });
        it('given the IArrayList is empty, when removeAll(), Events.RESET should not be dispatched', () => {
            let resetRecieved = false;
            const arrayList: IArrayList<string> = new ArrayList();
            arrayList.addEventListener(Events.RESET, () => {
                resetRecieved = true;
            });
            arrayList.removeAll();
            assert.isFalse(resetRecieved);
        });
    });
});
