import IconBox from './IconBox';
import ValueBox from './ValueBox';
import ActionBar from './ActionBar';
import DisplayContainer from '../containers/DisplayContainer';
import Color from '../design/Color';
import AnchorLayoutData from '../layouts/AnchorLayoutData';

export default class DataCard extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'DataCard';
        this.setSize(400, 175);
        this.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        this.backgroundColor = Color.WHITE;
        this.cornerRadius = 8;
        this.z = 2;
        this.layout.padding = 28;
        this.overflow = 'hidden';
        this.addElement(new IconBox());
        this.addElement(new ValueBox());
        this.addElement(new ActionBar());
    }
}
customElements.define('data-card', DataCard);
