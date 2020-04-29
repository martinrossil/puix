import DisplayContainer from './core/DisplayContainer';
import IDisplayElement from './interfaces/IDisplayElement';
import DisplayElement from './core/DisplayElement';

export default class PuixDev extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'PuixDev';
        console.log(this.name, 'super()');
        this.backgroundColor = 'red';
        const d: IDisplayElement = new DisplayElement();
        d.setSize(300, 50);
        d.backgroundColor = 'green';
        this.addElement(d);
        const d2: IDisplayElement = new DisplayElement();
        d2.setSize(50, 300);
        d2.backgroundColor = 'blue';
        this.addElement(d2);
    }
}
customElements.define('puix-dev', PuixDev);
