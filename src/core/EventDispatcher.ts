import EventDispatcherInterface from './EventDispatcherInterface';

export default class EventDispatcher implements EventDispatcherInterface {
    protected listeners: Map<string, Function[] | undefined> = new Map();

    public dispatchEventWith(type: string, payload: unknown = null): void {
        const typeListeners: Function[] | undefined = this.listeners.get(type);
        if (typeListeners !== undefined) {
            for (const listener of typeListeners) {
                listener(payload);
            }
        }
    }

    public addEventListener(type: string, listener: Function): void {
        let typeListeners: Function[] | undefined = this.listeners.get(type);
        if (typeListeners === undefined) {
            typeListeners = [];
            this.listeners.set(type, typeListeners);
        }
        typeListeners.push(listener);
    }

    public removeEventListener(type: string, listener: Function): void {
        const typeListeners: Function[] | undefined = this.listeners.get(type);
        if (typeListeners !== undefined) {
            for (const method of typeListeners) {
                if (method === listener) {
                    const index = typeListeners.indexOf(listener);
                    typeListeners.splice(index, 1);
                    break;
                }
            }
        }
    }

    private _name = '';

    public set name(value: string) {
        this._name = value;
    }

    public get name(): string {
        return this._name;
    }
}
