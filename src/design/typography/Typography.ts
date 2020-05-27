import EventDispatcher from '../../core/EventDispatcher';
import ITypography from '../../interfaces/design/typography/ITypography';
import ITypeData from '../../interfaces/text/ITypeData';
import TypeData from '../../text/TypeData';
import Events from '../../consts/Events';

export default class Typography extends EventDispatcher implements ITypography {
    private _primary: ITypeData = new TypeData('"Inter", sans-serif', 0.728, 0.003);

    public set primary(value: ITypeData) {
        if (this._primary !== value) {
            this._primary = value;
            this.dispatchEventWith(Events.TYPOGRAPHY_CHANGED);
        }
    }

    public get primary(): ITypeData {
        return this._primary;
    }

    private _secondary: ITypeData = new TypeData('"Montserrat", sans-serif', 0.715, -0.02);

    public set secondary(value: ITypeData) {
        if (this._secondary !== value) {
            this._secondary = value;
            this.dispatchEventWith(Events.TYPOGRAPHY_CHANGED);
        }
    }

    public get secondary(): ITypeData {
        return this._secondary;
    }
}
