import SizeElementInterface from './SizeElementInterface';

export default interface LayoutElementInterface extends SizeElementInterface {
    top: number;
    right: number;
    bottom: number;
    left: number;
    horizontalCenter: number;
    verticalCenter: number;
    includeInLayout: boolean;
}
