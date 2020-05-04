import BaseLayout from './BaseLayout';
import ILayoutContainer from '../interfaces/ILayoutContainer';
import IDisplayElement from '../interfaces/IDisplayElement';
import AnchorLayoutData from '../layouts/AnchorLayoutData';
import IAnchorLayoutData from '../interfaces/IAnchorLayoutData';
import Events from '../enums/Events';

export default class AnchorLayout extends BaseLayout {
    public constructor() {
        super();
        this.name = 'AnchorLayout';
    }

    public updateLayout(container: ILayoutContainer): void {
        super.updateLayout(container);
        if (isNaN(container.width) && isNaN(container.height)) {
            this.setActualSizeFromChildren(container);
        } else if (isNaN(container.width) && !isNaN(container.height)) {
            this.setActualWidthFromChildren(container);
        } else if (!isNaN(container.width) && isNaN(container.height)) {
            this.setActualHeightFromChildren(container);
        } else {
            this.layoutChildren(container, false);
        }
    }

    protected setActualSizeFromChildren(container: ILayoutContainer): void {
        const len = container.children.length;
        let width = 0;
        let height = 0;
        let element: IDisplayElement;
        let elementWidth = 0;
        let elementHeight = 0;
        for (let i = 0; i < len; i++) {
            element = container.children.item(i) as unknown as IDisplayElement;
            elementWidth = this.getCalculatedElementWidth(element);
            elementHeight = this.getCalculatedElementHeight(element);
            if (width < elementWidth) {
                width = elementWidth;
            }
            if (height < elementHeight) {
                height = elementHeight;
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        height = this.paddingTop + height + this.paddingBottom;
        const hasActualSizeChanged = container.actualWidth !== width || container.actualHeight !== height;
        container.setActualSize(width, height);
        this.layoutChildren(container, hasActualSizeChanged);
    }

    protected setActualWidthFromChildren(container: ILayoutContainer): void {
        const len = container.children.length;
        let width = 0;
        let element: IDisplayElement;
        let elementWidth = 0;
        for (let i = 0; i < len; i++) {
            element = container.children.item(i) as unknown as IDisplayElement;
            elementWidth = this.getCalculatedElementWidth(element);
            if (width < elementWidth) {
                width = elementWidth;
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        const hasActualSizeChanged = container.actualWidth !== width;
        container.actualWidth = width;
        this.layoutChildren(container, hasActualSizeChanged);
    }

    protected setActualHeightFromChildren(container: ILayoutContainer): void {
        const len = container.children.length;
        let height = 0;
        let element: IDisplayElement;
        let elementHeight = 0;
        for (let i = 0; i < len; i++) {
            element = container.children.item(i) as unknown as IDisplayElement;
            elementHeight = this.getCalculatedElementHeight(element);
            if (height < elementHeight) {
                height = elementHeight;
            }
        }
        height = this.paddingTop + height + this.paddingBottom;
        const hasActualSizeChanged = container.actualHeight !== height;
        container.actualHeight = height;
        this.layoutChildren(container, hasActualSizeChanged);
    }

    protected getCalculatedElementWidth(element: IDisplayElement): number {
        if (element.layoutData instanceof AnchorLayoutData) {
            const layoutData: IAnchorLayoutData = element.layoutData;
            if (isNaN(element.width)) {
                if (!isNaN(layoutData.percentWidth)) {
                    return 0;
                }
                if (!isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                    return layoutData.left + layoutData.right;
                }
                if (!isNaN(layoutData.left) && isNaN(layoutData.right)) {
                    return layoutData.left;
                }
                if (isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                    return layoutData.right;
                }
                return 0;
            } else {
                if (!isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                    return (layoutData.left + element.actualWidth + layoutData.right);
                }
                if (!isNaN(layoutData.left) && isNaN(layoutData.right)) {
                    return layoutData.left + element.actualWidth;
                }
                if (isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                    return element.actualWidth + layoutData.right;
                }
                return element.actualWidth;
            }
        } else {
            return element.actualWidth;
        }
    }

    protected getCalculatedElementHeight(element: IDisplayElement): number {
        if (element.layoutData instanceof AnchorLayoutData) {
            const layoutData: IAnchorLayoutData = element.layoutData;
            if (isNaN(element.height)) {
                if (!isNaN(layoutData.percentHeight)) {
                    return 0;
                }
                if (!isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                    return layoutData.top + layoutData.bottom;
                }
                if (!isNaN(layoutData.top) && isNaN(layoutData.bottom)) {
                    return layoutData.top;
                }
                if (isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                    return layoutData.bottom;
                }
                return 0;
            } else {
                if (!isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                    return layoutData.top + element.actualHeight + layoutData.bottom;
                }
                if (!isNaN(layoutData.top) && isNaN(layoutData.bottom)) {
                    return layoutData.top + element.actualHeight;
                }
                if (isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                    return element.actualHeight + layoutData.bottom;
                }
                return element.actualHeight;
            }
        } else {
            return element.actualHeight;
        }
    }

    protected layoutChildren(container: ILayoutContainer, hasActualSizeChanged: boolean): void {
        const len = container.children.length;
        const availableWidth = container.actualWidth - this.paddingLeft - this.paddingRight;
        const availableHeight = container.actualHeight - this.paddingTop - this.paddingBottom;
        for (let i = 0; i < len; i++) {
            const element: IDisplayElement = container.children.item(i) as unknown as IDisplayElement;
            if (element.layoutData instanceof AnchorLayoutData) {
                this.setElementSize(availableWidth, availableHeight, element, element.layoutData);
                this.setElementPosition(availableWidth, availableHeight, element, element.layoutData);
            } else {
                element.setActualPosition(this.paddingLeft + element.actualX, this.paddingTop + element.actualY);
            }
        }
        if (hasActualSizeChanged) {
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, container);
        }
    }

    protected setElementSize(w: number, h: number, element: IDisplayElement, layoutData: IAnchorLayoutData): void {
        if (layoutData instanceof AnchorLayoutData) {
            if (isNaN(element.width)) {
                if (!isNaN(layoutData.percentWidth)) {
                    element.actualWidth = w * layoutData.percentWidth / 100;
                } else if (!isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                    element.actualWidth = w - layoutData.left - layoutData.right;
                }
            }
            if (isNaN(element.height)) {
                if (!isNaN(layoutData.percentHeight)) {
                    element.actualHeight = h * layoutData.percentHeight / 100;
                } else if (!isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                    element.actualHeight = h - layoutData.top - layoutData.bottom;
                }
            }
        }
    }

    protected setElementPosition(w: number, h: number, element: IDisplayElement, layoutData: IAnchorLayoutData): void {
        if (layoutData instanceof AnchorLayoutData) {
            if (!isNaN(layoutData.horizontalCenter)) {
                element.actualX = (w * 0.5 - layoutData.horizontalCenter) - (element.actualWidth * 0.5);
            } else if (!isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                element.actualX = this.paddingLeft + layoutData.left + (w - layoutData.left - layoutData.right) * 0.5 - (element.actualWidth * 0.5);
            } else if (!isNaN(layoutData.left) && isNaN(layoutData.right)) {
                element.actualX = this.paddingLeft + layoutData.left;
            } else if (isNaN(layoutData.left) && !isNaN(layoutData.right)) {
                element.actualX = w + this.paddingLeft - layoutData.right - element.actualWidth;
            } else {
                element.actualX = this.paddingLeft;
            }
            if (!isNaN(layoutData.verticalCenter)) {
                element.actualY = (h * 0.5 - layoutData.verticalCenter) - (element.actualHeight * 0.5);
            } else if (!isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                element.actualY = this.paddingTop + layoutData.top + (h - layoutData.top - layoutData.bottom) * 0.5 - (element.actualHeight * 0.5);
            } else if (!isNaN(layoutData.top) && isNaN(layoutData.bottom)) {
                element.actualY = this.paddingTop + layoutData.top;
            } else if (isNaN(layoutData.top) && !isNaN(layoutData.bottom)) {
                element.actualY = h + this.paddingTop - layoutData.bottom - element.actualHeight;
            } else {
                element.actualY = this.paddingTop;
            }
        } else {
            element.setActualPosition(this.paddingLeft + element.actualX, this.paddingTop + element.actualY);
        }
    }
}
