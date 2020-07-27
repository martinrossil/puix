import EventDispatcher from '../../core/EventDispatcher';
import ITypography from '../../interfaces/design/typography/ITypography';
import ITypeData from '../../interfaces/design/typography/ITypeData';
import TypeData from './TypeData';
import IFontSizes from '../../interfaces/design/typography/IFontSizes';
import FontSizes from './FontSizes';

export default class Typography extends EventDispatcher implements ITypography {
    public primary: ITypeData = new TypeData('"Inter", sans-serif', 0.728, 0.003);
    public secondary: ITypeData = new TypeData('"Montserrat", sans-serif', 0.715, -0.02);
    public fontSizes: IFontSizes = new FontSizes();
}
