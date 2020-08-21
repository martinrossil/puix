import EventDispatcherInterface from '../core/EventDispatcherInterface';
import IHSLA from './IHSLA';

export default interface IColorRange extends EventDispatcherInterface {
    lightest: IHSLA;
    light: IHSLA;
    medium: IHSLA;
    dark: IHSLA;
    darkest: IHSLA;
}
