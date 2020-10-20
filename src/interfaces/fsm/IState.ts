export default interface IState {
    name: string;
    event: Event | null;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
