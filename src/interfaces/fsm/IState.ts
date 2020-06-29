export default interface IState {
    name: string;
    enter: Function | null;
    exit: Function | null;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
