import Layout from './Layout';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
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
            if (element.includeInLayout) {
                this.setElementSize(w, h, element);
            }
        }
    }

    protected layoutChildren(container: IDisplayContainer): void {
        const w = container.actualWidth - this.paddingLeft - this.paddingRight;
        const h = container.actualHeight - this.paddingTop - this.paddingBottom;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                this.setElementPosition(w, h, element);
            }
        }
    }

    protected setElementPosition(w: number, h: number, element: ILayoutElement): void {
        if (!isNaN(element.horizontalCenter)) {
            element.x = this.paddingLeft + w * 0.5 - element.actualWidth * 0.5 + element.horizontalCenter;
        } else if (!isNaN(element.left) && !isNaN(element.right)) {
            element.x = this.paddingLeft + element.left + (w - element.left - element.right) * 0.5 - element.actualWidth * 0.5;
        } else if (!isNaN(element.left) && isNaN(element.right)) {
            element.x = this.paddingLeft + element.left;
        } else if (isNaN(element.left) && !isNaN(element.right)) {
            element.x = this.paddingLeft + w - element.right - element.actualWidth;
        } else {
            element.x = this.paddingLeft;
        }
        if (!isNaN(element.verticalCenter)) {
            element.y = this.paddingTop + h * 0.5 - element.actualHeight * 0.5 + element.verticalCenter;
        } else if (!isNaN(element.top) && !isNaN(element.bottom)) {
            element.y = this.paddingTop + element.top + (h - element.top - element.bottom) * 0.5 - element.actualHeight * 0.5;
        } else if (!isNaN(element.top) && isNaN(element.bottom)) {
            element.y = this.paddingTop + element.top;
        } else if (isNaN(element.top) && !isNaN(element.bottom)) {
            element.y = this.paddingTop + h - element.bottom - element.actualHeight;
        } else {
            element.y = this.paddingTop;
        }
    }

    protected setElementSize(w: number, h: number, element: ILayoutElement): void {
        if (!isNaN(element.left) && !isNaN(element.right) && !isNaN(element.top) && !isNaN(element.bottom)) {
            element.setActualSize(w - element.left - element.right, h - element.top - element.bottom);
        } else if (!isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
            element.setActualSize(w * element.percentWidth / 100, h * element.percentHeight / 100);
        } else {
            if (!isNaN(element.left) && !isNaN(element.right)) {
                element.actualWidth = w - element.left - element.right;
            } else if (!isNaN(element.percentWidth)) {
                element.actualWidth = w * element.percentWidth / 100;
            }
            if (!isNaN(element.top) && !isNaN(element.bottom)) {
                element.actualHeight = h - element.top - element.bottom;
            } else if (!isNaN(element.percentHeight)) {
                element.actualHeight = h * element.percentHeight / 100;
            }
        }
    }
}
