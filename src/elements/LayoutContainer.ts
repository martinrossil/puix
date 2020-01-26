import DisplayContainer from './DisplayContainer';
import ILayoutContainer from '../interfaces/ILayoutContainer';
import ILayout from '../interfaces/ILayout';

export default class LayoutContainer extends DisplayContainer implements ILayoutContainer {
    public constructor() {
        super();
    }

    protected internalSizeInvalidChanged(): void {
        super.internalSizeInvalidChanged();
        console.log('LayoutContainer internalSizeInvalidChanged()');
        if (this.layout) {
            this.layout.updateLayout(this);
        } else {
            this.setActualSizeFromElements();
        }
    }

    protected commitProperties(): void {
        super.commitProperties();
        if (this._layoutChanged) {
            this.layoutChanged();
        }
    }

    protected layoutChanged(): void {
        this._layoutChanged = false;
        if (this.layout) {
            this.layout.updateLayout(this);
        } else {
            this.setActualSizeFromElements();
        }
    }

    private _layout: ILayout | null = null;
    private _layoutChanged = false;
    public set layout(value: ILayout) {
        if (this._layout === value) {
            return;
        }
        this._layout = value;
        this._layoutChanged = true;
        this.invalidateProperties();
    }

    public get layout(): ILayout {
        return this._layout;
    }
}
customElements.define('layout-container', LayoutContainer);
