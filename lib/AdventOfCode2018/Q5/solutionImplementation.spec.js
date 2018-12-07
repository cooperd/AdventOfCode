const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Q4', () => {

  it('S1: How many units remain after fully reacting the polymer you scanned?', () => {
    const input1 = 'aA';
    const input2 = 'abBA';
    const input3 = 'abAB';
    const input4 = 'aabAAB';
    const input5 = 'dabAcCaCBAcCcaDA';

    assert.strictEqual(solutionImplementation.getUnitsAfterPolymerReact(input1), 0);
    assert.strictEqual(solutionImplementation.getUnitsAfterPolymerReact(input2), 0);
    assert.strictEqual(solutionImplementation.getUnitsAfterPolymerReact(input3), 4);
    assert.strictEqual(solutionImplementation.getUnitsAfterPolymerReact(input4), 6);
    assert.strictEqual(solutionImplementation.getUnitsAfterPolymerReact(input5), 10);
  });

  it('S2: What is the length of the shortest polymer you can produce?', () => {
    const input = 'dabAcCaCBAcCcaDA';
    assert.strictEqual(solutionImplementation.getShortestLengthByOneCharDropOfPolymer(input), 4);
  });
});