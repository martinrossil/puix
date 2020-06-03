import BaseButton from './BaseButton';
import IOutlinedButton from '../../interfaces/components/buttons/IOutlinedButton';

export default class OutlinedButton extends BaseButton implements IOutlinedButton {
    public constructor() {
        super();
        this.name = 'OutlinedButton';
        this.color = this.theme.colors.secondary.c500;
        this.shapeElement.fillColor = this.theme.colors.secondary.c500;
        this.shapeElement.fillOpacity = 0.0;
        this.shapeElement.strokeColor = this.theme.colors.secondary.c500;
        this.shapeElement.strokeWidth = 1.0;
    }
}
customElements.define('outlined-button', OutlinedButton);
