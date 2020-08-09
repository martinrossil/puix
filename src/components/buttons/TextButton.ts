import BaseButton from './BaseButton';
import TextButtonInterface from './TextButtonInterface';

export default class TextButton extends BaseButton implements TextButtonInterface {
    public constructor() {
        super();
        this.name = 'TextButton';
        this.backgroundColor = this.theme.colors.secondary.medium;
        this.backgroundColorOpacity = 0.0;
        this.iconColor = this.theme.colors.secondary.medium;
        this.labelColor = this.theme.colors.secondary.medium;
    }
}
customElements.define('text-button', TextButton);
