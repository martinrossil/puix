import DisplayElement from './DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
        // Make invalidateACtualSize public and call from layouts after laying out elements!!!!
    }

    protected commitProperties(): void {
        super.commitProperties();
        if (this._actualSizeInvalid) {
            this._actualSizeInvalid = false;
            this.setActualSizeFromElements();
        }
    }

    protected setActualSizeFromElements(): void {
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
        this.actualSizeInvalid = true;
        this.appendChild(element as unknown as Node);
        this.invalidateProperties();
    }

    private _elements: IDisplayElement[] = [];
    public get elements(): IDisplayElement[] {
        return this._elements;
    }

    private _actualSizeInvalid = false;
    protected set actualSizeInvalid(value: boolean) {
        if (this._actualSizeInvalid === value) {
            return;
        }
        this._actualSizeInvalid = true;
        this.invalidateProperties();
    }

    protected get actualSizeInvalid(): boolean {
        return this._actualSizeInvalid;
    }
}
customElements.define('display-container', DisplayContainer);
