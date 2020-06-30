import ISizeElement from './ISizeElement';

export default interface ILayoutElement extends ISizeElement {
    top: number;
    right: number;
    bottom: number;
    left: number;
    horizontalCenter: number;
    verticalCenter: number;
}
