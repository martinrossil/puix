import DisplayElement from '../core/DisplayElement';
import IRippleElement from '../interfaces/elements/IRippleElement';
import CornerType from '../consts/CornerType';
import ShapeUtil from '../svg/utils/ShapeUtil';
import ITween from '../interfaces/animation/ITween';
import AttributeTween from '../animation/AttributeTween';
import IPoint from '../interfaces/vo/IPoint';
import StyleTween from '../animation/StyleTween';

export default class RippleElement extends DisplayElement implements IRippleElement {
    public constructor() {
        super();
        this.name = 'RippleElement';
        this.path.style.fill = '#FFFFFF';
        this.mask.setAttribute('id', this.maskId);
        this.mask.appendChild(this.path);
        this.circle.setAttribute('mask', 'url(#' + this.maskId + ')');
        this.circle.setAttribute('r', '10');
        this.svg.appendChild(this.mask);
        this.svg.appendChild(this.circle);
        this.appendChild(this.svg);
    }

    public show(point: IPoint): void {
        this.circle.setAttribute('r', '0');
        this.circle.style.opacity = '0.1';
        this.radiusTween.to(this.circleRadius, 500);
        this.opacityTween.to(0.4, 500);
        this.circle.setAttribute('cx', point.x.toString());
        this.circle.setAttribute('cy', point.y.toString());
    }

    public hide(): void {
        this.opacityTween.to(0, 300);
    }

    protected updateDisplay(): void {
        super.updateDisplay();
        this.updateSvgAttributes();
        this.updatePathData();
        this.updateCircleRadius();
    }

    protected updateSvgAttributes(): void {
        this.svg.setAttribute('width', this.actualWidth.toString());
        this.svg.setAttribute('height', this.actualHeight.toString());
    }

    protected updatePathData(): void {
        let d;
        if (this.cornerType === CornerType.NONE) {
            d = ShapeUtil.getNonePath(this.actualWidth, this.actualHeight);
        } else if (this.cornerType === CornerType.ROUNDED) {
            d = ShapeUtil.getRoundedPath(this.actualWidth, this.actualHeight, this.cornerSize);
        } else {
            d = ShapeUtil.getCutPath(this.actualWidth, this.actualHeight, this.cornerSize);
        }
        this.path.setAttribute('d', d);
    }

    protected updateCircleRadius(): void {
        this.circleRadius = Math.hypot(this.actualWidth, this.actualHeight);
    }

    protected circleRadius = 0;

    protected maskId = Math.random().toString();

    private svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    private mask: SVGMaskElement = document.createElementNS('http://www.w3.org/2000/svg', 'mask');

    protected path: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    private circle: SVGCircleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    protected radiusTween: ITween = new AttributeTween(this.circle, 'r', 500);

    protected opacityTween: ITween = new StyleTween(this.circle, 'opacity', 500);

    private _rippleColor = '';

    public set rippleColor(value: string) {
        if (this._rippleColor !== value) {
            this._rippleColor = value;
            this.circle.style.fill = value;
        }
    }

    public get rippleColor(): string {
        return this._rippleColor;
    }

    private _cornerType = CornerType.NONE;

    public set cornerType(value: number) {
        if (this._cornerType !== value) {
            this._cornerType = value;
            this.invalidateDisplay();
        }
    }

    public get cornerType(): number {
        return this._cornerType;
    }

    private _cornerSize = 0;

    public set cornerSize(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._cornerSize !== 0) {
                this._cornerSize = 0;
                this.invalidateDisplay();
            }
        } else if (this._cornerSize !== value) {
            this._cornerSize = value;
            this.invalidateDisplay();
        }
    }

    public get cornerSize(): number {
        return this._cornerSize;
    }
}
customElements.define('ripple-element', RippleElement);
