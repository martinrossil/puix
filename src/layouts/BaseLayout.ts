import ILayout from '../interfaces/ILayout';
import IDisplayContainer from '../interfaces/IDisplayContainer';

export default class BaseLayout implements ILayout {
    protected container: IDisplayContainer | null = null;

    public updateLayout(container: IDisplayContainer): void {
        this.container = container;
    }
}
