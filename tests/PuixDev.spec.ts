import { assert } from 'chai';
import { describe, it } from 'mocha';
import DisplayContainerInterface from '../src/containers/DisplayContainerInterface';
import PuixDev from '../src/PuixDev';

const puixDev: DisplayContainerInterface = new PuixDev();
document.body.appendChild(puixDev as unknown as Node);

describe('PuixDev class', () => {
    it('when name = "PuixDev", name should be "PuixDev"', () => {
        assert.strictEqual(puixDev.name, 'PuixDev');
    });
});
