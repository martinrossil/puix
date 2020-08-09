import DisplayElement from '../core/DisplayElement';
import DisplayContainerInterface from './DisplayContainerInterface';
import LayoutElementInterface from '../core/LayoutElementInterface';
import LayoutElement from '../core/LayoutElement';
import LayoutInterface from '../layouts/LayoutInterface';
import Layout from '../layouts/Layout';
import SizeElement from '../core/SizeElement';

export default class DisplayContainer extends DisplayElement implements DisplayContainerInterface {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
        this.addEventListener(SizeElement.INTERNAL_SIZE_CHANGED, this.childChanged as EventListener);
        this.addEventListener(LayoutElement.LAYOUT_DATA_CHANGED, this.childChanged as EventListener);
    }

    public elements: LayoutElementInterface[] = [];

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

    public addElement(element: LayoutElementInterface): void {
        this.elements.push(element);
        this.appendChild(element as unknown as Node);
        this.invalidateDisplay();
    }

    public addElementAt(element: LayoutElementInterface, index: number): void {
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

    public getElementAt(index: number): LayoutElementInterface | null {
        if (this.elements[index]) {
            return this.elements[index];
        }
        return null;
    }

    public removeElement(element: LayoutElementInterface): void {
        const start: number = this.elements.indexOf(element);
        this.elements.splice(start, 1);
        this.removeChild(element as LayoutElement);
        this.invalidateDisplay();
    }

    public addElements(elements: LayoutElementInterface[]): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        for (const element of elements) {
            this.elements.push(element);
            frag.appendChild(element as LayoutElement);
        }
        this.appendChild(frag);
        this.invalidateDisplay();
    }

    private _layout: LayoutInterface = new Layout();

    public set layout(value: LayoutInterface) {
        if (this._layout !== value) {
            this._layout = value;
            this.invalidateDisplay();
        }
    }

    public get layout(): LayoutInterface {
        return this._layout;
    }
}
customElements.define('display-container', DisplayContainer);
