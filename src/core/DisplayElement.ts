import SizeElement from '../core/SizeElement';
import IDisplayElement from '../interfaces/IDisplayElement';
import ILayoutData from '../interfaces/ILayoutData';
import Events from '../enums/Events';
import Styles from '../enums/Styles';
import Values from '../enums/Values';
import Overflow from '../enums/Overflow';

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
            } else {
            }
            if (this.connected) {
                this.dispatchEventWith(Events.LAYOUT_DATA_CHANGED);
            }
        }
    }

    public get layoutData(): ILayoutData | null {
        return this._layoutData;
    }

    private _interactive = true;

    public set interactive(value: boolean) {
        this._interactive = value;
        if (value) {
            this.style.pointerEvents = Values.EMPTY;
            this.style.setProperty(Styles.WEBKIT_USER_SELECT, Values.AUTO);
            this.style.setProperty(Styles.KHTML_USER_SELECT, Values.AUTO);
            this.style.setProperty(Styles.MOZ_USER_SELECT, Values.AUTO);
            this.style.setProperty(Styles.MS_USER_SELECT, Values.AUTO);
            this.style.setProperty(Styles.O_USER_SELECT, Values.AUTO);
            this.style.setProperty(Styles.USER_SELECT, Values.AUTO);
        } else {
            this.style.pointerEvents = Values.NONE;
            this.style.setProperty(Styles.WEBKIT_USER_SELECT, Values.NONE);
            this.style.setProperty(Styles.KHTML_USER_SELECT, Values.NONE);
            this.style.setProperty(Styles.MOZ_USER_SELECT, Values.NONE);
            this.style.setProperty(Styles.MS_USER_SELECT, Values.NONE);
            this.style.setProperty(Styles.O_USER_SELECT, Values.NONE);
            this.style.setProperty(Styles.USER_SELECT, Values.NONE);
        }
    }

    public get interactive(): boolean {
        return this._interactive;
    }

    private _overflow: Overflow = Overflow.VISIBLE;

    public set overflow(value: Overflow) {
        if (this._overflow !== value) {
            this._overflow = value;
            this._overflowHorizontal = value;
            this._overflowVertical = value;
            this.style.overflow = value;
        }
    }

    public get overflow(): Overflow {
        return this._overflow;
    }

    private _overflowHorizontal: Overflow = Overflow.VISIBLE;

    public set overflowHorizontal(value: Overflow) {
        if (this._overflowHorizontal !== value) {
            this._overflowHorizontal = value;
            this.style.overflowX = value;
        }
    }

    public get overflowHorizontal(): Overflow {
        return this._overflowHorizontal;
    }

    private _overflowVertical: Overflow = Overflow.VISIBLE;

    public set overflowVertical(value: Overflow) {
        if (this._overflowVertical !== value) {
            this._overflowVertical = value;
            this.style.overflowY = value;
        }
    }

    public get overflowVertical(): Overflow {
        return this._overflowVertical;
    }
}
customElements.define('display-element', DisplayElement);
