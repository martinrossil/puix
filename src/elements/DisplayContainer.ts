import DisplayElement from './DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
        console.log('DisplayContainer initialize()');
        this.backgroundColor = 'red';
        this.opacity = 0.5;
        const greenBox: IDisplayElement = new DisplayElement();
        greenBox.setSize(300, 50);
        greenBox.backgroundColor = 'green';
        greenBox.opacity = 0.5;
        this.addElement(greenBox);
        const blueBox: IDisplayElement = new DisplayElement();
        blueBox.setSize(50, 300);
        blueBox.backgroundColor = 'blue';
        blueBox.opacity = 0.5;
        this.addElement(blueBox);
    }

    protected commitProperties(): void {
        super.commitProperties();
        console.log('DisplayContainer commitProperties()');
        if (this._elementsChanged) {
            this._elementsChanged = false;
            // invalidateInternalSize
        }
    }

    public addElement(element: IDisplayElement): void {
        this.elements.push(element);
        this._elementsChanged = true;
        this.appendChild(element as unknown as Node);
        this.invalidateProperties();
    }

    private _elements: IDisplayElement[] = [];
    private _elementsChanged = true;
    public get elements(): IDisplayElement[] {
        return this._elements;
    }
}
customElements.define('display-container', DisplayContainer);
