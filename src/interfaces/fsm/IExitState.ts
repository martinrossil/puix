import IState from './IState';

export default interface IExitState {
    (next: IState, event: Event): void;
}
