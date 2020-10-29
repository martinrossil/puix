import { assert } from 'chai';
import { describe, it } from 'mocha';
import { AnchorLayout, BaseLayout, HorizontalLayout, LifeCycleElement, SvgElement, VerticalLayout } from '../src';

describe('index.ts', () => {
    describe('cover defaults', () => {
        it('LifeCycleElement', () => {
            const lifeCycleElement: LifeCycleElement = new LifeCycleElement();
            assert.instanceOf(lifeCycleElement, LifeCycleElement);
        });
        it('LifeCycleElement', () => {
            const anchorLayout: AnchorLayout = new AnchorLayout();
            assert.instanceOf(anchorLayout, AnchorLayout);
        });
        it('BaseLayout', () => {
            const baseLayout: BaseLayout = new BaseLayout();
            assert.instanceOf(baseLayout, BaseLayout);
        });
        it('HorizontalLayout', () => {
            const horizontalLayout: HorizontalLayout = new HorizontalLayout();
            assert.instanceOf(horizontalLayout, HorizontalLayout);
        });
        it('VerticalLayout', () => {
            const verticalLayout: VerticalLayout = new VerticalLayout();
            assert.instanceOf(verticalLayout, VerticalLayout);
        });
        it('SvgElement', () => {
            const svgElement: SvgElement = new SvgElement();
            assert.instanceOf(svgElement, SvgElement);
        });
    });
});
