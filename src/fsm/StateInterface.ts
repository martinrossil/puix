export default interface StateInterface {
    name: string;
    addTransition(type: string, target: StateInterface): void;
    getState(type: string): StateInterface;
}
