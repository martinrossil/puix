import IState from './IState';

export default interface IEnterState {
    (previous: IState, event: Event): void;
}
