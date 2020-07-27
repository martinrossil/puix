import ITypography from './typography/ITypography';
import IColors from './color/IColors';
import ISpacing from './spacing/ISpacing';
import IShadows from './shadow/IShadows';

export default interface ITheme {
    typography: ITypography;
    colors: IColors;
    spacing: ISpacing;
    shadows: IShadows;
}
