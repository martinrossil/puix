import IEventDispatcher from '../../core/IEventDispatcher';
import ITypeData from './ITypeData';
import ITypeScales from './ITypeScales';

export default interface ITypography extends IEventDispatcher {
    primary: ITypeData;
    secondary: ITypeData;
    typeScales: ITypeScales;
}
