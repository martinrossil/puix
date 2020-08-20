import EventDispatcherInterface from '../core/EventDispatcherInterface';

export default interface ColorInterface extends EventDispatcherInterface {
    hue: number;
    saturation: number;
    lightness: number;
    opacity: number;
    value: string;
}
