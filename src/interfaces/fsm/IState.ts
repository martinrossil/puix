import IEventListener from '../events/IEventListener';

export default interface IState {
    name: string;
    enter: IEventListener | null;
    on: IEventListener | null;
    exit: IEventListener | null;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
