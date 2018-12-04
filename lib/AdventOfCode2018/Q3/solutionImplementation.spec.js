const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Q3', () => {
  let input;
  beforeEach(() => {
    input = '#1 @ 1,3: 4x4\n' +
            '#2 @ 3,1: 4x4\n' +
            '#3 @ 5,5: 2x2';
  });

  it('S1: How many square inches of fabric are within two or more claims?', () => {
    assert.strictEqual(solutionImplementation.findOverlayInches(input.split('\n')), 4);
  });

  it('S2: What is the ID of the only claim that doesn\'t overlap?', () => {
    assert.strictEqual(solutionImplementation.findNotOverlapClaim(input.split('\n')), '3');
  });
});