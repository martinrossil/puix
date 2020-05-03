import SizeElement from '../core/SizeElement';
import IDisplayElement from '../interfaces/IDisplayElement';
import ILayoutData from '../interfaces/ILayoutData';
import Events from '../enums/Events';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
    }

    private _backgroundColor = '';

    public set backgroundColor(value: string) {
        this._backgroundColor = value;
        this.style.backgroundColor = value;
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    private _opacity = 1;

    public set opacity(value: number) {
        if (isNaN(value)) {
            this._opacity = 1;
        } else if (value < 0) {
            this._opacity = 0;
        } else if (value > 1) {
            this._opacity = 1;
        } else {
            this._opacity = value;
        }
        this.style.opacity = this._opacity.toString();
    }

    public get opacity(): number {
        return this._opacity;
    }

    private _layoutData: ILayoutData | null = null;

    public set layoutData(value: ILayoutData | null) {
        if (this._layoutData !== value) {
            this._layoutData = value;
            if (this._layoutData) {
                this._layoutData.hostElement = this;
            }
            if (this.connected) {
                this.dispatchEventWith(Events.LAYOUT_DATA_CHANGED, this);
            }
        }
    }

    public get layoutData(): ILayoutData | null {
        return this._layoutData;
    }
}
customElements.define('display-element', DisplayElement);
