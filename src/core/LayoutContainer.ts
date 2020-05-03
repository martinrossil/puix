import DisplayContainer from './DisplayContainer';
import ILayoutContainer from '../interfaces/ILayoutContainer';
import ILayout from '../interfaces/ILayout';

export default class LayoutContainer extends DisplayContainer implements ILayoutContainer {
    public constructor() {
        super();
        this.name = 'LayoutContainer';
        this.invalidateDisplay = this.invalidateDisplay.bind(this);
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
