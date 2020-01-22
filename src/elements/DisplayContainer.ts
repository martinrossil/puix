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
        greenBox.x = 25;
        greenBox.backgroundColor = 'green';
        greenBox.opacity = 0.5;
        this.addElement(greenBox);
        const blueBox: IDisplayElement = new DisplayElement();
        blueBox.setSize(50, 300);
        blueBox.backgroundColor = 'blue';
        blueBox.opacity = 0.5;
        blueBox.y = 25;
        this.addElement(blueBox);
    }

    protected commitProperties(): void {
        super.commitProperties();
        console.log('DisplayContainer commitProperties()');
        if (this._invalidateActualSizeChanged) {
            this._invalidateActualSizeChanged = false;
            this.setActualSizeFromElements();
        }
    }

    protected setActualSizeFromElements(): void {
        console.log('setActualSizeFromElements', this.width, this.height);
        if (this.width === 0 && this.height === 0) {
            this.calculateActualSize();
        } else if (this.width === 0 && this.height !== 0) {
            this.calculateActualWidth();
        } else if (this.width !== 0 && this.height === 0) {
            this.calculateActualHeight();
        }
    }

    protected calculateActualSize(): void {
        let width = 0;
        let height = 0;
        for (const element of this.elements) {
            if (width < element.x + element.width) {
                width = element.x + element.width;
            }
            if (height < element.y + element.height) {
                height = element.y + element.height;
            }
        }
        this.setActualSize(width, height);
    }

    protected calculateActualWidth(): void {
        let width = 0;
        for (const element of this.elements) {
            if (width < element.x + element.width) {
                width = element.x + element.width;
            }
        }
        this.actualWidth = width;
    }

    protected calculateActualHeight(): void {
        let height = 0;
        for (const element of this.elements) {
            if (height < element.y + element.height) {
                height = element.y + element.height;
            }
        }
        this.actualHeight = height;
    }

    public addElement(element: IDisplayElement): void {
        this.elements.push(element);
        this.invalidateActualSize = true;
        this.appendChild(element as unknown as Node);
        this.invalidateProperties();
    }

    private _elements: IDisplayElement[] = [];
    public get elements(): IDisplayElement[] {
        return this._elements;
    }

    private _invalidateActualSize = false;
    private _invalidateActualSizeChanged = false;
    protected set invalidateActualSize(value: boolean) {
        if (this._invalidateActualSize === value) {
            return;
        }
        this._invalidateActualSize = true;
        this._invalidateActualSizeChanged = true;
        this.invalidateProperties();
    }

    protected get invalidateActualSize(): boolean {
        return this._invalidateActualSize;
    }
}
customElements.define('display-container', DisplayContainer);
