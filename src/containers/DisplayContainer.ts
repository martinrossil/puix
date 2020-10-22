import DisplayElement from '../core/DisplayElement';
import IDisplayContainer from '../interfaces/containers/IDisplayContainer';
import ILayoutElement from '../interfaces/core/ILayoutElement';
import { Events } from '../enums/Events';
import ILayout from '../interfaces/layouts/ILayout';
import AnchorLayout from '../layouts/AnchorLayout';
import { HorizontalAlign } from '../enums/HorizontalAlign';
import { VerticalAlign } from '../enums/VerticalAlign';
import { Layout } from '../enums/Layout';
import VerticalLayout from '../layouts/VerticalLayout';
import HorizontalLayout from '../layouts/HorizontalLayout';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
        this.addEventListener(Events.INTERNAL_SIZE_CHANGED, this.childChanged);
        this.addEventListener(Events.LAYOUT_DATA_CHANGED, this.childChanged);
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
            this.invalidateDisplay();
            return;
        }
        this.elements.push(element);
        this.appendChild(element as unknown as Node);
        this.invalidateDisplay();
    }

    public getElementAt(index: number): ILayoutElement | null {
        return this.elements[index] || null;
    }

    public removeElement(element: ILayoutElement): void {
        const start: number = this.elements.indexOf(element);
        this.elements.splice(start, 1);
        this.removeChild(element as unknown as Node);
        this.invalidateDisplay();
    }

    public removeAllElements(): void {
        this.elements.length = 0;
        while (this.lastChild) {
            this.removeChild(this.lastChild);
        }
    }

    public addElements(elements: ILayoutElement[]): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        for (const element of elements) {
            this.elements.push(element);
            frag.appendChild(element as unknown as Node);
        }
        this.appendChild(frag);
        this.invalidateDisplay();
    }

    private _layout: Layout = Layout.ANCHOR;

    public set layout(value: Layout) {
        if (this._layout === value) {
            return;
        }
        this._layout = value;
        if (this._layout === Layout.ANCHOR) {
            this.currentLayout = this.anchorLayout;
            return;
        }
        if (this._layout === Layout.HORIZONTAL) {
            this.currentLayout = this.horizontalLayout;
            return;
        }
        this.currentLayout = this.verticalLayout;
    }

    public get layout(): Layout {
        return this._layout;
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
        this.currentLayout.updateLayout(this, this.elements);
    }

    private elements: ILayoutElement[] = [];

    private _currentLayout!: ILayout;

    private set currentLayout(value: ILayout) {
        this._currentLayout = value;
        this.invalidateDisplay();
    }

    private get currentLayout(): ILayout {
        return this._currentLayout || this.anchorLayout;
    }

    private _anchorLayout!: ILayout;

    private get anchorLayout(): ILayout {
        if (this._anchorLayout) {
            return this._anchorLayout;
        }
        this._anchorLayout = new AnchorLayout();
        return this._anchorLayout;
    }

    private _verticalLayout!: ILayout;

    private get verticalLayout(): ILayout {
        if (this._verticalLayout) {
            return this._verticalLayout;
        }
        this._verticalLayout = new VerticalLayout();
        return this._verticalLayout;
    }

    private _horizontalLayout!: ILayout;

    private get horizontalLayout(): ILayout {
        if (this._horizontalLayout) {
            return this._horizontalLayout;
        }
        this._horizontalLayout = new HorizontalLayout();
        return this._horizontalLayout;
    }

    public get numElements(): number {
        return this.elements.length;
    }

    private _gap = 0;

    public set gap(value: number) {
        if (this._gap === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._gap !== 0) {
                this._gap = 0;
                this._horizontalGap = 0;
                this._verticalGap = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._gap = value;
        this._horizontalGap = this._gap;
        this._verticalGap = this._gap;
        this.invalidateDisplay();
    }

    public get gap(): number {
        return this._gap;
    }

    private _horizontalGap = 0;

    public set horizontalGap(value: number) {
        if (this._horizontalGap === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._horizontalGap !== 0) {
                this._horizontalGap = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._horizontalGap = value;
        this.invalidateDisplay();
    }

    public get horizontalGap(): number {
        return this._horizontalGap;
    }

    private _verticalGap = 0;

    public set verticalGap(value: number) {
        if (this._verticalGap === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._verticalGap !== 0) {
                this._verticalGap = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._verticalGap = value;
        this.invalidateDisplay();
    }

    public get verticalGap(): number {
        return this._verticalGap;
    }

    private _horizontalAlign: HorizontalAlign = HorizontalAlign.LEFT;

    public set horizontalAlign(value: HorizontalAlign) {
        if (this._horizontalAlign === value) {
            return;
        }
        this._horizontalAlign = value;
        this.invalidateDisplay();
    }

    public get horizontalAlign(): HorizontalAlign {
        return this._horizontalAlign;
    }

    private _verticalAlign: VerticalAlign = VerticalAlign.TOP;

    public set verticalAlign(value: VerticalAlign) {
        if (this._verticalAlign === value) {
            return;
        }
        this._verticalAlign = value;
        this.invalidateDisplay();
    }

    public get verticalAlign(): VerticalAlign {
        return this._verticalAlign;
    }

    private _padding = 0;

    public set padding(value: number) {
        if (this._padding === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._padding !== 0) {
                this._padding = 0;
                this._paddingLeft = 0;
                this._paddingTop = 0;
                this._paddingRight = 0;
                this._paddingBottom = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._padding = value;
        this._paddingLeft = value;
        this._paddingTop = value;
        this._paddingRight = value;
        this._paddingBottom = value;
        this.invalidateDisplay();
    }

    public get padding(): number {
        return this._padding;
    }

    private _paddingLeft = 0;

    public set paddingLeft(value: number) {
        if (this._paddingLeft === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._paddingLeft !== 0) {
                this._paddingLeft = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._paddingLeft = value;
        this.invalidateDisplay();
    }

    public get paddingLeft(): number {
        return this._paddingLeft;
    }

    private _paddingTop = 0;

    public set paddingTop(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingTop !== 0) {
                this._paddingTop = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._paddingTop = value;
        this.invalidateDisplay();
    }

    public get paddingTop(): number {
        return this._paddingTop;
    }

    private _paddingRight = 0;

    public set paddingRight(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingRight !== 0) {
                this._paddingRight = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._paddingRight = value;
        this.invalidateDisplay();
    }

    public get paddingRight(): number {
        return this._paddingRight;
    }

    private _paddingBottom = 0;

    public set paddingBottom(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingBottom !== 0) {
                this._paddingBottom = 0;
                this.invalidateDisplay();
            }
            return;
        }
        this._paddingBottom = value;
        this.invalidateDisplay();
    }

    public get paddingBottom(): number {
        return this._paddingBottom;
    }
}
customElements.define('display-container', DisplayContainer);
