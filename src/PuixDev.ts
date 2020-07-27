import ApplicationElement from './containers/ApplicationElement';
import Appbar from './components/custom/AppBar';
import RippleComponent from './components/RippleComponent';
import IShapeElement from './interfaces/svg/IShapeElement';
import ShapeElement from './svg/ShapeElement';
import IDisplayElement from './interfaces/core/IDisplayElement';
import DisplayElement from './core/DisplayElement';
import HSL from './design/color/HSL';
import DataCard from './components/custom/DataCard';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        // this.addElement(this.shapeElement);
        this.addElement(new Appbar());
        // this.addElement(this.rippleComponent);
        this.addElement(new DataCard());
        // this.addElement(this.innerBox);
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
