import StatusChip from './StatusChip';
import DisplayContainer from '../../containers/DisplayContainer';
import AnchorLayoutData from '../../layouts/AnchorLayoutData';
import AnchorLayout from '../../layouts/AnchorLayout';

export default class ActionBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ActionBar';
        this.height = 50;
        this.percentWidth = 100;
        this.layoutData = new AnchorLayoutData(NaN, NaN, NaN, 0);
        this.layout = new AnchorLayout();
        this.addElement(new StatusChip());
    }
}
customElements.define('action-bar', ActionBar);
