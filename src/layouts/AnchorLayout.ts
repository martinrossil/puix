import { Events } from '../enums/Events';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import BaseLayout from './BaseLayout';

export default class AnchorLayout extends BaseLayout {
    protected setInternalSize(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let width = 0;
        let height = 0;
        for (const element of elements) {
            if (!isNaN(element.left) && !isNaN(element.right)) {
                if (width < element.left + element.actualWidth + element.right) {
                    width = element.left + element.actualWidth + element.right;
                }
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                if (width < element.left + element.actualWidth) {
                    width = element.left + element.actualWidth;
                }
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                if (width < element.actualWidth + element.right) {
                    width = element.actualWidth + element.right;
                }
            } else {
                if (width < element.actualWidth) {
                    width = element.actualWidth;
                }
            }
            if (!isNaN(element.top) && !isNaN(element.bottom)) {
                if (height < element.top + element.actualHeight + element.bottom) {
                    height = element.top + element.actualHeight + element.bottom;
                }
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                if (height < element.top + element.actualHeight) {
                    height = element.top + element.actualHeight;
                }
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                if (height < element.actualHeight + element.bottom) {
                    height = element.actualHeight + element.bottom;
                }
            } else {
                if (height < element.actualHeight) {
                    height = element.actualHeight;
                }
            }
        }
        width = container.paddingLeft + width + container.paddingRight;
        height = container.paddingTop + height + container.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this, true);
        }
    }

    protected resizeElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        const w = container.actualWidth - container.paddingLeft - container.paddingRight;
        const h = container.actualHeight - container.paddingTop - container.paddingBottom;
        for (const element of elements) {
            if (!isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                element.setActualSize(w * element.percentWidth / 100, h * element.percentHeight / 100);
            } else if (!isNaN(element.percentWidth) && isNaN(element.percentHeight)) {
                element.actualWidth = w * element.percentWidth / 100;
            } else if (isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                element.actualHeight = h * element.percentHeight / 100;
            }
            if (!isNaN(element.left) && !isNaN(element.right) && !isNaN(element.top) && !isNaN(element.bottom)) {
                element.setActualSize(w - element.left - element.right, h - element.top - element.bottom);
            } else if (!isNaN(element.left) && !isNaN(element.right)) {
                element.actualWidth = w - element.left - element.right;
            } else if (!isNaN(element.top) && !isNaN(element.bottom)) {
                element.actualHeight = h - element.top - element.bottom;
            }
        }
    }

    protected layoutElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        const w = container.actualWidth - container.paddingLeft - container.paddingRight;
        const h = container.actualHeight - container.paddingTop - container.paddingBottom;
        for (const element of elements) {
            if (!isNaN(element.left) && !isNaN(element.right)) {
                element.x = container.paddingLeft + w * 0.5 - element.actualWidth * 0.5 - (element.left - element.right);
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                element.x = container.actualWidth - container.paddingRight - element.right - element.actualWidth;
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                element.x = container.paddingLeft + element.left;
            } else {
                element.x = container.paddingLeft;
            }
            if (!isNaN(element.top) && !isNaN(element.bottom)) {
                element.y = container.paddingTop + h * 0.5 - element.actualHeight * 0.5 - (element.top - element.bottom);
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                element.y = container.actualHeight - container.paddingBottom - element.bottom - element.actualHeight;
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                element.y = container.paddingTop + element.top;
            } else {
                element.y = container.paddingTop;
            }
            if (!isNaN(element.horizontalCenter)) {
                element.x = container.actualWidth * 0.5 - element.actualWidth * 0.5 + element.horizontalCenter;
            }
            if (!isNaN(element.verticalCenter)) {
                element.y = container.actualHeight * 0.5 - element.actualHeight * 0.5 + element.verticalCenter;
            }
        }
    }

    protected setInternalWidth(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let width = 0;
        for (const element of elements) {
            if (!isNaN(element.left) && !isNaN(element.right)) {
                if (width < element.left + element.actualWidth + element.right) {
                    width = element.left + element.actualWidth + element.right;
                }
            } else if (!isNaN(element.left) && isNaN(element.right)) {
                if (width < element.left + element.actualWidth) {
                    width = element.left + element.actualWidth;
                }
            } else if (isNaN(element.left) && !isNaN(element.right)) {
                if (width < element.actualWidth + element.right) {
                    width = element.actualWidth + element.right;
                }
            } else {
                if (width < element.actualWidth) {
                    width = element.actualWidth;
                }
            }
        }
        width = container.paddingLeft + width + container.paddingRight;
        if (container.actualWidth !== width) {
            container.actualWidth = width;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this, true);
        }
    }

    protected setInternalHeight(container: IDisplayContainer, elements: ILayoutElement[]): void {
        let height = 0;
        for (const element of elements) {
            if (!isNaN(element.top) && !isNaN(element.bottom)) {
                if (height < element.top + element.actualHeight + element.bottom) {
                    height = element.top + element.actualHeight + element.bottom;
                }
            } else if (!isNaN(element.top) && isNaN(element.bottom)) {
                if (height < element.top + element.actualHeight) {
                    height = element.top + element.actualHeight;
                }
            } else if (isNaN(element.top) && !isNaN(element.bottom)) {
                if (height < element.actualHeight + element.bottom) {
                    height = element.actualHeight + element.bottom;
                }
            } else {
                if (height < element.actualHeight) {
                    height = element.actualHeight;
                }
            }
        }
        height = container.paddingTop + height + container.paddingBottom;
        if (container.actualHeight !== height) {
            container.actualHeight = height;
            container.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this, true);
        }
    }
}
