import DisplayElementInterface from '../core/DisplayElementInterface';
import LayoutElementInterface from '../core/LayoutElementInterface';
import LayoutInterface from '../layouts/LayoutInterface';

export default interface DisplayContainerInterface extends DisplayElementInterface {
    addElement(element: LayoutElementInterface): void;
    addElementAt(element: LayoutElementInterface, index: number): void;
    addElements(elements: LayoutElementInterface[]): void;
    removeElement(element: LayoutElementInterface): void;
    getElementAt(index: number): LayoutElementInterface | null;
    readonly elements: LayoutElementInterface[];
    layout: LayoutInterface;
}
