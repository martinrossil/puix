import EventDispatcher from '../core/EventDispatcher';
import TweenInterface from './TweenInterface';

export default class StyleTween extends EventDispatcher implements TweenInterface {
    protected target: ElementCSSInlineStyle;
    protected style: string;
    protected duration: number;
    protected value = 0;
    protected startValue = 0;
    protected currentValue = 0;
    protected difference = 0;
    protected start = 0;
    protected requestId = 0;
    protected progress = 0;

    public constructor(target: ElementCSSInlineStyle, style: string, duration: number) {
        super();
        this.name = 'StyleTween';
        this.target = target;
        this.style = style;
        this.duration = duration;
        this.animationFrame = this.animationFrame.bind(this);
    }

    public to(value: number, duration = NaN): void {
        if (!isNaN(this.requestId)) {
            cancelAnimationFrame(this.requestId);
        }
        if (!isNaN(duration)) {
            this.duration = duration;
        }
        const styleValue: string = this.target.style.getPropertyValue(this.style);
        if (styleValue) {
            this.currentValue = this.startValue = parseFloat(styleValue);
        } else {
            this.currentValue = this.startValue = 0;
        }
        this.value = value;
        this.difference = value - this.currentValue;
        this.start = performance.now();
        this.requestId = requestAnimationFrame(this.animationFrame);
    }

    protected animationFrame(time: number): void {
        let step = time;
        if (step < this.start) {
            step = this.start;
        }
        this.progress = (step - this.start) / this.duration;
        if (this.progress < 1) {
            this.currentValue = (this.difference * this.progress) + this.startValue;
            this.requestId = requestAnimationFrame(this.animationFrame);
        } else {
            this.currentValue = this.startValue = this.value;
        }
        this.target.style.setProperty(this.style, this.currentValue.toString());
    }
}
