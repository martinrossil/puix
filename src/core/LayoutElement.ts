import SizeElement from './SizeElement';
import ILayoutElement from '../interfaces/ILayoutElement';
import Events from '../consts/Events';
import IEventDispatcher from '../interfaces/IEventDispatcher';

export default class LayoutElement extends SizeElement implements ILayoutElement {
    public constructor() {
        super();
        this.name = 'LayoutElement';
    }

    private _layoutData: IEventDispatcher | null = null;

    public set layoutData(value: IEventDispatcher | null) {
        if (this._layoutData !== value) {
            if (this._layoutData) {
                this._layoutData.removeEventListener(Events.LAYOUT_DATA_CHANGED, this.invalidateDisplay);
            }
            this._layoutData = value;
            if (this._layoutData) {
                this._layoutData.addEventListener(Events.LAYOUT_DATA_CHANGED, this.invalidateDisplay);
            }
        }
    }

    public get layoutData(): IEventDispatcher | null {
        return this._layoutData;
    }
}
customElements.define('layout-element', LayoutElement);
