import DisplayElement from './DisplayElement';
import IDisplayContainer from '../interfaces/IDisplayContainer';
import IDisplayElement from '../interfaces/IDisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
    }

    public addElement(element: IDisplayElement): void {
        this.appendChild(element as unknown as Node);
    }

    public removeElement(element: IDisplayElement): void {
        this.removeChild(element as DisplayElement);
    }

    public addElements(elements: IDisplayElement[]): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        const len = elements.length;
        let element: IDisplayElement;
        for (let i = 0; i < len; i++) {
            element = elements[i];
            frag.appendChild(element as DisplayElement);
        }
        this.appendChild(frag);
    }
}
customElements.define('display-container', DisplayContainer);
