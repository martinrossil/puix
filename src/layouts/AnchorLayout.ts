import BaseLayout from './BaseLayout';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import ILayoutElement from '../interfaces/ILayoutElement';

export default class AnchorLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'AnchorLayout';
    }

    public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        console.log(this.name, 'updateLayout()');
        this.invalidateActualContainerSize(container);
        this.layoutChildren(container);
    }

    protected layoutChildren(container: IDisplayContainer): void {
        const availableWidth = container.actualWidth - this.paddingLeft - this.paddingRight;
        const availableHeight = container.actualHeight - this.paddingTop - this.paddingBottom;
        const elements: ILayoutElement[] = container.elements;
        for (const element of elements) {
            this.setElementSize(availableWidth, availableHeight, element);
            this.setElementPosition(availableWidth, availableHeight, element);
        }
    }

    protected setElementSize(w: number, h: number, element: ILayoutElement): void {
        if (isNaN(element.width)) {
            if (!isNaN(element.percentWidth)) {
                element.actualWidth = w * element.percentWidth / 100;
            }
        }
        if (isNaN(element.height)) {
            if (!isNaN(element.percentHeight)) {
                element.actualHeight = h * element.percentHeight / 100;
            }
        }
    }

    protected setElementPosition(w: number, h: number, element: ILayoutElement): void {
        if (!isNaN(element.horizontalCenter)) {
            element.actualX = w * 0.5 - element.actualWidth * 0.5 + element.horizontalCenter;
        } else if (!isNaN(element.x)) {
            element.actualX = this.paddingLeft + element.x;
        } else if (!isNaN(element.percentWidth)) {
            element.actualX = this.paddingLeft + w * 0.5 - element.actualWidth * 0.5;
        } else {
            element.actualX = this.paddingLeft;
        }
        if (!isNaN(element.verticalCenter)) {
            element.actualY = h * 0.5 - element.actualHeight * 0.5 + element.verticalCenter;
        } else if (!isNaN(element.y)) {
            element.actualY = this.paddingTop + element.y;
        } else if (!isNaN(element.percentHeight)) {
            element.actualY = this.paddingTop + h * 0.5 - element.actualHeight * 0.5;
        } else {
            element.actualY = this.paddingTop;
        }
    }

    protected invalidateActualContainerSize(container: IDisplayContainer): void {
        if (isNaN(container.width) && isNaN(container.height)) {
            this.setActualSizeFromChildren(container);
        } else if (isNaN(container.width) && !isNaN(container.height)) {
            this.setActualWidthFromChildren(container);
        } else if (!isNaN(container.width) && isNaN(container.height)) {
            this.setActualHeightFromChildren(container);
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
            } else {
                if (maxWidth < element.actualWidth) {
                    maxWidth = element.actualWidth;
                }
            }
            if (!isNaN(element.y)) {
                if (maxHeight < element.y + element.actualHeight) {
                    maxHeight = element.y + element.actualHeight;
                }
            } else {
                if (maxHeight < element.actualHeight) {
                    maxHeight = element.actualHeight;
                }
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
            } else {
                if (maxWidth < element.actualWidth) {
                    maxWidth = element.actualWidth;
                }
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight;
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
            } else {
                if (maxHeight < element.actualHeight) {
                    maxHeight = element.actualHeight;
                }
            }
        }
        maxHeight = this.paddingTop + maxHeight + this.paddingBottom;
        if (container.actualHeight !== maxHeight) {
            container.actualHeight = maxHeight;
            container.dispatchEventWith('internalSizeChanged', container);
        }
    }
}
