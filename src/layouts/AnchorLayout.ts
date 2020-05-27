import Layout from './Layout';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import AnchorLayoutData from './AnchorLayoutData';
import IAnchorLayoutData from '../interfaces/layouts/IAnchorLayoutData';
import ILayoutElement from '../interfaces/core/ILayoutElement';

export default class AnchorLayout extends Layout {
    public constructor() {
        super();
        this.name = 'AnchorLayout';
    }

    protected resizeChildren(container: IDisplayContainer): void {
        const w = container.actualWidth - this.paddingLeft - this.paddingRight;
        const h = container.actualHeight - this.paddingTop - this.paddingBottom;
        for (const element of container.elements) {
            this.setElementSize(w, h, element);
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

    protected setElementSize(w: number, h: number, element: ILayoutElement): void {
        if (!isNaN(element.percentWidth)) {
            element.actualWidth = w * element.percentWidth / 100;
        }
        if (!isNaN(element.percentHeight)) {
            element.actualHeight = h * element.percentHeight / 100;
        }
    }
}
