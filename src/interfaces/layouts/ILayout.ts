import IDisplayContainer from '../containers/IDisplayContainer';
import ILayoutElement from '../core/ILayoutElement';

export default interface ILayout {
    updateLayout(container: IDisplayContainer, elements: ILayoutElement[]): void;
}
