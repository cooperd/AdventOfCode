'use strict';
const { getFirstQAnswer } = require('./AdventOfCode2015/Q1/solutionImplementation');
const { getSecondQAnswer } = require('./AdventOfCode2015/Q2/solutionImplementation');
const { getThirdQAnswer } = require('./AdventOfCode2015/Q3/solutionImplementation');
const { getFourthQAnswer } = require('./AdventOfCode2015/Q4/solutionImplementation');
const { getFifthQAnswer } = require('./AdventOfCode2015/Q5/solutionImplementation');
const { getSixthQAnswer } = require('./AdventOfCode2015/Q6/solutionImplementation');

const { getFirstQ2018Answer } = require('./AdventOfCode2018/Q1/solutionImplementation');
const { getSecondQ2018Answer } = require('./AdventOfCode2018/Q2/solutionImplementation');
const { getThirdQ2018Answer } = require('./AdventOfCode2018/Q3/solutionImplementation');
const { getFourthQ2018Answer } = require('./AdventOfCode2018/Q4/solutionImplementation');

console.log();

switch (process.argv.slice(2)[0]){
  case '2015': {
    getFirstQAnswer();
    getSecondQAnswer();
    getThirdQAnswer();
    getFourthQAnswer();
    getFifthQAnswer();
    getSixthQAnswer();
    break;
  }
  case '2018': {
    getFirstQ2018Answer();
    getSecondQ2018Answer();
    getThirdQ2018Answer();
    getFourthQ2018Answer();
    break;
  }
}



module.exports = {};
