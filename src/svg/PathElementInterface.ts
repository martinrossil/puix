import SvgElementInterface from './SvgElementInterface';

export default interface PathElementInterface extends SvgElementInterface {
    pathData: string;
    strokeColor: string;
    strokeWidth: number;
    strokeOpacity: number;
    fillColor: string;
    fillOpacity: number;
}
