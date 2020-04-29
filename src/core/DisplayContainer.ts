import DisplayElement from './DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import IDisplayElement from '../interfaces/IDisplayElement';
import Events from '../enums/Events';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
    }

    protected updateDisplay(width: number, height: number): void {
        super.updateDisplay(width, height);
        this.invalidateActualSize();
    }

    protected invalidateActualSize(): void {
        if (isNaN(this.width) && isNaN(this.height)) {
            this.setActualSizeFromChildren();
        } else if (isNaN(this.width) && !isNaN(this.height)) {
            this.setActualWidthFromChildren();
        } else if (!isNaN(this.width) && isNaN(this.height)) {
            this.setActualHeightFromChildren();
        }
    }

    protected setActualSizeFromChildren(): void {
        let maxWidth = 0;
        let maxHeight = 0;
        const len = this.children.length;
        for (let i = 0; i < len; i++) {
            const element = this.children.item(i) as unknown as IDisplayElement;
            if (maxWidth < element.actualX + element.actualWidth) {
                maxWidth = element.actualX + element.actualWidth;
            }
            if (maxHeight < element.actualY + element.actualHeight) {
                maxHeight = element.actualY + element.actualHeight;
            }
        }
        if (this.actualWidth !== maxWidth || this.actualHeight !== maxHeight) {
            this.setActualSize(maxWidth, maxHeight);
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this);
        }
    }

    protected setActualWidthFromChildren(): void {
        let maxWidth = 0;
        const len = this.children.length;
        for (let i = 0; i < len; i++) {
            const element: IDisplayElement = this.children.item(i) as unknown as IDisplayElement;
            if (maxWidth < element.actualX + element.actualWidth) {
                maxWidth = element.actualX + element.actualWidth;
            }
        }
        if (this.actualWidth !== maxWidth) {
            this.actualWidth = maxWidth;
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this);
        }
    }

    protected setActualHeightFromChildren(): void {
        let maxHeight = 0;
        const len = this.children.length;
        for (let i = 0; i < len; i++) {
            const element = this.children.item(i) as unknown as IDisplayElement;
            if (maxHeight < element.actualY + element.actualHeight) {
                maxHeight = element.actualY + element.actualHeight;
            }
        }
        if (this.actualHeight !== maxHeight) {
            this.actualHeight = maxHeight;
            this.dispatchEventWith(Events.INTERNAL_SIZE_CHANGED, this);
        }
    }

    public addElement(element: IDisplayElement): void {
        this.appendChild(element as unknown as Node);
        this.invalidateDisplay();
    }

    public removeElement(element: IDisplayElement): void {
        this.removeChild(element as DisplayElement);
        this.invalidateDisplay();
    }

    public addElements(elements: IDisplayElement[]): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        const len = elements.length;
        let element: IDisplayElement;
        for (let i = 0; i < len; i++) {
            element = elements[i];
            frag.appendChild(element as DisplayElement);
        }
        this.appendChild(frag);
        this.invalidateDisplay();
    }
}
customElements.define('display-container', DisplayContainer);
