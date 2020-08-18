import ApplicationElement from './containers/ApplicationElement';
import ButtonPrimaryInterface from './components/fluent/buttons/ButtonPrimaryInterface';
import ButtonPrimary from './components/fluent/buttons/ButtonPrimary';
import TouchLayerInterface from './elements/TouchLayerInterface';
import TouchLayer from './elements/TouchLayer';
import TextElementInterface from './text/TextElementInterface';
import TextElement from './text/TextElement';
import { TextAlign } from './enums/TextAlign';
import FluentTheme from './FluentTheme';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        // this.addElement(this.buttonPrimary);
        // this.addElement(this.buttonPrimary2);
        // this.addElement(this.touchLayer);
        // genialt const test: EventDispatcherInterface & LifeCycleElementInterface = new LifeCycleElement();
        const te: TextElementInterface = new TextElement();
        te.fontSize = 16;
        te.lineHeight = 28;
        te.fontFamily = FluentTheme.FONT_FAMILY;
        te.capHeight = FluentTheme.FONT_CAP_HEIGHT;
        te.verticalOffset = FluentTheme.FONT_VERICAL_OFFSET;
        te.horizontalOffset = FluentTheme.FONT_400_HORIZONTAL_OFFSET;
        te.percentWidth = 90;
        te.textAlign = TextAlign.JUSTIFY;
        te.textColor = 'hsla(0, 0%, 10%, 1.0)';
        te.text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        te.verticalCenter = 0;
        te.horizontalCenter = 0;
        this.addElement(te);
    }

    private _touchLayer!: TouchLayerInterface;

    public get touchLayer(): TouchLayerInterface {
        if (!this._touchLayer) {
            this._touchLayer = new TouchLayer();
            this._touchLayer.setSize(200, 200);
            this._touchLayer.backgroundColor = 'hsla(0, 100%, 50%)';
            this._touchLayer.horizontalCenter = 0;
            this._touchLayer.verticalCenter = 0;
        }
        return this._touchLayer;
    }

    private _buttonPrimary!: ButtonPrimaryInterface;

    protected get buttonPrimary(): ButtonPrimaryInterface {
        if (!this._buttonPrimary) {
            this._buttonPrimary = new ButtonPrimary();
            this._buttonPrimary.horizontalCenter = 0;
            this._buttonPrimary.verticalCenter = -30;
            this._buttonPrimary.text = 'Primary Button';
            this._buttonPrimary.tabIndex = 0;
        }
        return this._buttonPrimary;
    }

    private _buttonPrimary2!: ButtonPrimaryInterface;

    protected get buttonPrimary2(): ButtonPrimaryInterface {
        if (!this._buttonPrimary2) {
            this._buttonPrimary2 = new ButtonPrimary();
            this._buttonPrimary2.horizontalCenter = 0;
            this._buttonPrimary2.verticalCenter = 30;
            this._buttonPrimary2.text = 'Primary Button ';
            this._buttonPrimary2.tabIndex = 0;
        }
        return this._buttonPrimary2;
    }
}
customElements.define('puix-dev', PuixDev);
