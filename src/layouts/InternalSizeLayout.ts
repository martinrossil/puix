import BaseLayout from './BaseLayout';
import IDisplayContainer from '../interfaces/IDisplayContainer';

export default class InternalSizeLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'InternalSizeLayout';
    }

    public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        this.invalidateActualContainerSize(container);
    }

    protected invalidateActualContainerSize(container: IDisplayContainer): void {
        if (isNaN(container.width) && isNaN(container.height)) {
            this.setActualSizeFromChildren(container);
        } else if (isNaN(container.width) && !isNaN(container.height)) {
            this.setActualWidthFromChildren(container);
        } else if (!isNaN(container.width) && isNaN(container.height)) {
            this.setActualHeightFromChildren(container);
        } else {
            this.offsetChildrenFromPadding(container);
        }
    }

    protected offsetChildrenFromPadding(container: IDisplayContainer): void {
        for (const element of container.elements) {
            if (!isNaN(element.x)) {
                element.actualX = this.paddingLeft + element.x;
            } else {
                element.actualX = this.paddingLeft;
            }
            if (!isNaN(element.y)) {
                element.actualY = this.paddingTop + element.y;
            } else {
                element.actualY = this.paddingTop;
            }
        }
    }

    protected setActualSizeFromChildren(container: IDisplayContainer): void {
        let maxWidth = 0;
        let maxHeight = 0;
        for (const element of container.elements) {
            if (!isNaN(element.x)) {
                if (maxWidth < element.x + element.actualWidth) {
                    maxWidth = element.x + element.actualWidth;
                }
                element.actualX = this.paddingLeft + element.x;
            } else {
                if (maxWidth < element.actualWidth) {
                    maxWidth = element.actualWidth;
                }
                element.actualX = this.paddingLeft;
            }
            if (!isNaN(element.y)) {
                if (maxHeight < element.y + element.actualHeight) {
                    maxHeight = element.y + element.actualHeight;
                }
                element.actualY = this.paddingTop + element.y;
            } else {
                if (maxHeight < element.actualHeight) {
                    maxHeight = element.actualHeight;
                }
                element.actualY = this.paddingTop;
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight;
        maxHeight = this.paddingTop + maxHeight + this.paddingBottom;
        if (container.actualWidth !== maxWidth || container.actualHeight !== maxHeight) {
            container.setActualSize(maxWidth, maxHeight);
            container.dispatchEventWith('internalSizeChanged', container);
        }
    }

    protected setActualWidthFromChildren(container: IDisplayContainer): void {
        let maxWidth = 0;
        for (const element of container.elements) {
            if (!isNaN(element.x)) {
                if (maxWidth < element.x + element.actualWidth) {
                    maxWidth = element.x + element.actualWidth;
                }
                element.actualX = this.paddingLeft + element.x;
            } else {
                if (maxWidth < element.actualWidth) {
                    maxWidth = element.actualWidth;
                }
                element.actualX = this.paddingLeft;
            }
        }
        if (container.actualWidth !== maxWidth) {
            container.actualWidth = maxWidth;
            container.dispatchEventWith('internalSizeChanged', container);
        }
    }

    protected setActualHeightFromChildren(container: IDisplayContainer): void {
        let maxHeight = 0;
        for (const element of container.elements) {
            if (!isNaN(element.y)) {
                if (maxHeight < element.y + element.actualHeight) {
                    maxHeight = element.y + element.actualHeight;
                }
                element.actualY = this.paddingTop + element.y;
            } else {
                if (maxHeight < element.actualHeight) {
                    maxHeight = element.actualHeight;
                }
                element.actualY = this.paddingTop;
            }
        }
        if (container.actualHeight !== maxHeight) {
            container.actualHeight = maxHeight;
            container.dispatchEventWith('internalSizeChanged', container);
        }
    }
}
