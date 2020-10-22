import IPoint from '../interfaces/vo/IPoint';

export default class Point implements IPoint {
    public x = 0;
    public y = 0;

    public constructor(x = 0, y = 0) {
        if (isNaN(x)) {
            this.x = 0;
        } else {
            this.x = x;
        }
        if (isNaN(y)) {
            this.y = 0;
        } else {
            this.y = y;
        }
    }
}
