import { Icons } from './Icons';
import IMenuItem from './IMenuItem';

export default class MenuItem implements IMenuItem {
    public icon: Icons;
    public text: string;
    public constructor(icon: Icons, text: string) {
        this.icon = icon;
        this.text = text;
    }
}
