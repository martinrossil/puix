import IPathElement from './IPathElement';

export default interface IShapeElement extends IPathElement {
    cornerSize: number;
    cornerType: string;
}
