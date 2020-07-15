import IDisplayElement from '../core/IDisplayElement';

export default interface IHitLayer extends IDisplayElement {
    cornerSize: number;
    cornerType: string;
}
