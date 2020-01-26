import BaseLayout from './BaseLayout';
import IDisplayContainer from '../interfaces/IDisplayContainer';

export default class AnchorLayout extends BaseLayout {
    public constructor() {
        super();
    }

    public updateLayout(container: IDisplayContainer): void {
        super.updateLayout(container);
        console.log('AnchorLayout updateLayout()', container.width, container.height);
    }
}
