import BaseItemRenderer from '../elements/BaseItemRenderer';
import IconElement from '../elements/IconElement';
import { Cursor } from '../enums/Cursor';
import { Events } from '../enums/Events';
import { FontWeight } from '../enums/FontWeight';
import { Layout } from '../enums/Layout';
import { VerticalAlign } from '../enums/VerticalAlign';
import IItemRenderer from '../interfaces/data/IItemRenderer';
import IIconElement from '../interfaces/elements/IIconElement';
import ILabelElement from '../interfaces/text/ILabelElement';
import LabelElement from '../text/LabelElement';
import TypeFace from '../text/TypeFace';
import IMenuItem from './IMenuItem';

export default class MenuItemRenderer extends BaseItemRenderer<IMenuItem> implements IItemRenderer<IMenuItem> {
    public constructor() {
        super();
        this.name = 'MenuItemRenderer';
        this.height = 40;
        this.cornerRadius = 8;
        this.layout = Layout.HORIZONTAL;
        this.verticalAlign = VerticalAlign.MIDDLE;
        this.padding = 8;
        this.horizontalGap = 16;
        this.cursor = Cursor.POINTER;
        this.addElement(this.iconElement);
        this.addElement(this.label);
    }

    protected stateChanged(): void {
        this.setStateProperties();
    }

    private setStateProperties(): void {
        const name = this.currentState.name;
        if (this.selected) {
            this.backgroundColor = '#285E61'; // Teal 800
            this.label.textColor = 'white';
        } else {
            if (name === 'initial') {
                this.backgroundColor = 'transparent';
                this.label.textColor = '#76d6db';
            } else if (this.currentState.name === 'mouseOver') {
                this.backgroundColor = '#319795';
                this.label.textColor = '#76d6db';
            } else if (name === 'mouseDown' || name === 'touchStart') {
                this.backgroundColor = '#285E61';
                this.label.textColor = 'white';
            } else if (name === 'mouseUp' || name === 'touchEndInside') {
                this.dispatchCustomEvent(Events.LIST_ITEM_CLICKED, this.data, true);
            }
        }
    }

    protected dataChanged(): void {
        if (this.data) {
            this.iconElement.pathData = this.data.icon;
            this.label.text = this.data.text;
        }
    }

    protected selectedChanged(): void {
        this.setStateProperties();
    }

    private _iconElement!: IIconElement;

    private get iconElement(): IIconElement {
        if (!this._iconElement) {
            this._iconElement = new IconElement();
            this._iconElement.color = '#76d6db';
        }
        return this._iconElement;
    }

    private _label!: ILabelElement;

    protected get label(): ILabelElement {
        if (!this._label) {
            this._label = new LabelElement();
            this._label.textColor = '#76d6db';
            this._label.percentWidth = 100;
            this._label.fontSize = 12;
            this._label.typeFace = new TypeFace('Inter', FontWeight.MEDIUM_500, 0.727, 0.11, 0.0);
        }
        return this._label;
    }
}
customElements.define('menu-item-renderer', MenuItemRenderer);
