import IEventDispatcher from '../core/IEventDispatcher';
import ITypography from './typography/ITypography';
import IColors from './color/IColors';

export default interface ITheme extends IEventDispatcher {
    typography: ITypography;
    colors: IColors;
}
