import IEventDispatcher from '../events/IEventDispatcher';
import IState from './IState';

export default interface IFSM extends IEventDispatcher {
    current: IState;
}
