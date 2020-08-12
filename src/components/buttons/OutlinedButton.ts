import BaseButton from './BaseButton';
import OutlinedButtonInterface from './OutlinedButtonInterface';

export default class OutlinedButton extends BaseButton implements OutlinedButtonInterface {
    public constructor() {
        super();
        this.name = 'OutlinedButton';
        this.backgroundColorOpacity = 0.0;
        this.strokeWidth = 1.5;
    }
}
customElements.define('outlined-button', OutlinedButton);
