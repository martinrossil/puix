import ArrayListInterface from '../data/ArrayListInterface';
import ColorInterface from './ColorInterface';
import ArrayList from '../data/ArrayList';
import Color from './Color';

export default class Theme {
    private static _primaryColors: ArrayListInterface<ColorInterface>;

    public static get primaryColors(): ArrayListInterface<ColorInterface> {
        if (!this._primaryColors) {
            this._primaryColors = new ArrayList();
            this._primaryColors.addItem(new Color(205, 87, 94, 'blue_50'));
            this._primaryColors.addItem(new Color(207, 89, 86, 'blue_100'));
            this._primaryColors.addItem(new Color(207, 90, 77, 'blue_200'));
            this._primaryColors.addItem(new Color(207, 89, 68, 'blue_300'));
            this._primaryColors.addItem(new Color(207, 90, 61, 'blue_400'));
            this._primaryColors.addItem(new Color(207, 90, 54, 'blue_500'));
        }
        return this._primaryColors;
    }
}
