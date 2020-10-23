import { Events } from '../enums/Events';
import { HorizontalAlign } from '../enums/HorizontalAlign';
import { VerticalAlign } from '../enums/VerticalAlign';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import BaseLayout from './BaseLayout';

export default class VerticalLayout extends BaseLayout {
    protected setInternalSize(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let width = 0;
        let height = 0;
        for (const element of elements) {
            if (width < element.actualWidth) {
                width = element.actualWidth;
            }
            height += element.actualHeight + container.verticalGap;
        }
        width = container.paddingLeft + width + container.paddingRight;
        height = container.paddingTop + height - container.verticalGap + container.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        }
    }

    protected setInternalWidth(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let width = 0;
        for (const element of elements) {
            if (width < element.actualWidth) {
                width = element.actualWidth;
            }
        }
        width = container.paddingLeft + width + container.paddingRight;
        if (container.actualWidth !== width) {
            container.actualWidth = width;
            container.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        }
    }

    protected setInternalHeight(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let height = 0;
        for (const element of elements) {
            height += element.actualHeight + container.verticalGap;
        }
        height = container.paddingTop + height - container.verticalGap + container.paddingBottom;
        if (container.actualHeight !== height) {
            container.actualHeight = height;
            container.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        }
    }

    protected resizeElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let heightSum = 0;
        let percentHeightSum = 0;
        for (const element of elements) {
            if (isNaN(element.percentHeight)) {
                heightSum += element.actualHeight;
            } else {
                percentHeightSum += element.percentHeight;
            }
        }
        const actualWidth = container.actualWidth - container.paddingLeft - container.paddingRight;
        const actualHeight = container.actualHeight - container.paddingTop - container.paddingBottom;
        const verticalGapSumHeight = container.verticalGap * (elements.length - 1);
        const actualHeightLeftForPercentHeight = actualHeight - heightSum - verticalGapSumHeight;
        let pixelPercentRatio;
        if (percentHeightSum > 100) {
            pixelPercentRatio = actualHeightLeftForPercentHeight / percentHeightSum;
        } else {
            pixelPercentRatio = actualHeightLeftForPercentHeight / 100;
        }
        for (const element of elements) {
            if (!isNaN(element.percentWidth)) {
                element.actualWidth = actualWidth * element.percentWidth / 100;
            } else if (container.horizontalAlign === HorizontalAlign.FILL) {
                element.actualWidth = actualWidth;
            }
            if (!isNaN(element.percentHeight)) {
                element.actualHeight = pixelPercentRatio * element.percentHeight;
            }
        }
    }

    protected layoutElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        if (container.horizontalAlign === HorizontalAlign.LEFT) {
            this.layoutElementsLeft(container, elements);
            return;
        }
        if (container.horizontalAlign === HorizontalAlign.RIGHT) {
            this.layoutElementsRight(container, elements);
            return;
        }
        this.layoutElementsCenter(container, elements);
    }

    private getVerticalYStartValue(container: IDisplayContainer, elements: ILayoutElement[]): number {
        let y = container.paddingTop;
        if (container.verticalAlign === VerticalAlign.MIDDLE || container.verticalAlign === VerticalAlign.BOTTOM) {
            const actualHeight = container.actualHeight - container.paddingTop - container.paddingBottom;
            let elementsHeightSum = 0;
            for (const element of elements) {
                elementsHeightSum += element.actualHeight;
            }
            const verticalGapSumHeight = container.verticalGap * (elements.length - 1);
            if (container.verticalAlign === VerticalAlign.MIDDLE) {
                y += (actualHeight - elementsHeightSum - verticalGapSumHeight) * 0.5;
            } else {
                y += (actualHeight - elementsHeightSum - verticalGapSumHeight);
            }
        }
        return y;
    }

    private layoutElementsLeft(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let y = this.getVerticalYStartValue(container, elements);
        for (const element of elements) {
            element.setPosition(container.paddingLeft, y);
            y += element.actualHeight + container.verticalGap;
        }
    }

    private layoutElementsCenter(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let x = 0;
        let y = this.getVerticalYStartValue(container, elements);
        for (const element of elements) {
            x = container.actualWidth * 0.5 - element.actualWidth * 0.5;
            element.setPosition(x, y);
            y += element.actualHeight + container.verticalGap;
        }
    }

    private layoutElementsRight(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let x = 0;
        let y = this.getVerticalYStartValue(container, elements);
        for (const element of elements) {
            x = container.actualWidth - container.paddingRight - element.actualWidth;
            element.setPosition(x, y);
            y += element.actualHeight + container.verticalGap;
        }
    }
}
