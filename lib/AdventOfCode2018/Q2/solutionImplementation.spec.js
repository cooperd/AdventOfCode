const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Q2', () => {
  let input;
  beforeEach(() => {
    input = 'abcdef bababc abbcde abcccd aabcdd abcdee ababab'.split(' ');
  });

  it('S1: What is the checksum for your list of box IDs?', () => {

    assert.strictEqual(solutionImplementation.calcChecksum(input), 12);
  });

  it('S2: What letters are common between the two correct box IDs?', () => {
    const input = 'abcde fghij klmno pqrst fguij axcye wvxyz'.split(' ');

    assert.strictEqual(solutionImplementation.findCommonLettersWithOneDiff(input), 'fgij');
  });
});