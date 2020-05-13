import BaseLayout from './BaseLayout';
import HorizontalAlign from '../consts/HorizontalAlign';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import Events from '../consts/Events';

export default class VerticalLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'VerticalLayout';
    }

    public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        this.invalidateContainerSize(container);
        if (this.horizontalAlign === HorizontalAlign.LEFT) {
            this.layoutChildrenLeftAligned(container);
        } else if (this.horizontalAlign === HorizontalAlign.CENTER) {
            this.layoutChildrenCenterAligned(container);
        } else if (this.horizontalAlign === HorizontalAlign.RIGHT) {
            this.layoutChildrenRightAligned(container);
        } else if (this.horizontalAlign === HorizontalAlign.FILL) {
            this.layoutChildrenFilled(container);
        }
    }

    protected invalidateContainerSize(container: IDisplayContainer): void {
        if (isNaN(container.explicitWidth) && isNaN(container.explicitHeight)) {
            if (isNaN(container.percentWidth) && isNaN(container.percentHeight)) {
                this.setSizeFromChildren(container);
            } else if (isNaN(container.percentWidth) && !isNaN(container.percentHeight)) {
                this.setWidthFromChildren(container);
            } else if (!isNaN(container.percentWidth) && isNaN(container.percentHeight)) {
                this.setHeightFromChildren(container);
            }
        } else if (isNaN(container.explicitWidth) && !isNaN(container.explicitHeight)) {
            if (isNaN(container.percentWidth)) {
                this.setWidthFromChildren(container);
            }
        } else if (!isNaN(container.explicitWidth) && isNaN(container.explicitHeight)) {
            if (isNaN(container.percentHeight)) {
                this.setHeightFromChildren(container);
            }
        }
    }

    protected setSizeFromChildren(container: IDisplayContainer): void {
        let maxWidth = 0;
        let maxHeight = this.paddingTop;
        for (const element of container.elements) {
            if (maxWidth < element.width) {
                maxWidth = element.width;
            }
            maxHeight += element.height + this.verticalGap;
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight;
        maxHeight = maxHeight - this.verticalGap + this.paddingBottom
        if (container.width !== maxWidth || container.height !== maxHeight) {
            container.setSize(maxWidth, maxHeight);
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        let maxWidth = 0;
        for (const element of container.elements) {
            if (maxWidth < element.width) {
                maxWidth = element.width;
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight
        if (container.width !== maxWidth) {
            container.width = maxWidth;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        let maxHeight = 0;
        for (const element of container.elements) {
            maxHeight += element.height + this.verticalGap;
        }
        maxHeight = this.paddingTop + maxHeight - this.verticalGap + this.paddingBottom;
        if (container.height !== maxHeight) {
            container.height = maxHeight;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected layoutChildrenLeftAligned(container: IDisplayContainer): void {
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.percentWidth)) {
                    element.width = actualWidth * element.percentWidth / 100;
                }
            }
            element.setPosition(this.paddingLeft, y);
            y += element.height + this.verticalGap;
        }
    }

    protected layoutChildrenCenterAligned(container: IDisplayContainer): void {
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.percentWidth)) {
                    element.width = actualWidth * element.percentWidth / 100;
                }
            }
            element.setPosition(container.width * 0.5 - element.width * 0.5, y);
            y += element.height + this.verticalGap;
        }
    }

    protected layoutChildrenRightAligned(container: IDisplayContainer): void {
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.percentWidth)) {
                    element.width = actualWidth * element.percentWidth / 100;
                }
            }
            element.setPosition(container.width - this.paddingRight - element.width, y);
            y += element.height + this.verticalGap;
        }
    }

    protected layoutChildrenFilled(container: IDisplayContainer): void {
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.percentWidth)) {
                    element.width = actualWidth * element.percentWidth / 100;
                } else {
                    element.width = actualWidth;
                }
            }
            element.setPosition(container.width * 0.5 - element.width * 0.5, y);
            y += element.height + this.verticalGap;
        }
    }
}
