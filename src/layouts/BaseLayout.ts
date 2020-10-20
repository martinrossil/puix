import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import ILayout from '../interfaces/layouts/ILayout';

export default class BaseLayout implements ILayout {
    public updateLayout(container: IDisplayContainer, elements: ILayoutElement[]): void {
        if (!container.hasExplicitSize) {
            if (!container.hasExplicitWidth && !container.hasExplicitHeight) {
                this.setInternalSize(container, elements);
            } else if (!container.hasExplicitWidth && container.hasExplicitHeight) {
                this.setInternalWidth(container, elements);
            } else if (container.hasExplicitWidth && !container.hasExplicitHeight) {
                this.setInternalHeight(container, elements);
            }
        }
        this.resizeElements(container, elements);
        this.layoutElements(container, elements);
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
