import Icons from '../../design/icon/Icons';
import DisplayContainer from '../../containers/DisplayContainer';
import IconElementInterface from '../../elements/IconElementInterface';
import IconElement from '../../elements/IconElement';
import HSL from '../../design/color/HSL';

export default class IconBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'IconBox';
        this.layout.padding = 8;
        this.borderRadius = 8;
        this.backgroundColor = this.theme.colors.primary.medium;
        this.addElement(this.iconElement);
    }

    protected get iconElement(): IconElementInterface {
        const iconElement: IconElementInterface = new IconElement();
        iconElement.setSize(38, 38);
        iconElement.icon = Icons.EMAIL;
        iconElement.color = HSL.WHITE;
        return iconElement;
    }
}
customElements.define('icon-box', IconBox);
