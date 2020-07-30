import ApplicationElement from './containers/ApplicationElement';
import RippleComponent from './components/RippleComponent';
import IShapeElement from './interfaces/svg/IShapeElement';
import ShapeElement from './svg/ShapeElement';
import IDisplayElement from './interfaces/core/IDisplayElement';
import DisplayElement from './core/DisplayElement';
import HSL from './design/color/HSL';
import IScrollContainer from './interfaces/containers/IScrollContainer';
import ScrollContainer from './containers/ScrollContainer';
import ScrollPolicy from './consts/ScrollPolicy';
import HorizontalLayout from './layouts/HorizontalLayout';
import VerticalAlign from './consts/VerticalAlign';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(this.scrollContainer);
    }

    private _scrollContainer!: IScrollContainer;

    protected get scrollContainer(): IScrollContainer {
        if (!this._scrollContainer) {
            this._scrollContainer = new ScrollContainer();
            this._scrollContainer.horizontalCenter = 0;
            this._scrollContainer.verticalCenter = 0;
            this._scrollContainer.height = 400;
            this._scrollContainer.percentWidth = 75;
            this._scrollContainer.backgroundColor = HSL.WHITE;
            this._scrollContainer.shadow = this.theme.shadows.large;
            this._scrollContainer.horizontalScrollPolicy = ScrollPolicy.ON;
            for (let i = 0; i < 2; i++) {
                const d: IDisplayElement = new DisplayElement();
                d.width = 200;
                d.backgroundColor = HSL.BLUE_GREY_100;
                this.scrollContainer.addElement(d);
            }
            this._scrollContainer.layout = new HorizontalLayout(16, VerticalAlign.FILL);
            this._scrollContainer.layout.padding = 16;
        }
        return this._scrollContainer;
    }

    private _innerBox!: IDisplayElement;

    protected get innerBox(): IDisplayElement {
        if (!this._innerBox) {
            this._innerBox = new DisplayElement();
            this._innerBox.backgroundColor = HSL.WHITE;
            this._innerBox.setSize(200, 200);
            this._innerBox.horizontalCenter = 0;
            this._innerBox.verticalCenter = 0;
            this._innerBox.shadow = this.theme.shadows.inner;
            this._innerBox.borderRadius = 16;
        }
        return this._innerBox;
    }

    protected _shapeElement!: IShapeElement;

    protected get shapeElement(): IShapeElement {
        if (!this._shapeElement) {
            this._shapeElement = new ShapeElement();
            this._shapeElement.setSize(300, 300);
            this._shapeElement.horizontalCenter = 0;
            this._shapeElement.verticalCenter = 0;
            this._shapeElement.fillColor = this.theme.colors.accent.medium;
        }
        return this._shapeElement;
    }

    protected _rippleComponent!: RippleComponent;

    protected get rippleComponent(): RippleComponent {
        if (!this._rippleComponent) {
            this._rippleComponent = new RippleComponent();
            this._rippleComponent.setSize(200, 200);
            this._rippleComponent.horizontalCenter = 0;
            this._rippleComponent.verticalCenter = 0;
        }
        return this._rippleComponent;
    }
}
customElements.define('puix-dev', PuixDev);
