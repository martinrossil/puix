import IBaseButton from './IBaseButton';
import IFilter from '../../svg/filters/IFilter';

export default interface IContainedButton extends IBaseButton {
    filter: IFilter | null;
}
