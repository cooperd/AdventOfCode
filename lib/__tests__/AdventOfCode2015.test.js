const assert = require('assert');
const q1SolutionImplemetation = require('../AdventOfCode2015/Q1/solutionImplementation');
const q2SolutionImplemetation = require('../AdventOfCode2015/Q2/solutionImplementation');

describe('Advent Of Code 2015', () => {
  describe('Q1', () => {
    it('S1: To what floor do the instructions take Santa?', () => {
      const input = '(())'.split('');
      assert.strictEqual(q1SolutionImplemetation.firstSection(input), 0);
    });

    it('S2: What is the position of the character that causes Santa to first enter the basement?', () => {
      const input1 = ')'.split('');
      const input2 = '()())'.split('');

      assert.strictEqual(q1SolutionImplemetation.secondSection(input1), 1);
      assert.strictEqual(q1SolutionImplemetation.secondSection(input2), 5);
    });
  });

  describe('Q2', () => {
    it('S1: How many total square feet of wrapping paper should they order?', () => {
      const box1Dimention = '2x3x4';
      const box2Dimention = '1x1x10';

      assert.strictEqual(q2SolutionImplemetation.calcBoxWrapper(box1Dimention), 58);
      assert.strictEqual(q2SolutionImplemetation.calcBoxWrapper(box2Dimention), 43);
    });

    it('S2: How many total feet of ribbon should they order?', () => {
      const box1Dimention = '2x3x4';
      const box2Dimention = '1x1x10';

      assert.strictEqual(q2SolutionImplemetation.calcRibbonLength(box1Dimention), 34);
      assert.strictEqual(q2SolutionImplemetation.calcRibbonLength(box2Dimention), 14);
    });
  });
});
