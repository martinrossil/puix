import { assert } from 'chai';
import { describe, it } from 'mocha';
import IDisplayContainer from '../src/interfaces/IDisplayContainer';
import PuixDev from '../src/PuixDev';

const puixDev: IDisplayContainer = new PuixDev();
document.body.appendChild(puixDev as unknown as Node);

describe('PuixDev class', () => {
    it('when name = "PuixDev", name should be "PuixDev"', () => {
        assert.strictEqual(puixDev.name, 'PuixDev');
    });
});
