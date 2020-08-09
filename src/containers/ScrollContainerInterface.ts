import DisplayContainerInterface from './DisplayContainerInterface';

export default interface ScrollContainerInterface extends DisplayContainerInterface {
    horizontalScrollPolicy: string;
    verticalScrollPolicy: string;
}
