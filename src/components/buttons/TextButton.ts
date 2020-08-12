import BaseButton from './BaseButton';
import TextButtonInterface from './TextButtonInterface';

export default class TextButton extends BaseButton implements TextButtonInterface {
    public constructor() {
        super();
        this.name = 'TextButton';
        this.backgroundColorOpacity = 0.0;
    }
}
customElements.define('text-button', TextButton);
