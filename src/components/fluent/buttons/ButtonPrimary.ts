import DisplayContainer from '../../../containers/DisplayContainer';
import ButtonPrimaryInterface from './ButtonPrimaryInterface';
import FluentTheme from '../../../FluentTheme';
import TextElement from '../../../text/TextElement';
import { TextElementInterface } from '../../..';
import { FontWeight } from '../../../enums/FontWeight';
import AnchorLayout from '../../../layouts/AnchorLayout';
import TouchLayer from '../../../elements/TouchLayer';
import DisplayElementInterface from '../../../core/DisplayElementInterface';
import StateMachineInterface from '../../../fsm/StateMachineInterface';
import StateMachine from '../../../fsm/StateMachine';
import StateInterface from '../../../fsm/StateInterface';
import State from '../../../fsm/State';
import { TextAlign } from '../../../enums/TextAlign';

export default class ButtonPrimary extends DisplayContainer implements ButtonPrimaryInterface {
    public constructor() {
        super();
        this.name = 'ButtonPrimary';
        this.restingBackgroundColor = 'hsla(206, 100%, 41%, 1.0)';
        this.hoveredBackgroundColor = 'hsla(207, 84%, 40%, 1.0)';
        this.pressedBackgroundColor = 'hsla(205, 100%, 30%, 1.0)';
        this.disabledBackgroundColor = 'hsla(30, 7%, 94%, 1.0)';
        this.textColor = 'white';
        this.disabledTextColor = 'hsla(30, 2%, 62%, 1.0)';
        this.minWidth = 32;
        this.height = 32;
        this.borderRadius = 2;
        this.layout = new AnchorLayout();
        // this.layout.paddingLeft = 20;
        // this.layout.paddingTop = 12;
        // this.layout.paddingRight = 20;
        // this.addElement(this.label);
        this.addElement(this.touchLayer);
        this.fsm.start();
        this.addEventListener('focus', this.focused.bind(this));
        this.addEventListener('blur', this.blurred.bind(this));
    }

    protected focused(e: Event): void {
        console.log(e.type);
        this.style.backgroundColor = 'red';
    }

    protected blurred(e: Event): void {
        console.log(e.type);
        this.style.backgroundColor = 'green';
    }

    private _fsm!: StateMachineInterface;

    protected get fsm(): StateMachineInterface {
        if (!this._fsm) {
            this._fsm = new StateMachine(this.restingState);
            this._fsm.addEventListener(StateMachine.STATE_CHANGED, this.stateChanged.bind(this));
        }
        return this._fsm;
    }

    protected stateChanged(state: StateInterface): void {
        console.log(state.name);
        if (state === this.hoveredState) {
            this.backgroundColor = this.hoveredBackgroundColor;
        } else if (state === this.restingState) {
            this.backgroundColor = this.restingBackgroundColor;
        } else if (state === this.pressedState) {
            this.backgroundColor = this.pressedBackgroundColor;
        }
    }

    private _restingState!: StateInterface;

    protected get restingState(): StateInterface {
        if (!this._restingState) {
            this._restingState = new State('resting');
            this._restingState.addTransition(TouchLayer.MOUSE_OVER, this.hoveredState);
            this._restingState.addTransition(TouchLayer.TOUCH_START, this.pressedState);
        }
        return this._restingState;
    }

    private _hoveredState!: StateInterface;

    protected get hoveredState(): StateInterface {
        if (!this._hoveredState) {
            this._hoveredState = new State('hovered');
            this._hoveredState.addTransition(TouchLayer.MOUSE_DOWN, this.pressedState);
            this._hoveredState.addTransition(TouchLayer.MOUSE_LEAVE, this.restingState);
        }
        return this._hoveredState;
    }

    private _pressedState!: StateInterface;

    protected get pressedState(): StateInterface {
        if (!this._pressedState) {
            this._pressedState = new State('pressed');
            this._pressedState.addTransition(TouchLayer.MOUSE_UP, this.hoveredState);
            this._pressedState.addTransition(TouchLayer.MOUSE_LEAVE, this.restingState);
            this._pressedState.addTransition(TouchLayer.TOUCH_END_INSIDE, this.restingState);
            this._pressedState.addTransition(TouchLayer.TOUCH_END_OUTSIDE, this.restingState);
        }
        return this._pressedState;
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        if (!isNaN(this.width) || !isNaN(this.percentWidth)) {
            this.label.percentWidth = 100;
        } else {
            this.percentWidth = NaN;
        }
    }

    private _label!: TextElementInterface;

    protected get label(): TextElementInterface {
        if (!this._label) {
            this._label = new TextElement();
            this._label.fontSize = 10;
            this._label.lineHeight = 20;
            this._label.fontFamily = FluentTheme.FONT_FAMILY;
            this._label.capHeight = FluentTheme.FONT_CAP_HEIGHT;
            this._label.verticalOffset = FluentTheme.FONT_VERICAL_OFFSET;
            this._label.horizontalOffset = FluentTheme.FONT_600_HORIZONTAL_OFFSET;
            this._label.textColor = FluentTheme.WHITE;
            this._label.fontWeight = FontWeight.SEMI_BOLD_600;
            this._label.wordwrap = false;
            this._label.textAlign = TextAlign.CENTER;
        }
        return this._label;
    }

    private _touchLayer!: TouchLayer;

    protected get touchLayer(): DisplayElementInterface {
        if (!this._touchLayer) {
            this._touchLayer = new TouchLayer();
            this._touchLayer.percentWidth = 100;
            this._touchLayer.percentHeight = 100;
            this._touchLayer.addEventListener(TouchLayer.MOUSE_OVER, this.touchLayerEvents.bind(this) as EventListener);
            this._touchLayer.addEventListener(TouchLayer.MOUSE_DOWN, this.touchLayerEvents.bind(this) as EventListener);
            this._touchLayer.addEventListener(TouchLayer.MOUSE_UP, this.touchLayerEvents.bind(this) as EventListener);
            this._touchLayer.addEventListener(TouchLayer.MOUSE_LEAVE, this.touchLayerEvents.bind(this) as EventListener);
            this._touchLayer.addEventListener(TouchLayer.TOUCH_START, this.touchLayerEvents.bind(this) as EventListener);
            this._touchLayer.addEventListener(TouchLayer.TOUCH_END_INSIDE, this.touchLayerEvents.bind(this) as EventListener);
            this._touchLayer.addEventListener(TouchLayer.TOUCH_END_OUTSIDE, this.touchLayerEvents.bind(this) as EventListener);
        }
        return this._touchLayer;
    }

    protected touchLayerEvents(e: CustomEvent): void {
        this.fsm.send(e);
    }

    private _text = '';

    public set text(value: string) {
        if (this._text !== value) {
            this._text = value;
            this.label.text = value;
        }
    }

    public get text(): string {
        return this._text;
    }

    private _textColor = '';

    public set textColor(value: string) {
        if (this._textColor !== value) {
            this._textColor = value;
        }
    }

    public get textColor(): string {
        return this._textColor;
    }

    private _restingBackgroundColor = '';

    public set restingBackgroundColor(value: string) {
        if (this._restingBackgroundColor !== value) {
            this._restingBackgroundColor = value;
        }
    }

    public get restingBackgroundColor(): string {
        return this._restingBackgroundColor;
    }

    private _disabledTextColor = '';

    public set disabledTextColor(value: string) {
        if (this._disabledTextColor !== value) {
            this._disabledTextColor = value;
        }
    }

    public get disabledTextColor(): string {
        return this._disabledTextColor;
    }

    private _hoveredBackgroundColor = '';

    public set hoveredBackgroundColor(value: string) {
        if (this._hoveredBackgroundColor !== value) {
            this._hoveredBackgroundColor = value;
        }
    }

    public get hoveredBackgroundColor(): string {
        return this._hoveredBackgroundColor;
    }

    private _pressedBackgroundColor = '';

    public set pressedBackgroundColor(value: string) {
        if (this._pressedBackgroundColor !== value) {
            this._pressedBackgroundColor = value;
        }
    }

    public get pressedBackgroundColor(): string {
        return this._pressedBackgroundColor;
    }

    private _disabledBackgroundColor = '';

    public set disabledBackgroundColor(value: string) {
        if (this._disabledBackgroundColor !== value) {
            this._disabledBackgroundColor = value;
        }
    }

    public get disabledBackgroundColor(): string {
        return this._disabledBackgroundColor;
    }
}
customElements.define('button-primary', ButtonPrimary);
