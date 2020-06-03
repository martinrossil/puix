import BaseButton from './BaseButton';
import IContainedButton from '../../interfaces/components/buttons/IContainedButton';
import IShadowFilter from '../../interfaces/svg/filters/IShadowFilter';
import ShadowFilter from '../../svg/filters/ShadowFilter';

export default class ContainedButton extends BaseButton implements IContainedButton {
    public constructor() {
        super();
        this.name = 'ContainedButton';
        this.backgroundColor = this.theme.colors.secondary.c500;
        this.color = this.theme.colors.onSecondary;
        this.shapeElement.filter = this.shadowFilter;
    }

    private shadowFilter: IShadowFilter = new ShadowFilter(0, 1, 1, this.theme.colors.secondary.c900, 0.5);
}
customElements.define('contained-button', ContainedButton);
