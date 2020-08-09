import EventDispatcherInterface from '../../../core/EventDispatcherInterface';
import IColorRange from './IColorRange';

export default interface IColors extends EventDispatcherInterface {
    primary: IColorRange;
    secondary: IColorRange;
    accent: IColorRange;
    neutral: IColorRange;
    success: IColorRange;
    warning: IColorRange;
    error: IColorRange;
}
