import DisplayElement from './DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
        this.addEventListener('internalSizeChanged', this.elementInternalSizeChanged as EventListener);
    }

    protected elementInternalSizeChanged(e: CustomEvent): void {
        if (e.target !== this) {
            e.stopPropagation();
            console.log(this, 'elementInternalSizeChanged');
        }
    }

    protected commitProperties(): void {
        super.commitProperties();
    }

    protected internalSizeInvalidChanged(): void {
        super.internalSizeInvalidChanged();
        console.log('DisplayContainer internalSizeInvalidChanged()');
        this.setInternalSizeFromElements();
    }

    protected setInternalSizeFromElements(): void {
        if (Number.isNaN(this.width) && Number.isNaN(this.height)) {
            this.calculateInternalSize();
        } else if (Number.isNaN(this.width) && !Number.isNaN(this.height)) {
            this.calculateInternalWidth();
        } else if (!Number.isNaN(this.width) && Number.isNaN(this.height)) {
            this.calculateInternalHeight();
        }
    }

    protected calculateInternalSize(): void {
        console.log('DisplayContainer calculateInternalSize()');
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
        this.dispatchEventWith('internalSizeChanged');
    }

    protected calculateInternalWidth(): void {
        console.log('DisplayContainer calculateInternalWidth()');
        let width = 0;
        for (const element of this.elements) {
            if (width < element.actualX + element.actualWidth) {
                width = element.actualX + element.actualWidth;
            }
        }
        this.actualWidth = width;
        this.dispatchEventWith('internalSizeChanged');
    }

    protected calculateInternalHeight(): void {
        console.log('DisplayContainer calculateInternalHeight()');
        let height = 0;
        for (const element of this.elements) {
            if (height < element.actualY + element.actualHeight) {
                height = element.actualY + element.actualHeight;
            }
        }
        this.actualHeight = height;
        this.dispatchEventWith('internalSizeChanged');
    }

    public addElement(element: IDisplayElement): void {
        this.elements.push(element);
        this.appendChild(element as unknown as Node);
        this.internalSizeInvalid = true;
    }

    private _elements: IDisplayElement[] = [];
    public get elements(): IDisplayElement[] {
        return this._elements;
    }
}
customElements.define('display-container', DisplayContainer);
