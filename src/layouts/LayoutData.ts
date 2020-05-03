import EventDispatcher from '../core/EventDispatcher';
import ILayoutData from '../interfaces/ILayoutData';
import IDisplayElement from '../interfaces/IDisplayElement';
import Events from '../enums/Events';

export default class LayoutData extends EventDispatcher implements ILayoutData {
    public constructor() {
        super();
        this.name = 'LayoutData';
    }

    private _percentWidth = NaN;

    public set percentWidth(value: number) {
        if (isNaN(this._percentWidth) && isNaN(value)) {
            return;
        }
        if (this._percentWidth !== value) {
            if (!isNaN(value)) {
                if (value < 0) {
                    if (this._percentWidth !== 0) {
                        this._percentWidth = 0;
                        this.notifyIfPossible();
                    }
                } else {
                    this._percentWidth = value;
                    this.notifyIfPossible();
                }
            } else {
                this._percentWidth = value;
                this.notifyIfPossible();
            }
        }
    }

    public get percentWidth(): number {
        return this._percentWidth;
    }

    private _percentHeight = NaN;

    public set percentHeight(value: number) {
        if (isNaN(this._percentHeight) && isNaN(value)) {
            return;
        }
        if (this._percentHeight !== value) {
            if (!isNaN(value)) {
                if (value < 0) {
                    if (this._percentHeight !== 0) {
                        this._percentHeight = 0;
                        this.notifyIfPossible();
                    }
                } else {
                    this._percentHeight = value;
                    this.notifyIfPossible();
                }
            } else {
                this._percentHeight = value;
                this.notifyIfPossible();
            }
        }
    }

    public get percentHeight(): number {
        return this._percentHeight;
    }

    private _hostElement: IDisplayElement | null = null;

    public set hostElement(value: IDisplayElement | null) {
        if (this._hostElement !== value) {
            this._hostElement = value;
        }
    }

    public get hostElement(): IDisplayElement | null {
        return this._hostElement;
    }

    protected notifyIfPossible(): void {
        if (this.hostElement && this.hostElement.connected) {
            this.hostElement.dispatchEventWith(Events.LAYOUT_DATA_CHANGED, this.hostElement);
        }
    }
}
