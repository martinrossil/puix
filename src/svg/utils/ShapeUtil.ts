export default class ShapeUtil {
    static getNonePath(w: number, h: number): string {
        return 'M 0,0 L ' + w + ',0 L ' + w + ',' + h + ' L 0,' + h + ' Z';
    }

    static getCutPath(w: number, h: number, size: number): string {
        const tlc = size;
        const trc = tlc;
        const brc = tlc;
        const blc = tlc;

        let d = '';
        // move to topLeftCorner
        d += 'M ' + tlc + ',0 ';
        // line to topRightCorner
        d += 'L ' + (w - trc) + ',0 ';
        // cut topRightCorner
        d += 'L ' + w + ',' + trc + ' ';
        // line down to bottomRight
        d += 'L ' + w + ',' + (h - brc) + ' ';
        // cut bottomRight
        d += 'L ' + (w - brc) + ',' + h + ' ';
        // line left to bottomLeft
        d += 'L ' + blc + ',' + h + ' ';
        // cut bottomLeft
        d += 'L 0,' + (h - blc) + ' ';
        // line up to topLeft
        d += 'L 0,' + tlc + ' ';
        // top left cut
        d += 'L ' + tlc + ',0';
        // close path
        d += 'Z';
        return d;
    }

    static getRoundedPath(w: number, h: number, size: number): string {
        const tlc = size;
        const trc = tlc;
        const brc = tlc;
        const blc = tlc;

        let d = '';
        // mov top left arc start
        d += 'M 0 ' + tlc + ' ';
        // tlc arc
        d += 'A ' + tlc + ' ' + tlc + ' 0 0 1 ' + tlc + ' 0 ';
        // line to topRightCorner
        d += 'L ' + (w - trc) + ' 0 ';
        // trc arc
        d += 'A ' + trc + ' ' + trc + ' 1 0 1 ' + w + ' ' + trc + ' ';
        // line to bottomRightCorner
        d += 'L ' + w + ' ' + (h - brc) + ' ';
        // brc arc
        d += 'A ' + brc + ' ' + brc + ' 1 0 1 ' + (w - brc) + ' ' + h + ' ';
        // line to bottomLeftCorner
        d += 'L ' + blc + ' ' + h + ' ';
        // blc arc
        d += 'A ' + blc + ' ' + blc + ' 0 0 1 ' + '0 ' + (h - blc) + ' ';
        // close path
        d += 'Z';
        return d;
    }
}
