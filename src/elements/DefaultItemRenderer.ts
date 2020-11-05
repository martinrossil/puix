import DisplayContainer from '../containers/DisplayContainer'
import IItemRenderer from '../interfaces/data/IItemRenderer';
import ILabelElement from '../interfaces/text/ILabelElement';
import LabelElement from '../text/LabelElement';

export default class DefaultItemRenderer<Item> extends DisplayContainer implements IItemRenderer<Item> {
    public constructor() {
        super();
        this.name = 'DefaultItemRenderer'
        this.height = 32;
        this.addElement(this.label);
    }

    private _label!: ILabelElement;

    protected get label(): ILabelElement {
        if (!this._label) {
            this._label = new LabelElement();
            this._label.verticalCenter = 0;
            this._label.left = 16;
            this._label.right = 16;
            this._label.top = 8;
            this._label.text = this.name;
        }
        return this._label;
    }

    private _data: Item | null = null;

    public set data(value: Item | null) {
        if (this._data === value) {
            return;
        }
        this._data = value;
    }

    public get data(): Item | null {
        return this._data;
    }
}
customElements.define('default-item-renderer', DefaultItemRenderer);
