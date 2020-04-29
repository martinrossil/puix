import IDisplayElement from '../interfaces/IDisplayElement';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: IDisplayElement): void;
    addElements(elements: IDisplayElement[]): void;
    removeElement(element: IDisplayElement): void;
    readonly children: HTMLCollection;
}
