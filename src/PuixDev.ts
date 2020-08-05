import ApplicationElement from './containers/ApplicationElement';
import RippleComponent from './components/RippleComponent';
import IButtonComponent from './interfaces/components/IButtonComponent';
import ButtonComponent from './components/ButtonComponent';
import Icons from './design/icon/Icons';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        // this.addElement(this.rippleComponent);
        this.addElement(this.button);
    }

    protected _button!: IButtonComponent;

    protected get button(): IButtonComponent {
        if (!this._button) {
            this._button = new ButtonComponent();
            this._button.icon = Icons.EMAIL;
            this._button.label = 'Click me';
            this._button.horizontalCenter = 0;
            this._button.verticalCenter = 0;
        }
        return this._button;
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
