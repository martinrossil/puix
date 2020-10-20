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
        this.removeChild(element as unknown as Node);
        this.invalidateDisplay();
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

    private _layout: Layout.ANCHOR | Layout.HORIZONTAL | Layout.VERTICAL | Layout.WRAP | Layout.GRID = Layout.ANCHOR;

    public set layout(value: Layout.ANCHOR | Layout.HORIZONTAL | Layout.VERTICAL | Layout.WRAP | Layout.GRID) {
        if (this._layout !== value) {
            this._layout = value;
            if (this._layout === Layout.ANCHOR) {
                this.currentLayout = this.anchorLayout;
            } else if (this._layout === Layout.VERTICAL) {
                this.currentLayout = this.verticalLayout;
            } else if (this._layout === Layout.HORIZONTAL) {
                this.currentLayout = this.horizontalLayout;
            }
        }
    }

    public get layout(): Layout.ANCHOR | Layout.HORIZONTAL | Layout.VERTICAL | Layout.WRAP | Layout.GRID {
        return this._layout;
    }

    protected childChanged(e: Event): void {
        if (e.target !== this) {
            e.stopImmediatePropagation();
            this.invalidateDisplay();
        }
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.currentLayout.updateLayout(this, this.elements);
    }

    private elements: ILayoutElement[] = [];

    private _currentLayout!: ILayout;

    private set currentLayout(value: ILayout) {
        if (this._currentLayout !== value) {
            this._currentLayout = value;
            this.invalidateDisplay();
        }
    }

    private get currentLayout(): ILayout {
        if (!this._currentLayout) {
            this._currentLayout = this.anchorLayout;
        }
        return this._currentLayout;
    }

    private _anchorLayout!: ILayout;

    private get anchorLayout(): ILayout {
        if (!this._anchorLayout) {
            this._anchorLayout = new AnchorLayout();
        }
        return this._anchorLayout;
    }

    private _verticalLayout!: ILayout;

    private get verticalLayout(): ILayout {
        if (!this._verticalLayout) {
            this._verticalLayout = new VerticalLayout();
        }
        return this._verticalLayout;
    }

    private _horizontalLayout!: ILayout;

    private get horizontalLayout(): ILayout {
        if (!this._horizontalLayout) {
            this._horizontalLayout = new HorizontalLayout();
        }
        return this._horizontalLayout;
    }

    public get numElements(): number {
        return this.elements.length;
    }

    private _gap = 0;

    public set gap(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._gap !== 0) {
                this._gap = 0;
            }
            this._horizontalGap = 0;
            this._verticalGap = 0;
            this.invalidateDisplay();
        } else if (this._gap !== value) {
            this._gap = value;
            this._horizontalGap = value;
            this._verticalGap = value;
            this.invalidateDisplay();
        }
    }

    public get gap(): number {
        return this._gap;
    }

    private _horizontalGap = 0;

    public set horizontalGap(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._horizontalGap !== 0) {
                this._horizontalGap = 0;
                this.invalidateDisplay();
            }
        } else if (this._horizontalGap !== value) {
            this._horizontalGap = value;
            this.invalidateDisplay();
        }
    }

    public get horizontalGap(): number {
        return this._horizontalGap;
    }

    private _verticalGap = 0;

    public set verticalGap(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._verticalGap !== 0) {
                this._verticalGap = 0;
                this.invalidateDisplay();
            }
        } else if (this._verticalGap !== value) {
            this._verticalGap = value;
            this.invalidateDisplay();
        }
    }

    public get verticalGap(): number {
        return this._verticalGap;
    }

    private _horizontalAlign: HorizontalAlign.LEFT | HorizontalAlign.CENTER | HorizontalAlign.RIGHT | HorizontalAlign.FILL = HorizontalAlign.LEFT;

    public set horizontalAlign(value: HorizontalAlign.LEFT | HorizontalAlign.CENTER | HorizontalAlign.RIGHT | HorizontalAlign.FILL) {
        if (this._horizontalAlign !== value) {
            this._horizontalAlign = value;
            this.invalidateDisplay();
        }
    }

    public get horizontalAlign(): HorizontalAlign.LEFT | HorizontalAlign.CENTER | HorizontalAlign.RIGHT | HorizontalAlign.FILL {
        return this._horizontalAlign;
    }

    private _verticalAlign: VerticalAlign.TOP | VerticalAlign.MIDDLE | VerticalAlign.BOTTOM | VerticalAlign.FILL = VerticalAlign.TOP;

    public set verticalAlign(value: VerticalAlign.TOP | VerticalAlign.MIDDLE | VerticalAlign.BOTTOM | VerticalAlign.FILL) {
        if (this._verticalAlign !== value) {
            this._verticalAlign = value;
            this.invalidateDisplay();
        }
    }

    public get verticalAlign(): VerticalAlign.TOP | VerticalAlign.MIDDLE | VerticalAlign.BOTTOM | VerticalAlign.FILL {
        return this._verticalAlign;
    }

    private _padding = 0;

    public set padding(value: number) {
        if (isNaN(value)) {
            this._padding = 0;
            this._paddingLeft = 0;
            this._paddingTop = 0;
            this._paddingRight = 0;
            this._paddingBottom = 0;
            this.invalidateDisplay();
        } else if (this._padding !== value) {
            if (value < 0) {
                this._padding = 0;
                this._paddingLeft = 0;
                this._paddingTop = 0;
                this._paddingRight = 0;
                this._paddingBottom = 0;
            } else {
                this._padding = value;
                this._paddingLeft = value;
                this._paddingTop = value;
                this._paddingRight = value;
                this._paddingBottom = value;
            }
            this.invalidateDisplay();
        }
    }

    public get padding(): number {
        return this._padding;
    }

    private _paddingLeft = 0;

    public set paddingLeft(value: number) {
        if (isNaN(value)) {
            if (this._paddingLeft !== 0) {
                this._paddingLeft = 0;
                this.invalidateDisplay();
            }
        } else if (this._paddingLeft !== value) {
            if (value < 0) {
                this._paddingLeft = 0;
            } else {
                this._paddingLeft = value;
            }
            this.invalidateDisplay();
        }
    }

    public get paddingLeft(): number {
        return this._paddingLeft;
    }

    private _paddingTop = 0;

    public set paddingTop(value: number) {
        if (isNaN(value)) {
            if (this._paddingTop !== 0) {
                this._paddingTop = 0;
                this.invalidateDisplay();
            }
        } else if (this._paddingTop !== value) {
            if (value < 0) {
                this._paddingTop = 0;
            } else {
                this._paddingTop = value;
            }
            this.invalidateDisplay();
        }
    }

    public get paddingTop(): number {
        return this._paddingTop;
    }

    private _paddingRight = 0;

    public set paddingRight(value: number) {
        if (isNaN(value)) {
            if (this._paddingRight !== 0) {
                this._paddingRight = 0;
                this.invalidateDisplay();
            }
        } else if (this._paddingRight !== value) {
            if (value < 0) {
                this._paddingRight = 0;
            } else {
                this._paddingRight = value;
            }
            this.invalidateDisplay();
        }
    }

    public get paddingRight(): number {
        return this._paddingRight;
    }

    private _paddingBottom = 0;

    public set paddingBottom(value: number) {
        if (isNaN(value)) {
            if (this._paddingBottom !== 0) {
                this._paddingBottom = 0;
                this.invalidateDisplay();
            }
        } else if (this._paddingBottom !== value) {
            if (value < 0) {
                this._paddingBottom = 0;
            } else {
                this._paddingBottom = value;
            }
            this.invalidateDisplay();
        }
    }

    public get paddingBottom(): number {
        return this._paddingBottom;
    }
}
customElements.define('display-container', DisplayContainer);
