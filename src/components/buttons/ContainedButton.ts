import BaseButton from './BaseButton';
import ContainedButtonInterface from './ContainedButtonInterface';

export default class ContainedButton extends BaseButton implements ContainedButtonInterface {
    public constructor() {
        super();
        this.name = 'ContainedButton';
    }
}
customElements.define('contained-button', ContainedButton);
