export default interface ITween {
    to(value: number): void;
    pause(): void;
    reset(): void;
}
