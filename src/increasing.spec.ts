import { expect } from 'chai';
import increasingSequence from './increasingSequence';

import 'mocha';

describe('Increasing sequence', () => {
  it('Empty array', () => {
    const result = increasingSequence([]);
    expect(result).is.deep.equal([]);
  });

  it('Repeated array', () => {
    const element = 1;
    const originLength = 3;
    const resultLength = 5;
    const result = increasingSequence(
      Array(originLength).fill(element),
      resultLength
    );
    expect(result).is.deep.equal(Array(resultLength).fill(element));
  });

  it('Arithmetic progression', () => {
    const resultLength = 5;
    const result = increasingSequence(
      [1, 2, 3],
      resultLength
    );
    expect(result).is.deep.equal([1, 2, 3, 4, 5]);
  });

  it('Geometric progression', () => {
    const resultLength = 5;
    const result = increasingSequence(
      [1,2,4],
      resultLength
    );
    expect(result).is.deep.equal([1, 2, 4, 8, 16]);
  });
});
