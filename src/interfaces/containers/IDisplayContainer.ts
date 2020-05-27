import IDisplayElement from '../core/IDisplayElement';
import ILayoutElement from '../core/ILayoutElement';
import ILayout from '../layouts/ILayout';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: ILayoutElement): void;
    addElements(elements: ILayoutElement[]): void;
    removeElement(element: ILayoutElement): void;
    elements: ILayoutElement[];
    layout: ILayout;
}
