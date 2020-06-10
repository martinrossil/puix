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
    protected requestId = 0;
    protected progress = 0;

    public constructor(target: Element, attribute: string, duration: number) {
        super();
        this.name = 'AttributeTween';
        this.target = target;
        this.attribute = attribute;
        this.duration = duration;
        this.animationFrame = this.animationFrame.bind(this);
    }

    public to(value: number): void {
        console.log(this.name, 'to', value);
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
        console.log(this.name, 'animationFrame', time, this.start, this.requestId);
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
        this.target.setAttribute(this.attribute, this.currentValue.toString());
    }

    public pause(): void {
        console.log(this.name, 'pause');
    }

    public reset(): void {
        console.log(this.name, 'reset');
    }
}
