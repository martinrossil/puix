import DisplayContainerInterface from '../containers/DisplayContainerInterface';

export default interface LayoutInterface {
    updateLayout(container: DisplayContainerInterface): void;
    padding: number;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    name: string;
}
