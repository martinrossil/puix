import BaseButton from './BaseButton';
import ContainedButtonInterface from './ContainedButtonInterface';

export default class ContainedButton extends BaseButton implements ContainedButtonInterface {
    public constructor() {
        super();
        this.name = 'ContainedButton';
        this.backgroundColor = this.theme.colors.secondary.medium;
        this.iconColor = this.theme.colors.neutral.darkest;
        this.labelColor = this.theme.colors.neutral.darkest;
    }
}
customElements.define('contained-button', ContainedButton);
