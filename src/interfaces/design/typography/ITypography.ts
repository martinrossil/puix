import IEventDispatcher from '../../core/IEventDispatcher';
import ITypeData from './ITypeData';
import IFontSizes from './IFontSizes';

export default interface ITypography extends IEventDispatcher {
    primary: ITypeData;
    secondary: ITypeData;
    fontSizes: IFontSizes;
}
