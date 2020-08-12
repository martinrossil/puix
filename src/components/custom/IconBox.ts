import DisplayContainer from '../../containers/DisplayContainer';
import IconElementInterface from '../../elements/IconElementInterface';
import IconElement from '../../elements/IconElement';

export default class IconBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'IconBox';
        this.layout.padding = 8;
        this.borderRadius = 8;
        this.addElement(this.iconElement);
    }

    protected get iconElement(): IconElementInterface {
        const iconElement: IconElementInterface = new IconElement();
        iconElement.setSize(38, 38);
        return iconElement;
    }
}
customElements.define('icon-box', IconBox);
