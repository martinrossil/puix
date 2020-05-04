import DisplayContainer from './DisplayContainer';
import ILayoutContainer from '../interfaces/ILayoutContainer';
import ILayout from '../interfaces/ILayout';
import Events from '../enums/Events';

export default class LayoutContainer extends DisplayContainer implements ILayoutContainer {
    public constructor() {
        super();
        this.name = 'LayoutContainer';
        this.invalidateDisplay = this.invalidateDisplay.bind(this);
        this.addEventListener(Events.LAYOUT_DATA_CHANGED, this.layoutDataChanged as EventListener);
    }

    protected layoutDataChanged(e: CustomEvent): void {
        if (e.target !== this) {
            e.stopImmediatePropagation();
            this.invalidateDisplay();
        }
    }

    protected updateDisplay(): void {
        if (this.layout) {
            this.layout.updateLayout(this);
        } else {
            super.updateDisplay();
        }
    }

    private _layout: ILayout | null = null;

    public set layout(value: ILayout | null) {
        if (this._layout !== value) {
            this._layout = value;
            this.invalidateDisplay();
        }
    }

    public get layout(): ILayout | null {
        return this._layout;
    }
}
customElements.define('layout-container', LayoutContainer);
