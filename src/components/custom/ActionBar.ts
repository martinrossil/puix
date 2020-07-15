import StatusChip from './StatusChip';
import DisplayContainer from '../../containers/DisplayContainer';
import AnchorLayout from '../../layouts/AnchorLayout';
import HSL from '../../design/color/HSL';

export default class ActionBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ActionBar';
        this.height = 50;
        this.percentWidth = 100;
        this.bottom = 0;
        this.backgroundColor = HSL.BLUE_GREY_50;
        this.layout = new AnchorLayout();
        this.addElement(new StatusChip());
    }
}
customElements.define('action-bar', ActionBar);
