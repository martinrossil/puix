import IconBox from './IconBox';
import ValueBox from './ValueBox';
import ActionBar from './ActionBar';
import DisplayContainer from './containers/DisplayContainer';
import Color from './design/Color';

export default class DataCard extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'DataCard';
        this.setSize(400, 175);
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
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
