import IEventDispatcher from '../core/IEventDispatcher';
import IHSLA from './IHSLA';

export default interface IColorRange extends IEventDispatcher {
    lightest: IHSLA;
    light: IHSLA;
    medium: IHSLA;
    dark: IHSLA;
    darkest: IHSLA;
}
