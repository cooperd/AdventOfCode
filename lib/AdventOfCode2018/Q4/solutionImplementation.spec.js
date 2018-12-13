const assert = require('assert');
const solutionImplementation = require('./solutionImplementation');

describe('Day 4', () => {
  let input;
  beforeEach(() => {
    input = '[1518-11-01 00:00] Guard #10 begins shift\n' +
            '[1518-11-01 00:05] falls asleep\n' +
            '[1518-11-01 00:25] wakes up\n' +
            '[1518-11-01 00:30] falls asleep\n' +
            '[1518-11-01 00:55] wakes up\n' +
            '[1518-11-01 23:58] Guard #99 begins shift\n' +
            '[1518-11-02 00:40] falls asleep\n' +
            '[1518-11-02 00:50] wakes up\n' +
            '[1518-11-03 00:05] Guard #10 begins shift\n' +
            '[1518-11-03 00:24] falls asleep\n' +
            '[1518-11-03 00:29] wakes up\n' +
            '[1518-11-04 00:02] Guard #99 begins shift\n' +
            '[1518-11-04 00:36] falls asleep\n' +
            '[1518-11-04 00:46] wakes up\n' +
            '[1518-11-05 00:03] Guard #99 begins shift\n' +
            '[1518-11-05 00:45] falls asleep\n' +
            '[1518-11-05 00:55] wakes up';
  });

  it('S1: What is the ID of the guard you chose multiplied by the minute you chose?', () => {
    assert.strictEqual(solutionImplementation.getSleepingGuardTimesSleepingMinute(input.split('\n'), 1), 240);
  });

  it('S2: What is the ID of the only claim that doesn\'t overlap?', () => {
    assert.strictEqual(solutionImplementation.getSleepingGuardTimesSleepingMinute(input.split('\n'), 2), 4455);
  });
});