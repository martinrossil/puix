import IState from '../interfaces/fsm/IState';

export default class State implements IState {
    public name: string;
    public event: Event | null = null;
    protected targets: Map<string, IState> = new Map();
    public constructor(name: string) {
        this.name = name;
    }

    public addTransition(type: string, target: IState): IState {
        this.targets.set(type, target)
        return this;
    }

    public getState(type: string): IState {
        return this.targets.get(type) || this;
    }
}
