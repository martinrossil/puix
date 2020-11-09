import IEventListener from '../interfaces/events/IEventListener';
import IState from '../interfaces/fsm/IState';

export default class State implements IState {
    public name: string;
    public event: Event | null = null;
    public enter: IEventListener | null = null;
    public on: IEventListener | null = null;
    public exit: IEventListener | null = null;
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
