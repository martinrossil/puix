import DisplayContainer from '../containers/DisplayContainer'
import FSM from '../fsm/FSM';
import TouchMouseFSM from '../fsm/TouchMouseFSM';
import IItemRenderer from '../interfaces/data/IItemRenderer';
import IEventListener from '../interfaces/events/IEventListener';
import IState from '../interfaces/fsm/IState';

export default class BaseItemRenderer<Item> extends DisplayContainer implements IItemRenderer<Item> {
    public constructor() {
        super();
        this.name = 'BaseItemRenderer';
        this.touchMouseFSM.addEventListener(FSM.STATE_CHANGED, this.stateChanged.bind(this) as IEventListener);
    }

    public get currentState(): IState {
        return this.touchMouseFSM.current;
    }

    private _touchMouseFSM!: TouchMouseFSM;

    private get touchMouseFSM(): TouchMouseFSM {
        if (!this._touchMouseFSM) {
            this._touchMouseFSM = new TouchMouseFSM(this);
        }
        return this._touchMouseFSM;
    }

    protected dataChanged(): void {
        // override
    }

    protected selectedChanged(): void {
        // override
    }

    protected stateChanged(): void {
        // override
    }

    private _data: Item | null = null;

    public set data(value: Item | null) {
        if (this._data === value) {
            return;
        }
        this._data = value;
        this.dataChanged();
    }

    public get data(): Item | null {
        return this._data;
    }

    private _selected = false;

    public set selected(value: boolean) {
        if (this._selected === value) {
            return;
        }
        this._selected = value;
        this.selectedChanged();
    }

    public get selected(): boolean {
        return this._selected;
    }
}
customElements.define('base-item-renderer', BaseItemRenderer);
