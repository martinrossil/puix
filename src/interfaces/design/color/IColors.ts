import IEventDispatcher from '../../core/IEventDispatcher';
import IColorCollection from './IColorCollection';

export default interface IColors extends IEventDispatcher {
    primary: IColorCollection;
    secondary: IColorCollection;
    tertiary: IColorCollection;
    neutral: IColorCollection;
    success: IColorCollection;
    warning: IColorCollection;
    error: IColorCollection;
    background: string;
    surface: string;
    onPrimary: string;
    onSecondary: string;
    onTertiary: string;
    onBackground: string;
    onSurface: string;
}
