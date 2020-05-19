import BaseLayout from './BaseLayout';

export default class InternalSizeLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'InternalSizeLayout';
    }

    /* public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        this.invalidateContainerSize(container);
        this.layoutChildren(container);
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
        let maxHeight = 0;
        for (const element of container.elements) {
            if (!isNaN(element.x)) {
                if (maxWidth < element.x + element.width) {
                    maxWidth = element.x + element.width;
                }
            } else {
                if (maxWidth < element.width) {
                    maxWidth = element.width;
                }
            }
            if (!isNaN(element.y)) {
                if (maxHeight < element.y + element.height) {
                    maxHeight = element.y + element.height;
                }
            } else {
                if (maxHeight < element.height) {
                    maxHeight = element.height;
                }
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight;
        maxHeight = this.paddingTop + maxHeight + this.paddingBottom;
        if (container.width !== maxWidth || container.height !== maxHeight) {
            container.setSize(maxWidth, maxHeight);
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        let maxWidth = 0;
        for (const element of container.elements) {
            if (!isNaN(element.x)) {
                if (maxWidth < element.x + element.width) {
                    maxWidth = element.x + element.width;
                }
            } else {
                if (maxWidth < element.width) {
                    maxWidth = element.width;
                }
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight;
        if (container.width !== maxWidth) {
            container.width = maxWidth;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        let maxHeight = 0;
        for (const element of container.elements) {
            if (!isNaN(element.y)) {
                if (maxHeight < element.y + element.height) {
                    maxHeight = element.y + element.height;
                }
            } else {
                if (maxHeight < element.height) {
                    maxHeight = element.height;
                }
            }
        }
        maxHeight = this.paddingTop + maxHeight + this.paddingBottom;
        if (container.height !== maxHeight) {
            container.height = maxHeight;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected layoutChildren(container: IDisplayContainer): void {
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
    } */
}
