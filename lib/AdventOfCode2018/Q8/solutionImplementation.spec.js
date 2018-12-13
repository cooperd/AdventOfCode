const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Day 8', () => {
  const tree = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';

  it('S1: What is the sum of all metadata entries?', () => {
    assert.strictEqual(solutionImplementation.calcEntriesMetadata(tree.split(' ')), 138);
  });

  it('S2: What is the value of the root node?', () => {
    assert.strictEqual(solutionImplementation.calcValueOfRootNode(tree.split(' ')), 66);
  });
});