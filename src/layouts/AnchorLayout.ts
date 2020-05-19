import InternalSizeLayout from './InternalSizeLayout';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import Events from '../consts/Events';
import AnchorLayoutData from './AnchorLayoutData';
import IAnchorLayoutData from '../interfaces/IAnchorLayoutData';
import ILayoutElement from '../interfaces/ILayoutElement';

export default class AnchorLayout extends InternalSizeLayout {
    public constructor() {
        super();
        this.name = 'AnchorLayout';
    }

    public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        this.invalidateContainerSize(container);
        this.resizeChildren(container);
        this.layoutChildren(container);
    }

    protected invalidateContainerSize(container: IDisplayContainer): void {
        if (isNaN(container.width) && isNaN(container.height)) {
            if (container.layoutData) {
                if (isNaN(container.layoutData.percentWidth) && isNaN(container.layoutData.percentHeight)) {
                    this.setSizeFromChildren(container);
                } else if (isNaN(container.layoutData.percentWidth) && !isNaN(container.layoutData.percentHeight)) {
                    this.setWidthFromChildren(container);
                } else if (!isNaN(container.layoutData.percentWidth) && isNaN(container.layoutData.percentHeight)) {
                    this.setHeightFromChildren(container);
                }
            } else {
                this.setSizeFromChildren(container);
            }
        } else if (isNaN(container.width) && !isNaN(container.height)) {
            if (container.layoutData) {
                if (isNaN(container.layoutData.percentWidth)) {
                    this.setWidthFromChildren(container);
                }
            } else {
                this.setWidthFromChildren(container);
            }
        } else if (!isNaN(container.width) && isNaN(container.height)) {
            if (container.layoutData) {
                if (isNaN(container.layoutData.percentHeight)) {
                    this.setHeightFromChildren(container);
                }
            } else {
                this.setHeightFromChildren(container);
            }
        }
    }

    protected resizeChildren(container: IDisplayContainer): void {
        const w = container.actualWidth - this.paddingLeft - this.paddingRight;
        const h = container.actualHeight - this.paddingTop - this.paddingBottom;
        for (const element of container.elements) {
            if (element.layoutData instanceof AnchorLayoutData) {
                this.setElementSize(w, h, element, element.layoutData);
            }
        }
    }

    protected layoutChildren(container: IDisplayContainer): void {
        const w = container.actualWidth - this.paddingLeft - this.paddingRight;
        const h = container.actualHeight - this.paddingTop - this.paddingBottom;
        for (const element of container.elements) {
            if (element.layoutData instanceof AnchorLayoutData) {
                this.setElementPosition(w, h, element, element.layoutData);
            } else {
                element.setPosition(this.paddingLeft, this.paddingTop);
            }
        }
    }

    protected setElementPosition(w: number, h: number, element: ILayoutElement, layoutData: IAnchorLayoutData): void {
        if (!isNaN(layoutData.horizontalCenter)) {
            element.x = this.paddingLeft + w * 0.5 - element.actualWidth * 0.5 + layoutData.horizontalCenter;
        } else if (!isNaN(layoutData.left) && !isNaN(layoutData.right)) {
            element.x = this.paddingLeft + layoutData.left + (w - layoutData.left - layoutData.right) * 0.5 - element.actualWidth * 0.5;
        } else if (!isNaN(layoutData.left) && isNaN(layoutData.right)) {
            element.x = this.paddingLeft + layoutData.left;
        } else if (isNaN(layoutData.left) && !isNaN(layoutData.right)) {
            element.x = this.paddingLeft + w - layoutData.right - element.actualWidth;
        } else {
            element.x = this.paddingLeft;
        }
        if (!isNaN(layoutData.verticalCenter)) {
            element.y = this.paddingTop + h * 0.5 - element.actualHeight * 0.5 + layoutData.verticalCenter;
        } else if (!isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
            element.y = this.paddingTop + layoutData.top + (h - layoutData.top - layoutData.bottom) * 0.5 - element.actualHeight * 0.5;
        } else if (!isNaN(layoutData.top) && isNaN(layoutData.bottom)) {
            element.y = this.paddingTop + layoutData.top;
        } else if (isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
            element.y = this.paddingTop + h - layoutData.bottom - element.actualHeight;
        } else {
            element.y = this.paddingTop;
        }
    }

    protected setElementSize(w: number, h: number, element: ILayoutElement, layoutData: IAnchorLayoutData): void {
        if (!isNaN(layoutData.percentWidth)) {
            element.actualWidth = w * layoutData.percentWidth / 100;
        }
        if (!isNaN(layoutData.percentHeight)) {
            element.actualHeight = h * layoutData.percentHeight / 100;
        }
    }

    protected setSizeFromChildren(container: IDisplayContainer): void {
        let width = 0;
        let height = 0;
        for (const element of container.elements) {
            if (width < element.actualWidth) {
                width = element.actualWidth;
            }
            if (height < element.actualHeight) {
                height = element.actualHeight;
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        height = this.paddingTop + height + this.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        let width = 0;
        for (const element of container.elements) {
            if (width < element.actualWidth) {
                width = element.actualWidth;
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        if (container.actualWidth !== width) {
            container.actualWidth = width;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        let height = 0;
        for (const element of container.elements) {
            if (height < element.actualHeight) {
                height = element.actualHeight;
            }
        }
        height = this.paddingTop + height + this.paddingBottom;
        if (container.actualHeight !== height) {
            container.actualHeight = height;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }
}
