import ITypeScales from '../../interfaces/design/typography/ITypeScales';
import ITypeScale from '../../interfaces/design/typography/ITypeScale';
import TypeScale from './TypeScale';
import FontWeight from './FontWeight';

export default class TypeScales implements ITypeScales {
    public h1: ITypeScale = new TypeScale(FontWeight.LIGHT, 96, -1.5);
    public h2: ITypeScale = new TypeScale(FontWeight.LIGHT, 60, -0.5);
    public h3: ITypeScale = new TypeScale(FontWeight.REGULAR, 48, 0.0);
    public h4: ITypeScale = new TypeScale(FontWeight.REGULAR, 34, 0.25);
    public h5: ITypeScale = new TypeScale(FontWeight.REGULAR, 24, 0);
    public h6: ITypeScale = new TypeScale(FontWeight.MEDIUM, 20, 0.15);
    public subtitle1: ITypeScale = new TypeScale(FontWeight.REGULAR, 16, 0.15);
    public subtitle2: ITypeScale = new TypeScale(FontWeight.REGULAR, 14, 0.1);
    public body1: ITypeScale = new TypeScale(FontWeight.REGULAR, 16, 0.5);
    public body2: ITypeScale = new TypeScale(FontWeight.REGULAR, 14, 0.25);
    public button: ITypeScale = new TypeScale(FontWeight.REGULAR, 14, 1.25);
    public caption: ITypeScale = new TypeScale(FontWeight.REGULAR, 12, 0.4);
    public overline: ITypeScale = new TypeScale(FontWeight.REGULAR, 10, 1.5);
}
