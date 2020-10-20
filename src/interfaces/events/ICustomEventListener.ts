export default interface ICustomEventListener<T> {
    (event: CustomEvent<T>): void;
}
