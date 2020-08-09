import EventDispatcherInterface from '../../../core/EventDispatcherInterface';
import ITypeData from './ITypeData';
import IFontSizes from './IFontSizes';

export default interface ITypography extends EventDispatcherInterface {
    primary: ITypeData;
    secondary: ITypeData;
    fontSizes: IFontSizes;
}
