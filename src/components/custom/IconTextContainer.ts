import DisplayContainer from '../../containers/DisplayContainer';
import IconBox from './IconBox';
import HorizontalLayout from '../../layouts/HorizontalLayout';
import ValueBox from './ValueBox';
import VerticalAlign from '../../consts/VerticalAlign';

export default class IconTextContainer extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'IconTextContainer';
        this.layout = new HorizontalLayout(24, VerticalAlign.MIDDLE);
        this.percentWidth = 100;
        this.layout.padding = 24;
        this.addElement(new IconBox());
        this.addElement(new ValueBox());
    }
}
customElements.define('icon-text-container', IconTextContainer);
