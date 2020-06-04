import ApplicationElement from './containers/ApplicationElement';
import IContainedButton from './interfaces/components/buttons/IContainedButton';
import ContainedButton from './components/buttons/ContainedButton';
import AnchorLayoutData from './layouts/AnchorLayoutData';
import Icons from './design/icon/Icons';
import IOutlinedButton from './interfaces/components/buttons/IOutlinedButton';
import OutlinedButton from './components/buttons/OutlinedButton';
import ITextButton from './interfaces/components/buttons/ITextButton';
import TextButton from './components/buttons/TextButton';
import Events from './consts/Events';

export default class PuixDev extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        const cb: IContainedButton = new ContainedButton();
        cb.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, -100);
        cb.label = 'CONTAINED BUTTON';
        cb.icon = Icons.STAR;
        this.addElement(cb);
        const ob: IOutlinedButton = new OutlinedButton();
        ob.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        ob.label = 'OUTLINED BUTTON';
        ob.icon = Icons.PUIX;
        this.addElement(ob);
        const tb: ITextButton = new TextButton();
        tb.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 100);
        tb.label = 'TEXT BUTTON';
        tb.icon = Icons.EMAIL;
        this.addElement(tb);
        this.addEventListener(Events.POINTER_TRIGGERED, (e) => {
            console.log(e.type, e);
        })
    }
}
customElements.define('puix-dev', PuixDev);
