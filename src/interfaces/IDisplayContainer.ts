import IDisplayElement from '../interfaces/IDisplayElement';
import ILayoutElement from './ILayoutElement';
import { ILayout } from '../index';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: ILayoutElement): void;
    addElements(elements: ILayoutElement[]): void;
    removeElement(element: ILayoutElement): void;
    elements: ILayoutElement[];
    layout: ILayout;
}
