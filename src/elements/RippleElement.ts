import IRippleElement from '../interfaces/elements/IRippleElement';
import ITween from '../interfaces/animation/ITween';
import AttributeTween from '../animation/AttributeTween';
import IPoint from '../interfaces/vo/IPoint';
import StyleTween from '../animation/StyleTween';
import ShapeElement from '../svg/ShapeElement';

export default class RippleElement extends ShapeElement implements IRippleElement {
    public constructor() {
        super();
        this.name = 'RippleElement';
        this.path.style.fill = '#FFFFFF';
        this.mask.setAttribute('id', this.maskId);
        this.mask.appendChild(this.path);
        this.circle.setAttribute('mask', 'url(#' + this.maskId + ')');
        this.circle.setAttribute('r', '0');
        this.svg.appendChild(this.mask);
        this.svg.appendChild(this.circle);
        this.appendChild(this.svg);
    }

    public show(point: IPoint): void {
        this.circle.setAttribute('r', '0');
        this.circle.style.opacity = '0.1';
        this.radiusTween.to(this.circleRadius, 300);
        this.opacityTween.to(0.4, 300);
        this.circle.setAttribute('cx', point.x.toString());
        this.circle.setAttribute('cy', point.y.toString());
    }

    public hide(): void {
        this.opacityTween.to(0, 300);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.updateCircleRadius();
    }

    protected updateCircleRadius(): void {
        this.circleRadius = Math.hypot(this.actualWidth, this.actualHeight);
    }

    private circleRadius = 0;

    private maskId = Math.random().toString();

    private mask: SVGMaskElement = document.createElementNS('http://www.w3.org/2000/svg', 'mask');

    private circle: SVGCircleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    private radiusTween: ITween = new AttributeTween(this.circle, 'r', 500);

    private opacityTween: ITween = new StyleTween(this.circle, 'opacity', 500);

    private _rippleColor = '';

    public set rippleColor(value: string) {
        if (this._rippleColor === value) {
            return;
        }
        this._rippleColor = value;
        this.circle.style.fill = value;
    }

    public get rippleColor(): string {
        return this._rippleColor;
    }
}
customElements.define('ripple-element', RippleElement);
