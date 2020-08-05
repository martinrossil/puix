import BaseButton from './BaseButton';
import IContainedButton from '../../interfaces/components/buttons/IContainedButton';

export default class ContainedButton extends BaseButton implements IContainedButton {
    public constructor() {
        super();
        this.name = 'ContainedButton';
        this.backgroundColor = this.theme.colors.secondary.medium;
        this.iconColor = this.theme.colors.neutral.darkest;
        this.labelColor = this.theme.colors.neutral.darkest;
    }
}
customElements.define('contained-button', ContainedButton);
