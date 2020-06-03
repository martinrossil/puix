import BaseButton from './BaseButton';
import ITextButton from '../../interfaces/components/buttons/ITextButton';

export default class TextButton extends BaseButton implements ITextButton {
    public constructor() {
        super();
        this.name = 'TextButton';
        this.shapeElement.fillColor = this.theme.colors.secondary.c500;
        this.shapeElement.fillOpacity = 0.0;
        this.color = this.theme.colors.secondary.c500;
    }
}
customElements.define('text-button', TextButton);
