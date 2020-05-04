import EventDispatcher from '../core/EventDispatcher';
import ILayout from '../interfaces/ILayout';
import ILayoutContainer from '../interfaces/ILayoutContainer';

export default class BaseLayout extends EventDispatcher implements ILayout {
    public constructor() {
        super();
        this.name = 'BaseLayout';
    }

    public updateLayout(container: ILayoutContainer): void {
        this.container = container;
    }

    protected invalidateLayout(): void {
        if (this.container) {
            if (this.container.connected) {
                this.updateLayout(this.container);
            }
        }
    }

    private _container: ILayoutContainer | null = null;

    protected set container(value: ILayoutContainer | null) {
        this._container = value;
    }

    protected get container(): ILayoutContainer | null {
        return this._container;
    }

    private _padding = 0;

    public set padding(value) {
        if (isNaN(value)) {
            this._padding = 0;
                this._paddingLeft = 0;
                this._paddingTop = 0;
                this._paddingRight = 0;
                this._paddingBottom = 0;
                this.invalidateLayout();
        } else if (this._padding !== value) {
            if (value < 0) {
                this._padding = 0;
                this._paddingLeft = 0;
                this._paddingTop = 0;
                this._paddingRight = 0;
                this._paddingBottom = 0;
            } else {
                this._padding = value;
                this._paddingLeft = value;
                this._paddingTop = value;
                this._paddingRight = value;
                this._paddingBottom = value;
            }
            this.invalidateLayout();
        }
    }

    public get padding(): number {
        return this._padding;
    }

    private _paddingLeft = 0;

    public set paddingLeft(value) {
        if (isNaN(value)) {
            if (this._paddingLeft !== 0) {
                this._paddingLeft = 0;
                this.invalidateLayout();
            }
        } else if (this._paddingLeft !== value) {
            if (value < 0) {
                this._paddingLeft = 0;
            } else {
                this._paddingLeft = value;
            }
            this.invalidateLayout();
        }
    }

    public get paddingLeft(): number {
        return this._paddingLeft;
    }

    private _paddingTop = 0;

    public set paddingTop(value) {
        if (isNaN(value)) {
            if (this._paddingTop !== 0) {
                this._paddingTop = 0;
                this.invalidateLayout();
            }
        } else if (this._paddingTop !== value) {
            if (value < 0) {
                this._paddingTop = 0;
            } else {
                this._paddingTop = value;
            }
            this.invalidateLayout();
        }
    }

    public get paddingTop(): number {
        return this._paddingTop;
    }

    private _paddingRight = 0;

    public set paddingRight(value) {
        if (isNaN(value)) {
            if (this._paddingRight !== 0) {
                this._paddingRight = 0;
                this.invalidateLayout();
            }
        } else if (this._paddingRight !== value) {
            if (value < 0) {
                this._paddingRight = 0;
            } else {
                this._paddingRight = value;
            }
            this.invalidateLayout();
        }
    }

    public get paddingRight(): number {
        return this._paddingRight;
    }

    private _paddingBottom = 0;

    public set paddingBottom(value) {
        if (isNaN(value)) {
            if (this._paddingBottom !== 0) {
                this._paddingBottom = 0;
                this.invalidateLayout();
            }
        } else if (this._paddingBottom !== value) {
            if (value < 0) {
                this._paddingBottom = 0;
            } else {
                this._paddingBottom = value;
            }
            this.invalidateLayout();
        }
    }

    public get paddingBottom(): number {
        return this._paddingBottom;
    }

    private _gap = 0;

    public set gap(value: number) {
        if (isNaN(value)) {
            this._gap = 0;
            this._horizontalGap = 0;
            this._verticalGap = 0;
            this.invalidateLayout();
        } else if (this._gap !== value) {
            if (value < 0) {
                this._gap = 0;
                this._horizontalGap = 0;
                this._verticalGap = 0;
            } else {
                this._gap = value;
                this._horizontalGap = value;
                this._verticalGap = value;
            }
            this.invalidateLayout();
        }
    }

    public get gap(): number {
        return this._gap;
    }

    private _horizontalGap = 0;

    public set horizontalGap(value: number) {
        if (isNaN(value)) {
            if (this._horizontalGap !== 0) {
                this._horizontalGap = 0;
                this.invalidateLayout();
            }
        } else if (this._horizontalGap !== value) {
            if (value < 0) {
                this._horizontalGap = 0;
            } else {
                this._horizontalGap = value;
            }
            this.invalidateLayout();
        }
    }

    public get horizontalGap(): number {
        return this._horizontalGap;
    }

    private _verticalGap = 0;

    public set verticalGap(value: number) {
        if (isNaN(value)) {
            if (this._verticalGap !== 0) {
                this._verticalGap = 0;
                this.invalidateLayout();
            }
        } else if (this._verticalGap !== value) {
            if (value < 0) {
                this._verticalGap = 0;
            } else {
                this._verticalGap = value;
            }
            this.invalidateLayout();
        }
    }

    public get verticalGap(): number {
        return this._verticalGap;
    }
}
