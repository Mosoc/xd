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

  it('Difference sequence is arithmetic progression', () => {
    const resultLength = 5;
    const result = increasingSequence(
      [1, 2, 4, 7],
      resultLength
    );
    expect(result).is.deep.equal([1, 2, 4, 7, 11]);
  });

  it('Difference sequence is geometric progression', () => {
    const resultLength = 5;
    const result = increasingSequence(
      [1, 3, 7, 15],
      resultLength
    );
    expect(result).is.deep.equal([1, 3, 7, 15, 31]);
  });

  it('Radio sequence is arithmetic progression', () => {
    const resultLength = 5;
    const result = increasingSequence(
      [1, 2, 6, 24],
      resultLength
    );
    expect(result).is.deep.equal([1, 2, 6, 24, 720]);
  });

  it('Radio sequence is geometric progression', () => {
    const resultLength = 5;
    const result = increasingSequence(
      [1, 2, 8, 64],
      resultLength
    );
    expect(result).is.deep.equal([1, 2, 8, 64, 1024]);
  });

});
