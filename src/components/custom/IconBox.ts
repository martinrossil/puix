import Icons from '../../design/icon/Icons';
import DisplayContainer from '../../containers/DisplayContainer';
import IIconElement from '../../interfaces/elements/IIconElement';
import IconElement from '../../elements/IconElement';
import HSL from '../../design/color/HSL';

export default class IconBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'IconBox';
        this.layout.padding = 8;
        this.borderRadius = 8;
        this.addElement(this.iconElement);
    }

    protected get iconElement(): IIconElement {
        const iconElement: IIconElement = new IconElement();
        iconElement.setSize(38, 38);
        iconElement.icon = Icons.PUIX;
        iconElement.color = HSL.WHITE;
        return iconElement;
    }
}
customElements.define('icon-box', IconBox);
