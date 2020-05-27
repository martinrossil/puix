import ActionBar from './ActionBar';
import DisplayContainer from '../containers/DisplayContainer';
import AnchorLayoutData from '../layouts/AnchorLayoutData';
import HSL from '../design/color/HSL';
import AnchorLayout from '../layouts/AnchorLayout';
import IconTextContainer from './IconTextContainer';

export default class DataCard extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'DataCard';
        this.setSize(400, 175);
        this.layout = new AnchorLayout();
        this.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        this.backgroundColor = HSL.WHITE;
        this.cornerRadius = 8;
        this.z = 3;
        this.overflow = 'hidden';
        this.addElement(new IconTextContainer());
        this.addElement(new ActionBar());
    }
}
customElements.define('data-card', DataCard);
