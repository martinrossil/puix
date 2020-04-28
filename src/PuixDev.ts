import DisplayElement from './core/DisplayElement';

export default class PuixDev extends DisplayElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
        console.log(this.name, 'constructor()');
    }

    public initialize(): void {
        super.initialize();
        console.log(this.name, 'initialize()');
        this.move(25, 50);
        this.backgroundColor = 'red';
        // this.setSize(100, 100);
        this.minWidth = 200;
        this.maxHeight = 200;
        this.setSize(100, 100);
    }
}
customElements.define('puix-dev', PuixDev);
