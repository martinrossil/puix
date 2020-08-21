import IPoint from './IPoint';

export default class Point implements IPoint {
    public x = 0;
    public y = 0;

    public constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
