import IEventDispatcher from '../../core/IEventDispatcher';
import IColorRange from './IColorRange';

export default interface IColors extends IEventDispatcher {
    primary: IColorRange;
    secondary: IColorRange;
    accent: IColorRange;
    neutral: IColorRange;
    success: IColorRange;
    warning: IColorRange;
    error: IColorRange;
}
