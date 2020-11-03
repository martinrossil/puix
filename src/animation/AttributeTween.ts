import ITween from '../interfaces/animation/ITween';
import EventDispatcher from '../core/EventDispatcher';

export default class AttributeTween extends EventDispatcher implements ITween {
    protected target: Element;
    protected attribute: string;
    protected duration: number;
    protected value = 0;
    protected startValue = 0;
    protected currentValue = 0;
    protected difference = 0;
    protected start = 0;
    protected requestId = NaN;
    protected progress = 0;

    public constructor(target: Element, attribute: string, duration: number) {
        super();
        this.name = 'AttributeTween';
        this.target = target;
        this.attribute = attribute;
        this.duration = duration;
        this.animationFrame = this.animationFrame.bind(this);
    }

    public to(value: number, duration: number): void {
        if (!isNaN(this.requestId)) {
            cancelAnimationFrame(this.requestId);
        }
        if (!isNaN(duration)) {
            this.duration = duration;
        }
        const attributeValue: string | null = this.target.getAttribute(this.attribute);
        if (attributeValue) {
            this.currentValue = this.startValue = parseFloat(attributeValue);
        } else {
            this.currentValue = this.startValue = 0;
        }
        this.value = value;
        this.difference = value - this.currentValue;
        this.start = performance.now();
        this.requestId = requestAnimationFrame(this.animationFrame);
    }

    protected animationFrame(time: number): void {
        this.progress = Math.abs(time - this.start) / this.duration;
        if (this.progress < 1) {
            this.currentValue = (this.difference * this.progress) + this.startValue;
            this.requestId = requestAnimationFrame(this.animationFrame);
        } else {
            this.currentValue = this.startValue = this.value;
            this.requestId = NaN;
        }
        this.target.setAttribute(this.attribute, this.currentValue.toString());
    }
}
