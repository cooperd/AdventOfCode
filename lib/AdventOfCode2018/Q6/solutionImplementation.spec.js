const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Day 6', () => {
  const input = '1, 1\n' +
    '1, 6\n' +
    '8, 3\n' +
    '3, 4\n' +
    '5, 5\n' +
    '8, 9';
  it('S1: What is the size of the largest area that isn\'t infinite?', () => {
    assert.strictEqual(solutionImplementation.calcLargestArea(input.split('\n')), 17);
  });

  it('S2: What is the size of the region containing all locations which have a ' +
    'total distance to all given coordinates of less than 32?', () => {
    assert.strictEqual(solutionImplementation.calcLargestRegion(input.split('\n'), 32), 16);
  });
});