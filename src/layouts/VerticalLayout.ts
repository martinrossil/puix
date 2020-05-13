import BaseLayout from './BaseLayout';
import HorizontalAlign from '../consts/HorizontalAlign';
import IDisplayContainer from '../interfaces/IDisplayContainer';

export default class VerticalLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'VerticalLayout';
    }

    public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        console.log(this.name, 'updateLayout()');
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

    protected layoutChildrenLeftAligned(container: IDisplayContainer): void {
        console.log(this.name, 'layoutChildrenLeftAligned', this.getDimensions(container));
        const { width, height } = this.getDimensions(container);
        const actualWidth = width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.width)) {
                if (!isNaN(element.percentWidth)) {
                    element.actualWidth = actualWidth * element.percentWidth / 100;
                }
            }
            element.setPosition(this.paddingLeft, y);
            y += element.actualHeight + this.verticalGap;
        }
        container.setActualSize(width, height);
        container.dispatchEventWith('internalSizeChanged', container);
    }

    protected layoutChildrenCenterAligned(container: IDisplayContainer): void {
        console.log(this.name, 'layoutChildrenCenterAligned', container.width, container.height);
        const { width, height } = this.getDimensions(container);
        const actualWidth = width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.width)) {
                if (!isNaN(element.percentWidth)) {
                    element.actualWidth = actualWidth * element.percentWidth / 100;
                }
            }
            element.setPosition(width * 0.5 - element.actualWidth * 0.5, y);
            y += element.actualHeight + this.verticalGap;
        }
        container.setActualSize(width, height);
        container.dispatchEventWith('internalSizeChanged', container);
    }

    protected layoutChildrenRightAligned(container: IDisplayContainer): void {
        console.log(this.name, 'layoutChildrenRightAligned', container.width, container.height);
        const { width, height } = this.getDimensions(container);
        const actualWidth = width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.width)) {
                if (!isNaN(element.percentWidth)) {
                    element.actualWidth = actualWidth * element.percentWidth / 100;
                }
            }
            element.setPosition(width - this.paddingRight - element.actualWidth, y);
            y += element.actualHeight + this.verticalGap;
        }
        container.setActualSize(width, height);
        container.dispatchEventWith('internalSizeChanged', container);
    }

    protected layoutChildrenFilled(container: IDisplayContainer): void {
        console.log(this.name, 'layoutChildrenFilled', container.width, container.height);
        const { width, height } = this.getDimensions(container);
        const actualWidth = width - this.paddingLeft - this.paddingRight;
        let y = this.paddingTop;
        for (const element of container.elements) {
            if (isNaN(element.width)) {
                if (!isNaN(element.percentWidth)) {
                    element.actualWidth = actualWidth * element.percentWidth / 100;
                } else {
                    element.actualWidth = actualWidth;
                }
            }
            element.setPosition(width * 0.5 - element.actualWidth * 0.5, y);
            y += element.actualHeight + this.verticalGap;
        }
        container.setActualSize(width, height);
        container.dispatchEventWith('internalSizeChanged', container);
    }

    protected getDimensions(container: IDisplayContainer): Record<'width'| 'height', number> {
        let dimensions: Record<'width'| 'height', number>;
        const hasWidth = !isNaN(container.width) || !isNaN(container.percentWidth);
        const hasHeight = !isNaN(container.height) || !isNaN(container.percentHeight);
        if (!hasWidth && !hasHeight) {
            dimensions = this.getSizeDimensions(container);
        } else if (!hasWidth && hasHeight) {
            dimensions = this.getWidthDimensions(container);
        } else if (hasWidth && !hasHeight) {
            dimensions = this.getHeightDimensions(container);
        } else {
            dimensions = this.getStaticDimensions(container);
        }
        return {
            width: dimensions.width,
            height: dimensions.height
        };
    }

    protected getSizeDimensions(container: IDisplayContainer): Record<'width'| 'height', number> {
        console.log(this.name, 'getSizeDimensions()');
        let width = 0;
        let height = this.paddingTop;
        for (const element of container.elements) {
            if (!isNaN(element.width)) {
                if (width < element.width) {
                    width = element.width;
                }
            }
            if (!isNaN(element.height)) {
                height += element.height + this.verticalGap;
            } else {
                height += this.verticalGap;
            }
        }
        return {
            width: this.paddingLeft + width + this.paddingRight,
            height: height - this.verticalGap + this.paddingBottom
        };
    }

    protected getWidthDimensions(container: IDisplayContainer): Record<'width'| 'height', number> {
        let width = 0;
        const height = container.height;
        for (const element of container.elements) {
            if (!isNaN(element.width)) {
                if (width < element.width) {
                    width = element.width;
                }
            }
        }
        return {
            width: this.paddingLeft + width + this.paddingRight,
            height: height
        };
    }

    protected getHeightDimensions(container: IDisplayContainer): Record<'width'| 'height', number> {
        console.log(this.name, 'getHeightDimensions', container.actualWidth);
        const width = container.actualWidth;
        let height = 0;
        for (const element of container.elements) {
            if (!isNaN(element.height)) {
                if (height < element.height) {
                    height = element.height;
                }
            }
        }
        return {
            width: width,
            height: this.paddingTop + height + this.paddingBottom
        };
    }

    protected getStaticDimensions(container: IDisplayContainer): Record<'width'| 'height', number> {
        const width = container.width;
        const height = container.height;
        return {
            width: width,
            height: height
        };
    }
}
