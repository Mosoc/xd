
import { expect } from 'chai';
import mean from './mean';

import 'mocha';

describe('Mean of an array', () => {
  it('Normal case', () => {
    const result = mean([1,2,3]);
    expect(result).equal(2);
  });
});