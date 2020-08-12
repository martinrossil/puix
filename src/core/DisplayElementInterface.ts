import LayoutElementInterface from './LayoutElementInterface';

export default interface DisplayElementInterface extends LayoutElementInterface {
    opacity: number;
    overflow: string;
    overflowX: string;
    overflowY: string;
    enabled: boolean;
    borderRadius: number;
    shadow: string;
    tabIndex: number;
    cursor: string;
    backgroundColor: string;
    visible: boolean;
}
