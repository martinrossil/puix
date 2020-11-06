import DisplayContainer from '../containers/DisplayContainer'
import IItemRenderer from '../interfaces/data/IItemRenderer';

export default class BaseItemRenderer<Item> extends DisplayContainer implements IItemRenderer<Item> {
    public constructor() {
        super();
        this.name = 'BaseItemRenderer'
    }

    protected dataChanged(): void {
        // override
    }

    protected selectedChanged(): void {
        // override
    }

    private _data: Item | null = null;

    public set data(value: Item | null) {
        if (this._data === value) {
            return;
        }
        this._data = value;
        this.dataChanged();
    }

    public get data(): Item | null {
        return this._data;
    }

    private _selected = false;

    public set selected(value: boolean) {
        if (this._selected === value) {
            return;
        }
        this._selected = value;
        this.selectedChanged();
    }

    public get selected(): boolean {
        return this._selected;
    }
}
customElements.define('base-item-renderer', BaseItemRenderer);
