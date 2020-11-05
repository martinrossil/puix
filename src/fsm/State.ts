import IEnterState from '../interfaces/fsm/IEnterState';
import IExitState from '../interfaces/fsm/IExitState';
import IState from '../interfaces/fsm/IState';

export default class State implements IState {
    public name: string;
    public event: Event | null = null;
    public enterState: IEnterState | null = null;
    public exitState: IExitState | null = null;
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
