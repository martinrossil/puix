import IEnterState from './IEnterState';
import IExitState from './IExitState';

export default interface IState {
    name: string;
    enterState: IEnterState | null;
    exitState: IExitState | null;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
