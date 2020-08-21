import Layout from './Layout';
import IHorizontalLayout from './IHorizontalLayout';
import { VerticalAlign } from '../enums/VerticalAlign';
import IDisplayContainer from '../containers/IDisplayContainer';
import SizeElement from '../core/SizeElement';

export default class HorizontalLayout extends Layout implements IHorizontalLayout {
    public constructor(horizontalGap = 0, verticalAlign = VerticalAlign.TOP) {
        super();
        this.name = 'HorizontalLayout';
        this.horizontalGap = horizontalGap;
        this.verticalAlign = verticalAlign;
    }

    protected setSizeFromChildren(container: IDisplayContainer): void {
        let width = 0;
        let height = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (height < element.actualHeight) {
                    height = element.actualHeight;
                }
                width += element.actualWidth + this.horizontalGap;
            }
        }
        width = this.paddingLeft + width - this.horizontalGap + this.paddingRight;
        height = this.paddingTop + height + this.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected setWidthFromChildren(container: IDisplayContainer): void {
        let width = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                width += element.actualWidth + this.horizontalGap;
            }
        }
        width = this.paddingLeft + width - this.horizontalGap + this.paddingRight;
        if (container.actualWidth !== width) {
            container.actualWidth = width;
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected resizeChildren(container: IDisplayContainer): void {
        if (!isNaN(container.width) || !isNaN(container.percentWidth)) {
            this.setElementsSize(container);
        } else {
            this.setElementsHeight(container);
        }
    }

    protected setElementsSize(container: IDisplayContainer): void {
        let widthSum = 0;
        let percentWidthSum = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (isNaN(element.percentWidth)) {
                    widthSum += element.actualWidth;
                } else {
                    percentWidthSum += element.percentWidth;
                }
            }
        }
        const actualWidth = container.actualWidth - this.paddingLeft - this.paddingRight;
        const actualHeight = container.actualHeight - this.paddingTop - this.paddingBottom;
        const horizontalGapSumWidth = this.horizontalGap * (container.elements.length - 1);
        const actualWidthLeftForPercentWidth = actualWidth - widthSum - horizontalGapSumWidth;
        const pixelPercentRatio = actualWidthLeftForPercentWidth / percentWidthSum;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (!isNaN(element.percentHeight)) {
                    element.actualHeight = actualHeight * element.percentHeight / 100;
                } else if (this.verticalAlign === VerticalAlign.FILL) {
                    element.actualHeight = actualHeight;
                }
                if (!isNaN(element.percentWidth)) {
                    element.actualWidth = pixelPercentRatio * element.percentWidth;
                }
            }
        }
    }

    protected setElementsHeight(container: IDisplayContainer): void {
        const h = container.actualHeight - this.paddingTop - this.paddingBottom;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                if (!isNaN(element.percentHeight)) {
                    element.actualHeight = h * element.percentHeight / 100;
                } else if (this.verticalAlign === VerticalAlign.FILL) {
                    element.actualHeight = h;
                }
            }
        }
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

    protected layoutTop(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                element.setPosition(x, this.paddingTop);
                x += element.actualWidth + this.horizontalGap;
            }
        }
    }

    protected layoutMiddle(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                element.setPosition(x, container.actualHeight * 0.5 - element.actualHeight * 0.5);
                x += element.actualWidth + this.horizontalGap;
            }
        }
    }

    protected layoutBottom(container: IDisplayContainer): void {
        let x = this.paddingLeft;
        let y = 0;
        for (const element of container.elements) {
            if (element.includeInLayout) {
                y = container.actualHeight - this.paddingBottom - element.actualHeight;
                element.setPosition(x, y);
                x += element.actualWidth + this.horizontalGap;
            }
        }
    }

    private _horizontalGap = 0;

    public set horizontalGap(value: number) {
        if (isNaN(value)) {
            if (this._horizontalGap !== 0) {
                this._horizontalGap = 0;
                this.invalidateLayout();
            }
        } else if (this._horizontalGap !== value) {
            if (value < 0) {
                this._horizontalGap = 0;
            } else {
                this._horizontalGap = value;
            }
            this.invalidateLayout();
        }
    }

    public get horizontalGap(): number {
        return this._horizontalGap;
    }

    private _verticalAlign: string = VerticalAlign.TOP;

    public set verticalAlign(value: string) {
        if (this._verticalAlign !== value) {
            this._verticalAlign = value;
            this.invalidateLayout();
        }
    }

    public get verticalAlign(): string {
        return this._verticalAlign;
    }
}
