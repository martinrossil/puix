import Layout from './Layout';
import IVerticalLayout from '../interfaces/layouts/IVerticalLayout';
import HorizontalAlign from '../consts/HorizontalAlign';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import SizeElement from '../core/SizeElement';

export default class VerticalLayout extends Layout implements IVerticalLayout {
    public constructor(verticalGap = 0, horizontalAlign = HorizontalAlign.LEFT) {
        super();
        this.name = 'VerticalLayout';
        this.verticalGap = verticalGap;
        this.horizontalAlign = horizontalAlign;
    }

    protected setSizeFromChildren(container: IDisplayContainer): void {
        let width = 0;
        let height = 0;
        for (const element of container.elements) {
            if (width < element.actualWidth) {
                width = element.actualWidth;
            }
            height += element.actualHeight + this.verticalGap;
        }
        width = this.paddingLeft + width + this.paddingRight;
        height = this.paddingTop + height - this.verticalGap + this.paddingBottom;
        if (container.actualWidth !== width || container.actualHeight !== height) {
            container.setActualSize(width, height);
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected setHeightFromChildren(container: IDisplayContainer): void {
        let height = 0;
        for (const element of container.elements) {
            height += element.actualHeight + this.verticalGap;
        }
        height = this.paddingTop + height - this.verticalGap + this.paddingBottom;
        if (container.actualHeight !== height) {
            container.actualHeight = height;
            container.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, container, true);
        }
    }

    protected resizeChildren(container: IDisplayContainer): void {
        if (!isNaN(container.height) || !isNaN(container.percentHeight)) {
            this.setElementsSize(container);
        } else {
            this.setElementsWidth(container);
        }
    }

    protected setElementsSize(container: IDisplayContainer): void {
        let heightSum = 0;
        let percentHeightSum = 0;
        for (const element of container.elements) {
            if (isNaN(element.percentHeight)) {
                heightSum += element.actualHeight;
            } else {
                percentHeightSum += element.percentHeight;
            }
        }
        const actualWidth = container.actualWidth - this.paddingLeft - this.paddingRight;
        const actualHeight = container.actualHeight - this.paddingTop - this.paddingBottom;
        const verticalGapSumHeight = this.verticalGap * (container.elements.length - 1);
        const actualHeightLeftForPercentHeight = actualHeight - heightSum - verticalGapSumHeight;
        const pixelPercentRatio = actualHeightLeftForPercentHeight / percentHeightSum;
        for (const element of container.elements) {
            if (!isNaN(element.percentWidth)) {
                element.actualWidth = actualWidth * element.percentWidth / 100;
            } else if (this.horizontalAlign === HorizontalAlign.FILL) {
                element.actualWidth = actualWidth;
            }
            if (!isNaN(element.percentHeight)) {
                element.actualHeight = pixelPercentRatio * element.percentHeight;
            }
        }
    }

    protected setElementsWidth(container: IDisplayContainer): void {
        const w = container.actualWidth - this.paddingLeft - this.paddingRight;
        for (const element of container.elements) {
            if (!isNaN(element.percentWidth)) {
                element.actualWidth = w * element.percentWidth / 100;
            } else if (this.horizontalAlign === HorizontalAlign.FILL) {
                element.actualWidth = w;
            }
        }
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

    protected layoutRight(container: IDisplayContainer): void {
        let x = 0;
        let y = this.paddingTop;
        for (const element of container.elements) {
            x = container.actualWidth - this.paddingRight - element.actualWidth;
            element.setPosition(x, y);
            y += element.actualHeight + this.verticalGap;
        }
    }

    protected layoutCenter(container: IDisplayContainer): void {
        let x = 0;
        let y = this.paddingTop;
        for (const element of container.elements) {
            x = container.actualWidth * 0.5 - element.actualWidth * 0.5;
            element.setPosition(x, y);
            y += element.actualHeight + this.verticalGap;
        }
    }

    protected layoutLeft(container: IDisplayContainer): void {
        let y = this.paddingTop;
        for (const element of container.elements) {
            element.setPosition(this.paddingLeft, y);
            y += element.actualHeight + this.verticalGap;
        }
    }

    private _verticalGap = 0;

    public set verticalGap(value: number) {
        if (isNaN(value)) {
            if (this._verticalGap !== 0) {
                this._verticalGap = 0;
                this.invalidateLayout();
            }
        } else if (this._verticalGap !== value) {
            if (value < 0) {
                this._verticalGap = 0;
            } else {
                this._verticalGap = value;
            }
            this.invalidateLayout();
        }
    }

    public get verticalGap(): number {
        return this._verticalGap;
    }

    private _horizontalAlign: string = HorizontalAlign.LEFT;

    public set horizontalAlign(value: string) {
        if (this._horizontalAlign !== value) {
            this._horizontalAlign = value;
            this.invalidateLayout();
        }
    }

    public get horizontalAlign(): string {
        return this._horizontalAlign;
    }
}
