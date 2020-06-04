import BaseButton from './BaseButton';
import IContainedButton from '../../interfaces/components/buttons/IContainedButton';
import IShadowFilter from '../../interfaces/svg/filters/IShadowFilter';
import ShadowFilter from '../../svg/filters/ShadowFilter';
import IFilter from '../../interfaces/svg/filters/IFilter';

export default class ContainedButton extends BaseButton implements IContainedButton {
    public constructor() {
        super();
        this.name = 'ContainedButton';
        this.backgroundColor = this.theme.colors.secondary.c500;
        this.iconColor = this.theme.colors.onSecondary;
        this.labelColor = this.theme.colors.onSecondary;
        this.filter = this.shadowFilter;
    }

    private shadowFilter: IShadowFilter = new ShadowFilter(0, 5, 5, this.theme.colors.secondary.c900, 0.5);

    public set filter(value: IFilter | null) {
        this.shapeElement.filter = value;
    }

    public get filter(): IFilter | null {
        return this.shapeElement.filter;
    }
}
customElements.define('contained-button', ContainedButton);
