import DisplayElement from '../core/DisplayElement';
import ScrollContainerInterface from './ScrollContainerInterface';
import DisplayContainerInterface from './DisplayContainerInterface';
import DisplayContainer from './DisplayContainer';
import LayoutElementInterface from '../core/LayoutElementInterface';
import LayoutInterface from '../layouts/LayoutInterface';
import ScrollPolicy from '../consts/ScrollPolicy';
import SizeElement from '../core/SizeElement';
import LayoutElement from '../core/LayoutElement';
import Overflow from '../consts/Overflow';

export default class ScrollContainer extends DisplayElement implements ScrollContainerInterface {
    public constructor() {
        super();
        this.name = 'ScrollContainer';
        const styleContainer: ElementCSSInlineStyle = this.container as unknown as ElementCSSInlineStyle;
        styleContainer.style.willChange = 'transform'; // this will boost scroll performance, no repaints
        this.overflow = Overflow.HIDDEN;
        this.appendChild(this.container as unknown as Node);
        this.addEventListener(SizeElement.INTERNAL_SIZE_CHANGED, this.childChanged as EventListener);
        this.addEventListener(LayoutElement.LAYOUT_DATA_CHANGED, this.childChanged as EventListener);
    }

    protected childChanged(e: CustomEvent): void {
        if (e.target !== this) {
            e.stopImmediatePropagation();
            this.invalidateDisplay();
        }
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.setContainerSize();
    }

    protected setContainerSize(): void {
        let internalSizeHasChanged = false;
        if (!isNaN(this.width) || !isNaN(this.percentWidth)) {
            if (this.horizontalScrollPolicy === ScrollPolicy.OFF) {
                this.container.width = this.actualWidth - (this.actualWidth - this.clientWidth);
            }
        } else {
            this.actualWidth = this.container.actualWidth;
            internalSizeHasChanged = true;
        }
        if (!isNaN(this.height) || !isNaN(this.percentHeight)) {
            if (this.verticalScrollPolicy === ScrollPolicy.OFF) {
                this.container.height = this.actualHeight - (this.actualHeight - this.clientHeight);
            }
        } else {
            this.actualHeight = this.container.actualHeight;
            internalSizeHasChanged = true;
        }
        if (internalSizeHasChanged) {
            this.dispatchEventWith(SizeElement.INTERNAL_SIZE_CHANGED, this, true);
        }
    }

    public addElement(element: LayoutElementInterface): void {
        this.container.addElement(element);
    }

    public addElementAt(element: LayoutElementInterface, index: number): void {
        this.container.addElementAt(element, index);
    }

    public addElements(elements: LayoutElementInterface[]): void {
        this.container.addElements(elements);
    }

    public getElementAt(index: number): LayoutElementInterface | null {
        return this.container.getElementAt(index);
    }

    public removeElement(element: LayoutElementInterface): void {
        this.container.removeElement(element);
    }

    private _horizontalScrollPolicy: string = ScrollPolicy.OFF;

    public set horizontalScrollPolicy(value: string) {
        if (this._horizontalScrollPolicy !== value) {
            this._horizontalScrollPolicy = value;
            if (value === ScrollPolicy.ON) {
                this.style.overflowX = Overflow.SCROLL;
            } else if (value === ScrollPolicy.OFF) {
                this.style.overflowX = Overflow.HIDDEN;
            } else if (value === ScrollPolicy.AUTO) {
                this.style.overflowX = Overflow.AUTO;
            }
        }
    }

    public get horizontalScrollPolicy(): string {
        return this._horizontalScrollPolicy;
    }

    private _verticalScrollPolicy: string = ScrollPolicy.OFF;

    public set verticalScrollPolicy(value: string) {
        if (this._verticalScrollPolicy !== value) {
            this._verticalScrollPolicy = value;
            if (value === ScrollPolicy.ON) {
                this.style.overflowY = Overflow.SCROLL;
            } else if (value === ScrollPolicy.OFF) {
                this.style.overflowY = Overflow.HIDDEN;
            } else if (value === ScrollPolicy.AUTO) {
                this.style.overflowY = Overflow.AUTO;
            }
        }
    }

    public get verticalScrollPolicy(): string {
        return this._verticalScrollPolicy;
    }

    public get elements(): LayoutElementInterface[] {
        return this.container.elements;
    }

    public set layout(value: LayoutInterface) {
        this.container.layout = value;
    }

    public get layout(): LayoutInterface {
        return this.container.layout;
    }

    private _container: DisplayContainerInterface = new DisplayContainer();

    protected get container(): DisplayContainerInterface {
        return this._container;
    }
}
customElements.define('scroll-container', ScrollContainer);
