const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Q1', () => {
  it('S1: What is the resulting frequency?', () => {
    const input1 = '+1 +1 +1'.split(' ');
    const input2 = '+1 +1 -2'.split(' ');
    const input3 = '-1 -2 -3'.split(' ');

    assert.strictEqual(solutionImplementation.calibrateFrequency(input1), 3);
    assert.strictEqual(solutionImplementation.calibrateFrequency(input2), 0);
    assert.strictEqual(solutionImplementation.calibrateFrequency(input3), -6);
  });

  it('S2: What is the first frequency your device reaches twice?', () => {
    const input1 = '+1, -1'.split(', ');
    const input2 = '+3, +3, +4, -2, -4'.split(', ');
    const input3 = '-6, +3, +8, +5, -6'.split(', ');
    const input4 = '+7, +7, -2, -7, -4'.split(', ');

    assert.strictEqual(solutionImplementation.frequencySeenTwice(input1), 0);
    assert.strictEqual(solutionImplementation.frequencySeenTwice(input2), 10);
    assert.strictEqual(solutionImplementation.frequencySeenTwice(input3), 5);
    assert.strictEqual(solutionImplementation.frequencySeenTwice(input4), 14);
  });
});