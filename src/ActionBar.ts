import StatusChip from './StatusChip';
import DisplayContainer from './containers/DisplayContainer';
import Theme from './design/Theme';

export default class ActionBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ActionBar';
        this.setSize(400, 50);
        this.x = -28;
        this.y = 175 - 28 - 50;
        this.backgroundColor = Theme.NEUTRAL_COLOR.index[1];
        this.addElement(new StatusChip());
    }
}
customElements.define('action-bar', ActionBar);
