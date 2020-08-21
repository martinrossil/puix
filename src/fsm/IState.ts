export default interface IState {
    name: string;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
