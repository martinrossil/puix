import ApplicationElement from './containers/ApplicationElement';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import RippleComponent from './components/RippleComponent';
import Point from './vo/Point';
import { IPoint } from '.';
import Events from './consts/Events';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(this.rc);
        this.addEventListener(Events.POINTER_TRIGGERED, this.test as EventListener);
    }

    protected test(e: CustomEvent<IPoint>): void {
        console.log('puix', e.type, e.detail, e.detail instanceof Point);
    }

    private _rc!: RippleComponent;

    protected get rc(): RippleComponent {
        if (!this._rc) {
            this._rc = new RippleComponent();
            this._rc.setSize(200, 200);
            this._rc.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        }
        return this._rc;
    }
}
customElements.define('puix-dev', PuixDev);
