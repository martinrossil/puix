import BaseLayout from './BaseLayout';

export default class HorizontalLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'HorizontalLayout';
    }

    /* public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        this.invalidateContainerSize(container);
        this.resizeChildren(container);
        this.layoutChildren(container);
    }

    protected layoutChildren(container: IDisplayContainer): void {
        if (this.verticalAlign === VerticalAlign.TOP) {
            this.layoutTop(container);
        } else if (this.verticalAlign === VerticalAlign.MIDDLE) {
            this.layoutMiddle(container);
        } else if (this.verticalAlign === VerticalAlign.BOTTOM) {
            this.layoutBottom(container);
        } else if (this.verticalAlign === VerticalAlign.FILL) {
            this.layoutMiddle(container);
        }
    }

    protected invalidateContainerSize(container: IDisplayContainer): void {
        if (this.hasNoSize(container)) {
            if (this.hasNoPercent(container)) {
                if (this.hasNoAnchor(container)) {
                    this.setSizeFromChildren(container);
                } else if (this.hasAnchorWidth(container) && this.hasNoAnchorHeight(container)) {
                    this.setHeightFromChildren(container);
                } else if (this.hasNoAnchorWidth(container) && this.hasAnchorHeight(container)) {
                    this.setWidthFromChildren(container);
                }
            } else if (this.hasNoPercentHeight(container) && this.hasPercentWidth(container)) {
                if (this.hasNoAnchorHeight(container)) {
                    this.setHeightFromChildren(container);
                }
            } else if (this.hasPercentHeight(container) && this.hasNoPercentWidth(container)) {
                if (this.hasNoAnchorWidth(container)) {
                    this.setWidthFromChildren(container);
                }
            }
        } else if (this.hasNoHeight(container) && this.hasWidth(container)) {
            if (this.hasNoPercentHeight(container)) {
                if (this.hasNoAnchorHeight(container)) {
                    this.setHeightFromChildren(container);
                }
            }
        } else if (this.hasHeight(container) && this.hasNoWidth(container)) {
            if (this.hasNoPercentWidth(container)) {
                if (this.hasNoAnchorWidth(container)) {
                    this.setWidthFromChildren(container);
                }
            }
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        console.log(this.name, 'setHeightFromChildren()');
        let maxHeight = 0;
        for (const element of container.elements) {
            if (isNaN(element.top) && isNaN(element.bottom)) {
                if (maxHeight < element.height) {
                    maxHeight = element.height;
                }
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                if (maxHeight < element.top + element.height) {
                    maxHeight = element.top + element.height;
                }
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                if (maxHeight < element.height + element.bottom) {
                    maxHeight = element.height + element.bottom;
                }
            } else {
                if (maxHeight < element.top + element.height + element.bottom) {
                    maxHeight = element.top + element.height + element.bottom;
                }
            }
        }
        maxHeight = this.paddingTop + maxHeight + this.paddingBottom;
        if (container.height !== maxHeight) {
            container.height = maxHeight;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        console.log(this.name, 'setWidthFromChildren()');
        let maxWidth = 0;
        for (const element of container.elements) {
            if (isNaN(element.left) && isNaN(element.right)) {
                maxWidth += element.width + this.horizontalGap;
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                maxWidth += element.left + element.width + this.horizontalGap;
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                maxWidth += element.width + this.horizontalGap + element.right;
            } else {
                maxWidth += element.left + element.width + element.right + this.horizontalGap;
            }
        }
        maxWidth = this.paddingLeft + maxWidth - this.horizontalGap + this.paddingRight;
        if (container.width !== maxWidth) {
            container.width = maxWidth;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setSizeFromChildren(container: IDisplayContainer): void {
        console.log(this.name, 'setSizeFromChildren()');
        let maxHeight = 0;
        let maxWidth = this.paddingLeft;
        for (const element of container.elements) {
            if (isNaN(element.top) && isNaN(element.bottom)) {
                if (maxHeight < element.height) {
                    maxHeight = element.height;
                }
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                if (maxHeight < element.top + element.height) {
                    maxHeight = element.top + element.height;
                }
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                if (maxHeight < element.height + element.bottom) {
                    maxHeight = element.height + element.bottom;
                }
            } else {
                if (maxHeight < element.top + element.height + element.bottom) {
                    maxHeight = element.top + element.height + element.bottom;
                }
            }
            if (isNaN(element.left) && isNaN(element.right)) {
                maxWidth += element.width + this.horizontalGap;
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                maxWidth += element.left + element.width + this.horizontalGap;
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                maxWidth += element.width + this.horizontalGap + element.right;
            } else {
                maxWidth += element.left + element.width + element.right + this.horizontalGap;
            }
        }
        maxHeight = this.paddingTop + maxHeight + this.paddingBottom;
        maxWidth = maxWidth - this.horizontalGap + this.paddingRight;
        if (container.width !== maxWidth || container.height !== maxHeight) {
            container.setSize(maxWidth, maxHeight);
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected resizeChildren(container: IDisplayContainer): void {
        if (this.hasWidth(container) || this.hasPercentWidth(container) || this.hasAnchorWidth(container)) {
            let widthSum = 0;
            let percentWidthSum = 0;
            let childrenWithPercentWidthCount = 0;
            for (const element of container.elements) {
                if (isNaN(element.percentWidth)) {
                    widthSum += element.width;
                } else {
                    percentWidthSum += element.percentWidth;
                    childrenWithPercentWidthCount++;
                }
            }
            if (childrenWithPercentWidthCount === 0) {
                this.setElementsHeightFromPercentOrFill(container);
            } else {
                this.setElementsSizeFromPercentOrFill(container, widthSum, percentWidthSum);
            }
        } else {
            this.setElementsHeightFromPercentOrFill(container);
        }
    }

    protected setElementsSizeFromPercentOrFill(container: IDisplayContainer, widthSum: number, percentWidthSum: number): void {
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        const actualHeight = container.height - this.paddingTop - this.paddingBottom;
        const horizontalGapSumWidth = this.horizontalGap * (container.elements.length - 1);
        const actualWidthLeftForPercentWidth = actualWidth - widthSum - horizontalGapSumWidth;
        const pixelPercentRatio = actualWidthLeftForPercentWidth / percentWidthSum;
        for (const element of container.elements) {
            if (isNaN(element.explicitHeight)) {
                if (!isNaN(element.percentHeight)) {
                    element.height = actualHeight * element.percentHeight / 100;
                } else if (this.verticalAlign === VerticalAlign.FILL) {
                    element.height = actualHeight;
                }
            }
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.percentWidth)) {
                    element.width = pixelPercentRatio * element.percentWidth;
                }
            }
        }
    }

    protected setElementsHeightFromPercentOrFill(container: IDisplayContainer): void {
        const actualHeight = container.height - this.paddingTop - this.paddingBottom;
        for (const element of container.elements) {
            if (isNaN(element.explicitHeight)) {
                if (!isNaN(element.percentHeight)) {
                    element.height = actualHeight * element.percentHeight / 100;
                } else if (this.verticalAlign === VerticalAlign.FILL) {
                    element.height = actualHeight;
                }
            }
        }
    }

    protected layoutTop(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (!isNaN(element.left)) {
                x += element.left;
            }
            if (!isNaN(element.top)) {
                y = this.paddingTop + element.top;
            }
            element.setPosition(x, y);
            if (!isNaN(element.right)) {
                x += element.right;
            }
            x += element.width + this.horizontalGap;
            y = this.paddingTop;
        }
    }

    protected layoutBottom(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        let y = 0;
        for (const element of container.elements) {
            if (!isNaN(element.left)) {
                x += element.left;
            }
            y = container.height - this.paddingBottom - element.height;
            if (!isNaN(element.bottom)) {
                y -= element.bottom;
            }
            element.setPosition(x, y);
            x += element.width + this.horizontalGap;
            if (!isNaN(element.right)) {
                x += element.right;
            }
        }
    }

    protected layoutMiddle(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        for (const element of container.elements) {
            element.setPosition(x, container.height * 0.5 - element.height * 0.5);
            x += element.width + this.horizontalGap;
        }
    } */
}
