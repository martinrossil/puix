import EventDispatcher from '../core/EventDispatcher';
import ITheme from '../interfaces/design/ITheme';
import ITypography from '../interfaces/design/typography/ITypography';
import Typography from './typography/Typography';
import IColors from '../interfaces/design/color/IColors';
import Colors from './color/Colors';
import ISpacing from '../interfaces/design/spacing/ISpacing';
import Spacing from './spacing/Spacing';

export default class Theme extends EventDispatcher implements ITheme {
    public typography: ITypography = new Typography();
    public colors: IColors = new Colors();
    public spacing: ISpacing = new Spacing();
}
