import StateInterface from './StateInterface';

export default class State implements StateInterface {
    public name: string;
    protected targets: Map<string, StateInterface> = new Map();
    public constructor(name: string) {
        this.name = name;
    }

    public addTransition(type: string, target: StateInterface): StateInterface {
        this.targets.set(type, target)
        return this;
    }

    public getState(type: string): StateInterface {
        const target: StateInterface | undefined = this.targets.get(type);
        if (target !== undefined) {
            return target;
        }
        return this;
    }
}
