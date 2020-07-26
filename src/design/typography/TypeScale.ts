import ITypeScale from '../../interfaces/design/typography/ITypeScale';

export default class TypeScale implements ITypeScale {
    public weight: number;
    public size: number;
    public letterSpacing: number;

    public constructor(weight: number, size: number, letterSpacing: number) {
        this.weight = weight;
        this.size = size;
        this.letterSpacing = letterSpacing;
    }
}
