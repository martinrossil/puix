import IDisplayContainer from '../interfaces/IDisplayContainer';
import ILayoutElement from '../interfaces/ILayoutElement';
import InternalSizeLayout from './InternalSizeLayout';

export default class AnchorLayout extends InternalSizeLayout {
    public constructor() {
        super();
        this.name = 'AnchorLayout';
    }

    protected layoutChildren(container: IDisplayContainer): void {
        const availableWidth = container.width - this.paddingLeft - this.paddingRight;
        const availableHeight = container.height - this.paddingTop - this.paddingBottom;
        const elements: ILayoutElement[] = container.elements;
        for (const element of elements) {
            this.setElementSize(availableWidth, availableHeight, element);
            this.setElementPosition(availableWidth, availableHeight, element);
        }
    }

    protected setElementSize(w: number, h: number, element: ILayoutElement): void {
        if (isNaN(element.explicitWidth)) {
            if (!isNaN(element.percentWidth)) {
                element.width = w * element.percentWidth / 100;
            } else if (!isNaN(element.left) && !isNaN(element.right)) {
                element.width = w - element.left - element.right;
            }
        }
        if (isNaN(element.explicitHeight)) {
            if (!isNaN(element.percentHeight)) {
                element.height = h * element.percentHeight / 100;
            } else if (!isNaN(element.top) && !isNaN(element.bottom)) {
                element.height = h - element.top - element.bottom;
            }
        }
    }

    protected setElementPosition(w: number, h: number, element: ILayoutElement): void {
        if (!isNaN(element.horizontalCenter)) {
            element.actualX = (this.paddingLeft + w + this.paddingRight) * 0.5 - element.width * 0.5 + element.horizontalCenter;
        } else if (!isNaN(element.x)) {
            element.actualX = this.paddingLeft + element.x;
        } else if (!isNaN(element.percentWidth)) {
            element.actualX = this.paddingLeft + w * 0.5 - element.width * 0.5;
        } else {
            element.actualX = this.paddingLeft;
        }
        if (!isNaN(element.verticalCenter)) {
            element.actualY = (this.paddingTop + h + this.paddingBottom) * 0.5 - element.height * 0.5 + element.verticalCenter;
        } else if (!isNaN(element.y)) {
            element.actualY = this.paddingTop + element.y;
        } else if (!isNaN(element.percentHeight)) {
            element.actualY = this.paddingTop + h * 0.5 - element.height * 0.5;
        } else {
            element.actualY = this.paddingTop;
        }
    }
}
