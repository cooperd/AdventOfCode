'use strict';
const fileService = require('../../FileService/fileService');

const stepsFunc = {
  '^': (i, j) => [i + 1, j],
  '>': (i, j) => [i, j + 1],
  '<': (i, j) => [i, j - 1],
  v: (i, j) => [i - 1, j]
};

const getAtLeastOnePresent = function(input, withRobot = false) {
  const steps = input.split('');
  const map = {
    a0a0: 1
  };
  let santaSteps = [0, 0];
  let robotSteps = [0, 0];
  let i;
  let j;

  for (let k = 0; k < steps.length; k++) {
    if (withRobot && k % 2 === 1) {
      robotSteps = stepsFunc[steps[k]](...robotSteps);
      [i, j] = robotSteps;
    } else {
      santaSteps = stepsFunc[steps[k]](...santaSteps);
      [i, j] = santaSteps;
    }
    const key = `a${i}a${j}`;
    if (map[key] === undefined) {
      map[key] = 1;
    } else {
      map[key]++;
    }
  }

  return Object.keys(map).length;
};

const getAtLeastOnePresentWithRobot = function(input) {
  return getAtLeastOnePresent(input, true);
};

const getThirdQAnswer = function() {
  const fileData = fileService.getFileData('Q3/input.txt', 2015);
  console.log('Advent of Code 2015 Q:3 S:1 = ', getAtLeastOnePresent(fileData));
  console.log('Advent of Code 2015 Q:3 S:2 = ', getAtLeastOnePresentWithRobot(fileData));
};

module.exports = {
  getAtLeastOnePresent,
  getAtLeastOnePresentWithRobot,
  getThirdQAnswer
};
