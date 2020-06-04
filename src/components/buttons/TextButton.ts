import BaseButton from './BaseButton';
import ITextButton from '../../interfaces/components/buttons/ITextButton';

export default class TextButton extends BaseButton implements ITextButton {
    public constructor() {
        super();
        this.name = 'TextButton';
        this.backgroundColor = this.theme.colors.secondary.c500;
        this.backgroundColorOpacity = 0.0;
        this.iconColor = this.theme.colors.secondary.c500;
        this.labelColor = this.theme.colors.secondary.c500;
    }
}
customElements.define('text-button', TextButton);
