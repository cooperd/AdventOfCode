const assert = require('assert');
const q1SolutionImplemetation = require('../AdventOfCode2015/Q1/solutionImplementation');
const q2SolutionImplemetation = require('../AdventOfCode2015/Q2/solutionImplementation');
const q3SolutionImplemetation = require('../AdventOfCode2015/Q3/solutionImplementation');
const q4SolutionImplemetation = require('../AdventOfCode2015/Q4/solutionImplementation');
const q5SolutionImplemetation = require('../AdventOfCode2015/Q5/solutionImplementation');
const q6SolutionImplemetation = require('../AdventOfCode2015/Q6/solutionImplementation');

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

  describe('Q3', () => {
    it('S1: How many houses receive at least one present?', () => {
      const input1 = '>';
      const input2 = '^>v<';
      const input3 = '^v^v^v^v^v';

      assert.strictEqual(q3SolutionImplemetation.getAtLeastOnePresent(input1), 2);
      assert.strictEqual(q3SolutionImplemetation.getAtLeastOnePresent(input2), 4);
      assert.strictEqual(q3SolutionImplemetation.getAtLeastOnePresent(input3), 2);
    });

    it('S2: How many houses receive at least one present?', () => {
      const input1 = '^v';
      const input2 = '^>v<';
      const input3 = '^v^v^v^v^v';

      assert.strictEqual(
        q3SolutionImplemetation.getAtLeastOnePresentWithRobot(input1),
        3
      );
      assert.strictEqual(
        q3SolutionImplemetation.getAtLeastOnePresentWithRobot(input2),
        3
      );
      assert.strictEqual(
        q3SolutionImplemetation.getAtLeastOnePresentWithRobot(input3),
        11
      );
    });
  });

  describe('Q4', () => {
    it('S1: find MD5 hashes which, in hexadecimal, start with at least five zeroes', () => {
      const input1 = 'abcdef';
      const input2 = 'pqrstuv';

      assert.strictEqual(
        q4SolutionImplemetation.getIndexSuffixOfInputThatHasXZerosInMD5Hash(input1),
        609043
      );
      assert.strictEqual(
        q4SolutionImplemetation.getIndexSuffixOfInputThatHasXZerosInMD5Hash(input2),
        1048970
      );
    });
  });

  describe('Q5', () => {
    it('S1: How many strings are nice?', () => {
      const input1 = 'ugknbfddgicrmopn';
      const input2 = 'aaa';
      const input3 = 'jchzalrnumimnmhp';
      const input4 = 'haegwjzuvuyypxyu';
      const input5 = 'dvszwmarrgswjxmb';

      assert.strictEqual(q5SolutionImplemetation.isNiceOrNoughty(input1), 'NICE');
      assert.strictEqual(q5SolutionImplemetation.isNiceOrNoughty(input2), 'NICE');
      assert.strictEqual(q5SolutionImplemetation.isNiceOrNoughty(input3), 'NOUGHTY');
      assert.strictEqual(q5SolutionImplemetation.isNiceOrNoughty(input4), 'NOUGHTY');
      assert.strictEqual(q5SolutionImplemetation.isNiceOrNoughty(input5), 'NOUGHTY');
    });

    it('S2: How many strings are nice under new rules?', () => {
      const input1 = 'qjhvhtzxzqqjkmpb';
      const input2 = 'xxyxx';
      const input3 = 'uurcxstgmygtbstg';
      const input4 = 'ieodomkazucvgmuy';

      assert.strictEqual(
        q5SolutionImplemetation.isNiceOrNoughtyWithNewRules(input1),
        'NICE'
      );
      assert.strictEqual(
        q5SolutionImplemetation.isNiceOrNoughtyWithNewRules(input2),
        'NICE'
      );
      assert.strictEqual(
        q5SolutionImplemetation.isNiceOrNoughtyWithNewRules(input3),
        'NOUGHTY'
      );
      assert.strictEqual(
        q5SolutionImplemetation.isNiceOrNoughtyWithNewRules(input4),
        'NOUGHTY'
      );
    });
  });

  describe('Q6', () => {
    it('S1: how many lights are lit?', () => {
      const instructions1 = 'turn on 0,0 through 999,999';
      const lightsArray = q6SolutionImplemetation.getInitLightsArray(1000);

      assert.strictEqual(
        q6SolutionImplemetation.getResultsOfInstruction(instructions1, lightsArray, 0),
        1000000
      );

      const instructions2 = 'toggle 0,0 through 999,0';

      assert.strictEqual(
        q6SolutionImplemetation.getResultsOfInstruction(instructions2, lightsArray, 1000000),
        999000
      );

      const instructions3 = 'turn off 499,499 through 500,500';

      assert.strictEqual(
        q6SolutionImplemetation.getResultsOfInstruction(instructions3, lightsArray, 999000),
        998996
      );
    });

    it('S2: What is the total brightness of all lights combined after following Santa\'s instructions?', () => {
      const instructions1 = 'turn on 0,0 through 0,0';
      let lightsArray = q6SolutionImplemetation.getInitLightsArray(1000);

      assert.strictEqual(
        q6SolutionImplemetation.getBrightnessOfLightsWithInstructionOf(instructions1, lightsArray, 0),
        1
      );

      const instructions2 = 'toggle 0,0 through 999,999';

      assert.strictEqual(
        q6SolutionImplemetation.getBrightnessOfLightsWithInstructionOf(instructions2, lightsArray, 1),
        2000001
      );
    });
  });
});
