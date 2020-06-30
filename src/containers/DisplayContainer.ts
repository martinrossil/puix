import DisplayElement from '../core/DisplayElement';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import LayoutElement from '../core/LayoutElement';
import ILayout from '../interfaces/layouts/ILayout';
import Events from '../consts/Events';
import Layout from '../layouts/Layout';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
        this.addEventListener(Events.INTERNAL_SIZE_CHANGED, this.childChanged as EventListener);
        this.addEventListener(Events.LAYOUT_DATA_CHANGED, this.childChanged as EventListener);
    }

    public elements: ILayoutElement[] = [];

    protected childChanged(e: CustomEvent): void {
        if (e.target !== this) {
            e.stopImmediatePropagation();
            this.invalidateDisplay();
        }
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.layout.updateLayout(this);
    }

    public addElement(element: ILayoutElement): void {
        this.elements.push(element);
        this.appendChild(element as unknown as Node);
        this.invalidateDisplay();
    }

    public addElementAt(element: ILayoutElement, index: number): void {
        if (this.elements[index]) {
            const beforeElement: Node = this.elements[index] as unknown as Node;
            this.elements.splice(index, 0, element);
            this.insertBefore(element as unknown as Node, beforeElement);
        } else {
            this.elements.push(element);
            this.appendChild(element as unknown as Node);
        }
        this.invalidateDisplay();
    }

    public getElementAt(index: number): ILayoutElement | null {
        if (this.elements[index]) {
            return this.elements[index];
        }
        return null;
    }

    public removeElement(element: ILayoutElement): void {
        const start: number = this.elements.indexOf(element);
        this.elements.splice(start, 1);
        this.removeChild(element as LayoutElement);
        this.invalidateDisplay();
    }

    public addElements(elements: ILayoutElement[]): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        for (const element of elements) {
            this.elements.push(element);
            frag.appendChild(element as LayoutElement);
        }
        this.appendChild(frag);
        this.invalidateDisplay();
    }

    private _layout: ILayout = new Layout();

    public set layout(value: ILayout) {
        if (this._layout !== value) {
            this._layout = value;
            this.invalidateDisplay();
        }
    }

    public get layout(): ILayout {
        return this._layout;
    }
}
customElements.define('display-container', DisplayContainer);
