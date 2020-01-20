export default interface IDomElement {
    dispatchEventWith(typeArg: string, payload: unknown): void;
    connected: boolean;
}
