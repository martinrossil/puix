import IEventDispatcher from '../../core/IEventDispatcher';
import ITypeData from './ITypeData';

export default interface ITypography extends IEventDispatcher {
    primary: ITypeData;
    secondary: ITypeData;
}
