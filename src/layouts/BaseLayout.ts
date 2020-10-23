import { HorizontalAlign } from '../enums/HorizontalAlign';
import { VerticalAlign } from '../enums/VerticalAlign';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import ILayout from '../interfaces/layouts/ILayout';

export default class BaseLayout implements ILayout {
    public updateLayout(container: IDisplayContainer, elements: ILayoutElement[]): void {
        if (!this.hasExplicitSize(container)) {
            if (!this.hasExplicitWidth(container) && !this.hasExplicitHeight(container)) {
                this.setInternalSize(container, elements);
            } else if (!this.hasExplicitWidth(container) && this.hasExplicitHeight(container)) {
                this.setInternalWidth(container, elements);
            } else if (this.hasExplicitWidth(container) && !this.hasExplicitHeight(container)) {
                this.setInternalHeight(container, elements);
            }
        }
        this.resizeElements(container, elements);
        this.layoutElements(container, elements);
    }

    private hasExplicitSize(element: ILayoutElement): boolean {
        return this.hasExplicitWidth(element) && this.hasExplicitHeight(element);
    }

    private hasExplicitWidth(element: ILayoutElement): boolean {
        if (!isNaN(element.width)) {
            return true;
        }
        if (!isNaN(element.percentWidth)) {
            return true;
        }
        if (!isNaN(element.left) && !isNaN(element.right)) {
            return true;
        }
        const node: Node = element as unknown as Node;
        const parent: IDisplayContainer = node.parentNode as unknown as IDisplayContainer;
        return parent.horizontalAlign === HorizontalAlign.FILL;
    }

    private hasExplicitHeight(element: ILayoutElement): boolean {
        if (!isNaN(element.height)) {
            return true;
        }
        if (!isNaN(element.percentHeight)) {
            return true;
        }
        if (!isNaN(element.top) && !isNaN(element.bottom)) {
            return true;
        }
        const node: Node = element as unknown as Node;
        const parent: IDisplayContainer = node.parentNode as unknown as IDisplayContainer;
        return parent.verticalAlign === VerticalAlign.FILL;
    }

     // eslint-disable-next-line
    protected setInternalSize(container: IDisplayContainer, elements: ILayoutElement[]): void {
        // override
    }

     // eslint-disable-next-line
    protected setInternalWidth(container: IDisplayContainer, elements: ILayoutElement[]): void {
        // override
    }

     // eslint-disable-next-line
    protected setInternalHeight(container: IDisplayContainer, elements: ILayoutElement[]): void {
        // override
    }

     // eslint-disable-next-line
    protected resizeElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        // override
    }

     // eslint-disable-next-line
    protected layoutElements(container: IDisplayContainer, elements: ILayoutElement[]): void {
        // override
    }
}
