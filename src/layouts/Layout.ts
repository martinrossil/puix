import ILayout from '../interfaces/layouts/ILayout';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import SizeElement from '../core/SizeElement';

export default class Layout implements ILayout {
    public constructor() {
        this.name = 'Layout';
    }

    public updateLayout(container: IDisplayContainer): void {
        this.container = container;
        this.invalidateContainerSize(container);
        this.resizeChildren(container);
        this.layoutChildren(container);
    }

    protected resizeChildren(container: IDisplayContainer): void {
        //
    }

    protected layoutChildren(container: IDisplayContainer): void {
        for (const element of container.elements) {
            if (element.includeInLayout) {
                element.setPosition(this.paddingLeft, this.paddingTop);
            }
        }
    }

    protected invalidateContainerSize(container: IDisplayContainer): void {
        if (isNaN(container.width) && isNaN(container.height)) {
            if (isNaN(container.percentWidth) && isNaN(container.percentHeight)) {
                this.setSizeFromChildren(container);
            } else if (isNaN(container.percentWidth) && !isNaN(container.percentHeight)) {
                this.setWidthFromChildren(container);
            } else if (!isNaN(container.percentWidth) && isNaN(container.percentHeight)) {
                this.setHeightFromChildren(container);
            }
        } else if (isNaN(container.width) && !isNaN(container.height)) {
            if (isNaN(container.percentWidth)) {
                this.setWidthFromChildren(container);
            }
        } else if (!isNaN(container.width) && isNaN(container.height)) {
            if (isNaN(container.percentHeight)) {
                this.setHeightFromChildren(container);
            }
        }
    }

    protected setSizeFromChildren(container: IDisplayContainer): void {
        let width = 0;
        let height = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (isNaN(element.percentWidth)) {
                    if (width < element.actualWidth) {
                        width = element.actualWidth;
                    }
                }
                if (isNaN(element.percentHeight)) {
                    if (height < element.actualHeight) {
                        height = element.actualHeight;
                    }
                }
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        height = this.paddingTop + height + this.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        let width = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (isNaN(element.percentWidth)) {
                    if (width < element.actualWidth) {
                        width = element.actualWidth;
                    }
                }
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        if (container.actualWidth !== width) {
            container.actualWidth = width;
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        let height = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (isNaN(element.percentHeight)) {
                    if (height < element.actualHeight) {
                        height = element.actualHeight;
                    }
                }
            }
        }
        height = this.paddingTop + height + this.paddingBottom;
        if (container.actualHeight !== height) {
            container.actualHeight = height;
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected container: IDisplayContainer | null = null;

    protected invalidateLayout(): void {
        if (this.container && this.container.connected) {
            this.updateLayout(this.container);
        }
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

    private _name = '';

    public set name(value: string) {
        this._name = value;
    }

    public get name(): string {
        return this._name;
    }
}
