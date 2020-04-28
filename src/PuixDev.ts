import DisplayElement from './core/DisplayElement';

export default class PuixDev extends DisplayElement {
    public constructor() {
        super();
        this.name = 'PuixDev';
    }

    public initialize(): void {
        super.initialize();
        this.move(25, 50);
        this.backgroundColor = 'red';
        this.minWidth = 200;
        this.maxHeight = 200;
        this.setSize(100, 100);
    }
}
customElements.define('puix-dev', PuixDev);
