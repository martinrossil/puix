import BaseButton from './BaseButton';
import IOutlinedButton from '../../interfaces/components/buttons/IOutlinedButton';

export default class OutlinedButton extends BaseButton implements IOutlinedButton {
    public constructor() {
        super();
        this.name = 'OutlinedButton';
        this.backgroundColor = this.theme.colors.secondary.medium;
        this.backgroundColorOpacity = 0.0;
        this.strokeColor = this.theme.colors.secondary.medium;
        this.strokeWidth = 1.5;
        this.iconColor = this.theme.colors.secondary.medium;
        this.labelColor = this.theme.colors.secondary.medium;
    }
}
customElements.define('outlined-button', OutlinedButton);
