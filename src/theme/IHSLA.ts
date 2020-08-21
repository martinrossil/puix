import IEventDispatcher from '../core/IEventDispatcher';

export default interface IHSLA extends IEventDispatcher {
    hue: number;
    saturation: number;
    lightness: number;
    opacity: number;
    value: string;
}
