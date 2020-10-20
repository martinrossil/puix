import IDisplayElement from '../core/IDisplayElement';
import { ILayoutElement } from '../..';
import { HorizontalAlign } from '../../enums/HorizontalAlign';
import { VerticalAlign } from '../../enums/VerticalAlign';
import { Layout } from '../../enums/Layout';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: ILayoutElement): void;
    addElementAt(element: ILayoutElement, index: number): void;
    addElements(elements: ILayoutElement[]): void;
    removeElement(element: ILayoutElement): void;
    getElementAt(index: number): ILayoutElement | null;
    layout: Layout.ANCHOR | Layout.HORIZONTAL | Layout.VERTICAL | Layout.WRAP | Layout.GRID;
    padding: number;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    gap: number;
    horizontalGap: number;
    verticalGap: number;
    horizontalAlign: HorizontalAlign.LEFT | HorizontalAlign.CENTER | HorizontalAlign.RIGHT | HorizontalAlign.FILL;
    verticalAlign: VerticalAlign.TOP | VerticalAlign.MIDDLE | VerticalAlign.BOTTOM | VerticalAlign.FILL;
    readonly numElements: number;
}
