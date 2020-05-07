import IFontDescription from '../interfaces/IFontDescription.js';

export default class FontDescription implements IFontDescription {
    public fontFamily: string;
    public capHeight: number;
    public verticalOffset: number;

    // new FontFace('"Inter", sans-serif', 0.728, 0.003);
    // new FontFace('"Roboto", sans-serif', 0.716, 0.016);
    // new FontFace('"Baloo Chettan 2", cursive', 0.622, -0.063);
    // new FontFace('"Montserrat", sans-serif', 0.7013, -0.0117);
    // new FontFace('"Noto Sans", sans-serif', 0.714, -0.043);

    public constructor(fontFamily = '"Roboto", sans-serif', capHeight = 0.72, verticalOffset = 0.022) {
        this.fontFamily = fontFamily;
        this.capHeight = capHeight;
        this.verticalOffset = verticalOffset;
    }
}
