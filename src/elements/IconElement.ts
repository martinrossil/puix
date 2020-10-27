import IIconElement from '../interfaces/elements/IIconElement';
import PathElement from '../svg/PathElement';

export default class IconElement extends PathElement implements IIconElement {
    public constructor() {
        super();
        this.name = 'IconElement';
        this.setSize(24, 24);
        this.svg.setAttribute('viewBox', '0 0 24 24');
    }

    private _icon = '';

    public set icon(value: string) {
        if (this._icon === value) {
            return;
        }
        this._icon = value;
        this.pathData = value;
    }

    public get icon(): string {
        return this._icon;
    }

    private _color = '';

    public set color(value: string) {
        if (this._color === value) {
            return;
        }
        this._color = value;
        this.fillColor = value;
    }

    public get color(): string {
        return this._color;
    }
}
customElements.define('icon-element', IconElement);
