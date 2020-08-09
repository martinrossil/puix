import PositionElementInterface from './PositionElementInterface';

export default interface SizeElementInterface extends PositionElementInterface {
    setActualSize(width: number, height: number): void;
    setSize(width: number, height: number): void;
    minWidth: number;
    width: number;
    maxWidth: number;
    actualWidth: number;
    minHeight: number;
    height: number;
    maxHeight: number;
    actualHeight: number;
    percentWidth: number;
    percentHeight: number;
}
