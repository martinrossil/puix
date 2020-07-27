import ActionBar from './ActionBar';
import DisplayContainer from '../../containers/DisplayContainer';
import AnchorLayout from '../../layouts/AnchorLayout';
import IconTextContainer from './IconTextContainer';
import HSL from '../../design/color/HSL';

export default class DataCard extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'DataCard';
        this.setSize(320, 175);
        this.layout = new AnchorLayout();
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
        this.borderRadius = 8;
        this.backgroundColor = HSL.WHITE;
        this.overflow = 'hidden';
        this.shadow = this.theme.shadows.medium;
        this.addElement(new IconTextContainer());
        this.addElement(new ActionBar());
    }
}
customElements.define('data-card', DataCard);
