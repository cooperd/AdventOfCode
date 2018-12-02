const assert = require('assert');
const q1SolutionImplementation = require('../AdventOfCode2018/Q1/solutionImplementation');
const q2SolutionImplementation = require('../AdventOfCode2018/Q2/solutionImplementation');

describe('Advent Of Code 2018', () => {
    describe('Q1', () => {
      it('S1: What is the resulting frequency?', () => {
        const input1 = '+1 +1 +1'.split(' ');
        const input2 = '+1 +1 -2'.split(' ');
        const input3 = '-1 -2 -3'.split(' ');

        assert.strictEqual(q1SolutionImplementation.calibrateFrequency(input1), 3);
        assert.strictEqual(q1SolutionImplementation.calibrateFrequency(input2), 0);
        assert.strictEqual(q1SolutionImplementation.calibrateFrequency(input3), -6);
      });

      it('S2: What is the first frequency your device reaches twice?', () => {
        const input1 = '+1, -1'.split(', ');
        const input2 = '+3, +3, +4, -2, -4'.split(', ');
        const input3 = '-6, +3, +8, +5, -6'.split(', ');
        const input4 = '+7, +7, -2, -7, -4'.split(', ');

        assert.strictEqual(q1SolutionImplementation.frequencySeenTwice(input1), 0);
        assert.strictEqual(q1SolutionImplementation.frequencySeenTwice(input2), 10);
        assert.strictEqual(q1SolutionImplementation.frequencySeenTwice(input3), 5);
        assert.strictEqual(q1SolutionImplementation.frequencySeenTwice(input4), 14);
      });
    });

  describe('Q2', () => {
    it('S1: What is the checksum for your list of box IDs?', () => {
      const input = 'abcdef bababc abbcde abcccd aabcdd abcdee ababab'.split(' ');

      assert.strictEqual(q2SolutionImplementation.calcChecksum(input), 12);
    });

    it('S2: What letters are common between the two correct box IDs?', () => {
      const input = 'abcde fghij klmno pqrst fguij axcye wvxyz'.split(' ');

      assert.strictEqual(q2SolutionImplementation.findCommonLettersWithOneDiff(input), 'fgij');
    });
  });
});
