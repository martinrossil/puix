import ApplicationElement from './containers/ApplicationElement';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import RippleComponent from './components/RippleComponent';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        const rc: RippleComponent = new RippleComponent();
        rc.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        rc.setSize(200, 200);
        this.addElement(rc);
    }
}
customElements.define('puix-dev', PuixDev);
