export default class DropShadowFilter {
    public offsetX: number;
    public offsetY: number;
    public blur: number;
    public spread: number;
    public color: string;
    public constructor(offsetX: number, offsetY: number, blur: number, spread: number, color: string) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.blur = blur;
        this.spread = spread;
        this.color = color;
    }

    public get value(): string {
        return this.offsetX + 'px ' + this.offsetY + 'px ' + this.blur + 'px ' + this.spread + 'px ' + this.color;
    }
}
