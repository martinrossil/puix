import IDisplayContainer from '../containers/IDisplayContainer';

export default interface IButtonComponent extends IDisplayContainer {
    label: string;
    icon: string;
}
