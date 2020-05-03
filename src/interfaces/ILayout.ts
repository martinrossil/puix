import ILayoutContainer from './ILayoutContainer';
import IEventDispatcher from './IEventDispatcher';

export default interface ILayout extends IEventDispatcher {
    updateLayout(container: ILayoutContainer): void;
    padding: number;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    gap: number;
    horizontalGap: number;
    verticalGap: number;
}
