import IShadows from '../../interfaces/design/shadow/IShadows';

export default class Shadows implements IShadows {
    public none = 'none';
    public inner = 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)';
    public xSmall = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    public small = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    public medium = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    public large = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    public xLarge = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
}
