import DisplayContainer from './DisplayContainer';
import ILayoutContainer from '../interfaces/ILayoutContainer';
import ILayout from '../interfaces/ILayout';
import BaseLayout from '../layouts/BaseLayout';

export default class LayoutContainer extends DisplayContainer implements ILayoutContainer {
    public constructor() {
        super();
    }

    protected commitProperties(): void {
        super.commitProperties();
        if (this._layoutChanged) {
            this._layoutChanged = false;
            this.layout.updateLayout(this);
        }
    }

    private _layout: ILayout = new BaseLayout();
    private _layoutChanged = false;
    public set layout(value: ILayout) {
        if (this._layout === value) {
            return;
        }
        this._layout = value;
        this._layoutChanged = true;
        this.invalidateProperties();
    }
}
customElements.define('layout-container', LayoutContainer);
