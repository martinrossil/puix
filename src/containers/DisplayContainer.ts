import DisplayElement from '../core/DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import ILayoutElement from '../interfaces/ILayoutElement';
import LayoutElement from '../core/LayoutElement';
import ILayout from '../interfaces/ILayout';
import InternalSizeLayout from '../layouts/InternalSizeLayout';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
        this.addEventListener('internalSizeChanged', this.childElementInternalSizeChanged as EventListener);
        this.addEventListener('layoutDataChanged', this.layoutDataChanged as EventListener);
    }

    public elements: ILayoutElement[] = [];

    protected childElementInternalSizeChanged(e: CustomEvent): void {
        if (e.target !== this) {
            e.stopImmediatePropagation();
            this.invalidateDisplay();
        }
    }

    protected layoutDataChanged(e: CustomEvent): void {
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

    private _layout: ILayout = new InternalSizeLayout();

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
