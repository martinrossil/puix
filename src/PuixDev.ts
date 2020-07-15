import ApplicationElement from './containers/ApplicationElement';
import Appbar from './components/custom/AppBar';
import RippleComponent from './components/RippleComponent';
import IShapeElement from './interfaces/svg/IShapeElement';
import ShapeElement from './svg/ShapeElement';
import DataCard from './components/custom/DataCard';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        // this.addElement(this.shapeElement);
        this.addElement(new Appbar());
        // this.addElement(this.rippleComponent);
        this.addElement(new DataCard());
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
