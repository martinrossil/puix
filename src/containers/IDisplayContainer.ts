import IDisplayElement from '../core/IDisplayElement';
import ILayoutElement from '../core/ILayoutElement';
import LayoutInterface from '../layouts/LayoutInterface';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: ILayoutElement): void;
    addElementAt(element: ILayoutElement, index: number): void;
    addElements(elements: ILayoutElement[]): void;
    removeElement(element: ILayoutElement): void;
    getElementAt(index: number): ILayoutElement | null;
    readonly elements: ILayoutElement[];
    layout: LayoutInterface;
}
