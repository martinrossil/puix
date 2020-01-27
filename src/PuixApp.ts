import ApplicationContainer from './elements/ApplicationContainer';
import IDisplayContainer from './interfaces/IDisplayContainer';
import IDisplayElement from './interfaces/IDisplayElement';
import DisplayElement from './elements/DisplayElement';
import DisplayContainer from './elements/DisplayContainer';

export default class PuixApp extends ApplicationContainer {
    public constructor() {
        super();
    }

    protected initialize(): void {
        super.initialize();
        this.backgroundColor = '#123456';
        const container: IDisplayContainer = new DisplayContainer();
        container.backgroundColor = 'red';
        container.opacity = 0.5;
        const greenBox: IDisplayElement = new DisplayElement();
        greenBox.setSize(300, 50);
        greenBox.x = 25;
        greenBox.backgroundColor = 'green';
        greenBox.opacity = 0.5;
        container.addElement(greenBox);
        const blueBox: IDisplayElement = new DisplayElement();
        blueBox.setSize(50, 300);
        blueBox.backgroundColor = 'blue';
        blueBox.opacity = 0.5;
        blueBox.y = 25;
        container.addElement(blueBox);
        this.addElement(container);
        // this.layout = new AnchorLayout();
        // this.layout = null;
        // Testing commits
    }
}
customElements.define('puix-app', PuixApp);
