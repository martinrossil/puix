export default interface StateInterface {
    name: string;
    enter: Function | null;
    exit: Function | null;
    addTransition(type: string, target: StateInterface): void;
    getState(type: string): StateInterface;
}
