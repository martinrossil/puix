import DisplayElement from '../core/DisplayElement';
import { Events } from '../enums/Events';
import { HorizontalAlign } from '../enums/HorizontalAlign';
import { Layout } from '../enums/Layout';
import { Overflow } from '../enums/Overflow';
import { VerticalAlign } from '../enums/VerticalAlign';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import IScrollContainer from '../interfaces/containers/IScrollContainer';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import IElementCSSInlineStyle from '../interfaces/style/IElementCSSInlineStyle';
import DisplayContainer from './DisplayContainer';

export default class ScrollContainer extends DisplayElement implements IScrollContainer {
    public constructor() {
        super();
        this.name = 'ScrollContainer';
        this.overflow = Overflow.HIDDEN;
        const styleContainer: IElementCSSInlineStyle = this.elementsContainer as unknown as IElementCSSInlineStyle;
        styleContainer.style.willChange = 'transform'; // this will boost scroll performance, no repaints
        this.appendChild(this.outerElement);
        this.addEventListener(Events.INTERNAL_SIZE_CHANGED, this.childChanged);
        this.addEventListener(Events.LAYOUT_DATA_CHANGED, this.childChanged);
    }

    protected childChanged(e: Event): void {
        if (e.target === this) {
            return;
        }
        e.stopImmediatePropagation();
        this.invalidateDisplay();
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        if (!this.hasExplicitWidth(this) && !this.hasExplicitHeight(this)) {
            this.setActualSize(this.elementsContainer.actualWidth, this.elementsContainer.actualHeight);
            this.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        } else if (this.hasExplicitWidth(this) && !this.hasExplicitHeight(this)) {
            this.actualHeight = this.elementsContainer.actualHeight;
            this.elementsContainer.setSize(this.actualWidth, NaN);
            this.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        } else if (!this.hasExplicitWidth(this) && this.hasExplicitHeight(this)) {
            this.actualWidth = this.elementsContainer.actualWidth;
            this.elementsContainer.setSize(NaN, this.actualHeight);
            this.dispatchEvent(new Event(Events.INTERNAL_SIZE_CHANGED, { bubbles: true }));
        } else {
            if (this.horizontalScrollEnabled) {
                this.elementsContainer.setSize(NaN, this.actualHeight);
            } else if (this.verticalScrollEnabled) {
                this.elementsContainer.setSize(this.actualWidth, NaN);
            } else {
                this.elementsContainer.setSize(this.actualWidth, this.actualHeight);
            }
        }
        this.outerContainer.setSize(this.actualWidth + this.scrollBarWidth, this.actualHeight + this.scrollBarHeight);
    }

    private get scrollBarWidth(): number {
        return this.outerElement.offsetWidth - this.outerElement.clientWidth;
    }

    private get scrollBarHeight(): number {
        return this.outerElement.offsetHeight - this.outerElement.clientHeight;
    }

    private _outerContainer!: IDisplayElement;

    private get outerContainer(): IDisplayElement {
        if (!this._outerContainer) {
            this._outerContainer = new DisplayElement();
            this._outerContainer.overflow = Overflow.HIDDEN;
        }
        return this._outerContainer;
    }

    private _outerElement!: HTMLElement;

    private get outerElement(): HTMLElement {
        if (!this._outerElement) {
            this._outerElement = this.outerContainer as unknown as HTMLElement;
            this._outerElement.appendChild(this.elementsContainer as unknown as Node);
        }
        return this._outerElement;
    }

    private _elementsContainer!: IDisplayContainer;

    private get elementsContainer(): IDisplayContainer {
        if (!this._elementsContainer) {
            this._elementsContainer = new DisplayContainer();
        }
        return this._elementsContainer;
    }

    private _scrollEnabled = false;

    public set scrollEnabled(value: boolean) {
        if (this._scrollEnabled === value) {
            return;
        }
        this._scrollEnabled = value;
        this._horizontalScrollEnabled = value;
        this._verticalScrollEnabled = value;
        this.outerContainer.overflow = this.scrollEnabled ? Overflow.SCROLL : Overflow.HIDDEN;
        this.invalidateDisplay();
    }

    public get scrollEnabled(): boolean {
        return this._scrollEnabled;
    }

    private _horizontalScrollEnabled = false;

    public set horizontalScrollEnabled(value: boolean) {
        if (this._horizontalScrollEnabled === value) {
            return;
        }
        this._horizontalScrollEnabled = value;
        this._scrollEnabled = value && this.verticalScrollEnabled;
        this.outerContainer.overflowX = this.horizontalScrollEnabled ? Overflow.SCROLL : Overflow.HIDDEN;
        this.invalidateDisplay();
    }

    public get horizontalScrollEnabled(): boolean {
        return this._horizontalScrollEnabled;
    }

    private _verticalScrollEnabled = false;

    public set verticalScrollEnabled(value: boolean) {
        if (this._verticalScrollEnabled === value) {
            return;
        }
        this._verticalScrollEnabled = value;
        this._scrollEnabled = value && this._horizontalScrollEnabled;
        this.outerContainer.overflowY = this.verticalScrollEnabled ? Overflow.SCROLL : Overflow.HIDDEN;
        this.invalidateDisplay();
    }

    public get verticalScrollEnabled(): boolean {
        return this._verticalScrollEnabled;
    }

    public addElement(element: ILayoutElement): void {
        this.elementsContainer.addElement(element);
    }

    public addElementAt(element: ILayoutElement, index: number): void {
        this.elementsContainer.addElementAt(element, index);
    }

    public getElementAt(index: number): ILayoutElement | null {
        return this.elementsContainer.getElementAt(index);
    }

    public removeElement(element: ILayoutElement): void {
        this.elementsContainer.removeElement(element);
    }

    public removeAllElements(): void {
        this.elementsContainer.removeAllElements();
    }

    public addElements(elements: ILayoutElement[]): void {
        this.elementsContainer.addElements(elements);
    }

    public set layout(value: Layout) {
        this.elementsContainer.layout = value;
    }

    public get layout(): Layout {
        return this.elementsContainer.layout;
    }

    public get numElements(): number {
        return this.elementsContainer.numElements;
    }

    public set gap(value: number) {
        this.elementsContainer.gap = value;
    }

    public get gap(): number {
        return this.elementsContainer.gap;
    }

    public set horizontalGap(value: number) {
        this.elementsContainer.horizontalGap = value;
    }

    public get horizontalGap(): number {
        return this.elementsContainer.horizontalGap;
    }

    public set verticalGap(value: number) {
        this.elementsContainer.verticalGap = value;
    }

    public get verticalGap(): number {
        return this.elementsContainer.verticalGap;
    }

    public set horizontalAlign(value: HorizontalAlign) {
        this.elementsContainer.horizontalAlign = value;
    }

    public get horizontalAlign(): HorizontalAlign {
        return this.elementsContainer.horizontalAlign;
    }

    public set verticalAlign(value: VerticalAlign) {
        this.elementsContainer.verticalAlign = value;
    }

    public get verticalAlign(): VerticalAlign {
        return this.elementsContainer.verticalAlign;
    }

    public set padding(value: number) {
        this.elementsContainer.padding = value;
    }

    public get padding(): number {
        return this.elementsContainer.padding;
    }

    public set paddingLeft(value: number) {
        this.elementsContainer.paddingLeft = value;
    }

    public get paddingLeft(): number {
        return this.elementsContainer.paddingLeft;
    }

    public set paddingTop(value: number) {
        this.elementsContainer.paddingTop = value;
    }

    public get paddingTop(): number {
        return this.elementsContainer.paddingTop;
    }

    public set paddingRight(value: number) {
        this.elementsContainer.paddingRight = value;
    }

    public get paddingRight(): number {
        return this.elementsContainer.paddingRight;
    }

    public set paddingBottom(value: number) {
        this.elementsContainer.paddingBottom = value;
    }

    public get paddingBottom(): number {
        return this.elementsContainer.paddingBottom;
    }
}
customElements.define('scroll-container', ScrollContainer);
