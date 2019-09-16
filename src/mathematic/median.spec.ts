import { expect } from 'chai';
import median from './median';

import 'mocha';

describe('median of an array', () => {
  it('Normal case: odd number', () => {
    const result = median([1, 2, 3]);
    expect(result).equal(2);
  });

  it('Normal case: even number', () => {
    const result = median([1, 2, 3, 4]);
    expect(result).equal((2 + 3) / 2);
  });

  it('Empty array', () => {
    expect(() => median([])).to.throw('Array could not be empty.');
  });
});
