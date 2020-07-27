import StatusChip from './StatusChip';
import DisplayContainer from '../../containers/DisplayContainer';
import AnchorLayout from '../../layouts/AnchorLayout';

export default class ActionBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ActionBar';
        this.height = 50;
        this.percentWidth = 100;
        this.bottom = 0;
        this.backgroundColor = this.theme.colors.neutral.lightest;
        this.layout = new AnchorLayout();
        this.addElement(new StatusChip());
    }
}
customElements.define('action-bar', ActionBar);
