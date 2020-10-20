import { Events } from '../enums/Events';
import { HorizontalAlign } from '../enums/HorizontalAlign';
import { VerticalAlign } from '../enums/VerticalAlign';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import BaseLayout from './BaseLayout';

export default class HorizontalLayout extends BaseLayout {
    protected setInternalSize(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let width = 0;
        let height = 0;
        for (const element of elements) {
            if (height < element.actualHeight) {
                height = element.actualHeight;
            }
            width += element.actualWidth + container.horizontalGap;
        }
        width = container.paddingLeft + width - container.horizontalGap + container.paddingRight;
        height = container.paddingTop + height + container.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        }
    }

    protected setInternalWidth(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let width = 0;
        for (const element of elements) {
            width += element.actualWidth + container.horizontalGap;
        }
        width = container.paddingLeft + width - container.horizontalGap + container.paddingRight;
        if (container.actualWidth !== width) {
            container.actualWidth = width;
            container.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        }
    }

    protected setInternalHeight(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let height = 0;
        for (const element of elements) {
            if (height < element.actualHeight) {
                height = element.actualHeight;
            }
        }
        height = container.paddingTop + height + container.paddingBottom;
        if (container.actualHeight !== height) {
            container.actualHeight = height;
            container.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        }
    }

    protected resizeElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let widthSum = 0;
        let percentWidthSum = 0;
        for (const element of elements) {
            if (isNaN(element.percentWidth)) {
                widthSum += element.actualWidth;
            } else {
                percentWidthSum += element.percentWidth;
            }
        }
        const actualWidth = container.actualWidth - container.paddingLeft - container.paddingRight;
        const actualHeight = container.actualHeight - container.paddingTop - container.paddingBottom;
        const horizontalGapSumWidth = container.horizontalGap * (elements.length - 1);
        const actualWidthLeftForPercentWidth = actualWidth - widthSum - horizontalGapSumWidth;
        let pixelPercentRatio;
        if (percentWidthSum > 100) {
            pixelPercentRatio = actualWidthLeftForPercentWidth / percentWidthSum;
        } else {
            pixelPercentRatio = actualWidthLeftForPercentWidth / 100;
        }
        for (const element of elements) {
            if (!isNaN(element.percentHeight)) {
                element.actualHeight = actualHeight * element.percentHeight / 100;
            } else if (container.verticalAlign === VerticalAlign.FILL) {
                element.actualHeight = actualHeight;
            }
            if (!isNaN(element.percentWidth)) {
                element.actualWidth = pixelPercentRatio * element.percentWidth;
            }
        }
    }

    protected layoutElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        if (container.verticalAlign === VerticalAlign.TOP) {
            this.layoutElementsTop(container, elements);
        } else if (container.verticalAlign === VerticalAlign.MIDDLE) {
            this.layoutElementsMiddle(container, elements);
        } else if (container.verticalAlign === VerticalAlign.BOTTOM) {
            this.layoutElementsBottom(container, elements);
        } else if (container.verticalAlign === VerticalAlign.FILL) {
            this.layoutElementsMiddle(container, elements);
        }
    }

    protected getHorizontalXStartValue(container: IDisplayContainer, elements: ILayoutElement[]): number {
        let x = container.paddingLeft;
        if (container.horizontalAlign === HorizontalAlign.CENTER || container.horizontalAlign === HorizontalAlign.RIGHT) {
            const actualWidth = container.actualWidth - container.paddingLeft - container.paddingRight;
            let elementsWidthSum = 0;
            for (const element of elements) {
                elementsWidthSum += element.actualWidth;
            }
            const horizontalGapSumWidth = container.horizontalGap * (elements.length - 1);
            if (container.horizontalAlign === HorizontalAlign.CENTER) {
                x += (actualWidth - elementsWidthSum - horizontalGapSumWidth) * 0.5;
            } else {
                x += (actualWidth - elementsWidthSum - horizontalGapSumWidth);
            }
        }
        return x;
    }

    private layoutElementsTop(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let x = this.getHorizontalXStartValue(container, elements);
        for (const element of elements) {
            element.setPosition(x, container.paddingTop);
            x += element.actualWidth + container.horizontalGap;
        }
    }

    private layoutElementsMiddle(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let x = this.getHorizontalXStartValue(container, elements);
        let y = 0;
        for (const element of elements) {
            y = container.actualHeight * 0.5 - element.actualHeight * 0.5;
            element.setPosition(x, y);
            x += element.actualWidth + container.horizontalGap;
        }
    }

    private layoutElementsBottom(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let x = this.getHorizontalXStartValue(container, elements);
        let y = 0;
        for (const element of elements) {
            y = container.actualHeight - container.paddingBottom - element.actualHeight;
            element.setPosition(x, y);
            x += element.actualWidth + container.horizontalGap;
        }
    }
}
