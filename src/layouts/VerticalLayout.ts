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
        console.log(container.name, 'updateLayout()');
        this.invalidateContainerSize(container);
        this.resizeChildren(container);
        this.layoutChildren(container);
    }

    protected layoutChildren(container: IDisplayContainer): void {
        if (this.horizontalAlign === HorizontalAlign.LEFT) {
            this.layoutLeft(container);
        } else if (this.horizontalAlign === HorizontalAlign.CENTER) {
            this.layoutCenter(container);
        } else if (this.horizontalAlign === HorizontalAlign.RIGHT) {
            this.layoutRight(container);
        } else if (this.horizontalAlign === HorizontalAlign.FILL) {
            this.layoutCenter(container);
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

    protected setSizeFromChildren(container: IDisplayContainer): void {
        console.log(this.name, 'setSizeFromChildren()');
        let maxWidth = 0;
        let maxHeight = 0;
        for (const element of container.elements) {
            if (isNaN(element.left) && isNaN(element.right)) {
                if (maxWidth < element.width) {
                    maxWidth = element.width;
                }
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                if (maxWidth < element.left + element.width) {
                    maxWidth = element.left + element.width;
                }
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                if (maxWidth < element.width + element.right) {
                    maxWidth = element.width + element.right;
                }
            } else {
                if (maxWidth < element.left + element.width + element.right) {
                    maxWidth = element.left + element.width + element.right;
                }
            }
            if (isNaN(element.top) && isNaN(element.bottom)) {
                maxHeight += element.height + this.verticalGap;
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                maxHeight += element.top + element.width + this.verticalGap;
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                maxHeight += element.height + this.verticalGap + element.bottom;
            } else {
                maxHeight += element.top + element.height + element.bottom + this.verticalGap;
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight;
        maxHeight = this.paddingTop + maxHeight - this.verticalGap + this.paddingBottom;
        if (container.width !== maxWidth || container.height !== maxHeight) {
            container.setSize(maxWidth, maxHeight);
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        console.log(this.name, 'setWidthFromChildren()');
        let maxWidth = 0;
        for (const element of container.elements) {
            if (isNaN(element.left) && isNaN(element.right)) {
                if (maxWidth < element.width) {
                    maxWidth = element.width;
                }
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                if (maxWidth < element.left + element.width) {
                    maxWidth = element.left + element.width;
                }
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                if (maxWidth < element.width + element.right) {
                    maxWidth = element.width + element.right;
                }
            } else {
                if (maxWidth < element.left + element.width + element.right) {
                    maxWidth = element.left + element.width + element.right;
                }
            }
        }
        maxWidth = this.paddingLeft + maxWidth + this.paddingRight
        if (container.width !== maxWidth) {
            container.width = maxWidth;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        console.log(this.name, 'setHeightFromChildren()');
        let maxHeight = 0;
        for (const element of container.elements) {
            if (isNaN(element.top) && isNaN(element.bottom)) {
                maxHeight += element.height + this.verticalGap;
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                maxHeight += element.top + element.width + this.verticalGap;
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                maxHeight += element.height + this.verticalGap + element.bottom;
            } else {
                maxHeight += element.top + element.height + element.bottom + this.verticalGap;
            }
        }
        maxHeight = this.paddingTop + maxHeight - this.verticalGap + this.paddingBottom;
        if (container.height !== maxHeight) {
            container.height = maxHeight;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected resizeChildren(container: IDisplayContainer): void {
        if (this.hasHeight(container) || this.hasPercentHeight(container) || this.hasAnchorHeight(container)) {
            let heightSum = 0;
            let percentHeightSum = 0;
            let withPercentHeightCount = 0;
            for (const element of container.elements) {
                if (isNaN(element.percentHeight)) {
                    heightSum += element.height;
                } else {
                    percentHeightSum += element.percentHeight;
                    withPercentHeightCount++;
                }
            }
            if (withPercentHeightCount === 0) {
                this.setElementsWidthFromPercentOrFill(container);
            } else {
                this.setElementsSizeFromPercentOrFill(container, heightSum, percentHeightSum);
            }
        } else {
            this.setElementsWidthFromPercentOrFill(container);
        }
    }

    protected setElementsSizeFromPercentOrFill(container: IDisplayContainer, heightSum: number, percentHeightSum: number): void {
        console.log(this.name, 'setElementsSizeFromPercentOrFill()');
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        const actualHeight = container.height - this.paddingTop - this.paddingBottom;
        const verticalGapSumHeight = this.verticalGap * (container.elements.length - 1);
        const actualHeightLeftForPercentHeight = actualHeight - heightSum - verticalGapSumHeight;
        const pixelPercentRatio = actualHeightLeftForPercentHeight / percentHeightSum;
        for (const element of container.elements) {
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.percentWidth)) {
                    element.width = actualWidth * element.percentWidth / 100;
                } else if (this.horizontalAlign === HorizontalAlign.FILL) {
                    element.width = actualWidth;
                }
            }
            if (isNaN(element.explicitHeight)) {
                if (!isNaN(element.percentHeight)) {
                    element.height = pixelPercentRatio * element.percentHeight;
                }
            }
        }
    }

    protected setElementsWidthFromPercentOrFill(container: IDisplayContainer): void {
        console.log(this.name, 'setElementsWidthFromPercentOrFill()');
        const actualWidth = container.width - this.paddingLeft - this.paddingRight;
        let calculatedActualWidth = 0;
        let elementWidth = 0;
        for (const element of container.elements) {
            calculatedActualWidth = actualWidth;
            if (isNaN(element.explicitWidth)) {
                if (!isNaN(element.left)) {
                    calculatedActualWidth -= element.left;
                }
                if (!isNaN(element.right)) {
                    calculatedActualWidth -= element.right;
                }
                if (!isNaN(element.percentWidth)) {
                    elementWidth = calculatedActualWidth * element.percentWidth / 100;
                } else if (this.horizontalAlign === HorizontalAlign.FILL) {
                    elementWidth = calculatedActualWidth;
                }
                element.width = elementWidth;
            }
        }
    }

    protected layoutLeft(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (!isNaN(element.left)) {
                x += element.left;
            }
            if (!isNaN(element.top)) {
                y += element.top;
            }
            element.setPosition(x, y);
            y += element.height + this.verticalGap;
            if (!isNaN(element.bottom)) {
                y += element.bottom;
            }
            x = this.paddingLeft;
        }
    }

    protected layoutFill(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (!isNaN(element.left)) {
                x += element.left;
            }
            if (!isNaN(element.top)) {
                y += element.top;
            }
            element.setPosition(x, y);
            y += element.height + this.verticalGap;
            if (!isNaN(element.bottom)) {
                y += element.bottom;
            }
            x = this.paddingLeft;
        }
    }

    protected layoutCenter(container: IDisplayContainer): void {
        let x = 0;
        let y = this.paddingTop;
        for (const element of container.elements) {
            x = container.width * 0.5 - element.width * 0.5;
            if (!isNaN(element.top)) {
                y += element.top;
            }
            element.setPosition(x, y);
            y += element.height + this.verticalGap;
            if (!isNaN(element.bottom)) {
                y += element.bottom;
            }
        }
    }

    protected layoutRight(container: IDisplayContainer): void {
        let x = 0;
        let y = this.paddingTop;
        for (const element of container.elements) {
            x = container.width - this.paddingRight - element.width;
            if (!isNaN(element.right)) {
                x -= element.right;
            }
            if (!isNaN(element.top)) {
                y += element.top;
            }
            element.setPosition(x, y);
            y += element.height + this.verticalGap;
            if (!isNaN(element.bottom)) {
                y += element.bottom;
            }
        }
    }
}
