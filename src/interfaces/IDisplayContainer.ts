import IDisplayElement from '../interfaces/IDisplayElement';

export default interface IDisplayContainer extends IDisplayElement {
    readonly children: HTMLCollection;
    addElement(element: IDisplayElement): void;
    addElements(elements: IDisplayElement[]): void;
    removeElement(element: IDisplayElement): void;
}
