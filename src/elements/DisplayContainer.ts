import DisplayElement from './DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
    }

    protected commitProperties(): void {
        super.commitProperties();
    }

    protected internalSizeInvalidChanged(): void {
        super.internalSizeInvalidChanged();
        console.log('DisplayContainer internalSizeInvalidChanged()');
        this.setActualSizeFromElements();
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
            if (width < element.actualX + element.actualWidth) {
                width = element.actualX + element.actualWidth;
            }
            if (height < element.actualY + element.actualHeight) {
                height = element.actualY + element.actualHeight;
            }
        }
        this.setActualSize(width, height);
        this.parent.internalSizeInvalid = true;
    }

    protected calculateActualWidth(): void {
        let width = 0;
        for (const element of this.elements) {
            if (width < element.actualX + element.actualWidth) {
                width = element.actualX + element.actualWidth;
            }
        }
        this.actualWidth = width;
        this.parent.internalSizeInvalid = true;
    }

    protected calculateActualHeight(): void {
        let height = 0;
        for (const element of this.elements) {
            if (height < element.actualY + element.actualHeight) {
                height = element.actualY + element.actualHeight;
            }
        }
        this.actualHeight = height;
        this.parent.internalSizeInvalid = true;
    }

    public addElement(element: IDisplayElement): void {
        element.parent = this;
        this.elements.push(element);
        this.internalSizeInvalid = true;
        this.appendChild(element as unknown as Node);
    }

    private _elements: IDisplayElement[] = [];
    public get elements(): IDisplayElement[] {
        return this._elements;
    }
}
customElements.define('display-container', DisplayContainer);
