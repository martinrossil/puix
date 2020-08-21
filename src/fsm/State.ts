import IState from './IState';

export default class State implements IState {
    public name: string;
    protected targets: Map<string, IState> = new Map();
    public constructor(name: string) {
        this.name = name;
    }

    public addTransition(type: string, target: IState): IState {
        this.targets.set(type, target)
        return this;
    }

    public getState(type: string): IState {
        const target: IState | undefined = this.targets.get(type);
        if (target !== undefined) {
            return target;
        }
        return this;
    }
}
