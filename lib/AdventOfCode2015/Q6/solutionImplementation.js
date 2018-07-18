'use strict';
const fileService = require('../fileService');

const ACTION = {
  ON: 'turn on',
  OFF: 'turn off',
  TOGGLE: 'toggle'
};

function getInitLightsArray(size = 20) {
  const lightsArray = [];
  for (let i = 0; i < size; i++) {
    lightsArray.push(new Array(size).fill(0));
  }
  return lightsArray;
}

function destructInstructions(instructions) {
  const [origin, action, startX, startY, endX, endY] = instructions.match(/(.*) (\d*),(\d*) through (\d*),(\d*)/);
  return [action, Number(startX), Number(startY), Number(endX), Number(endY)]
}

function getResultsOfInstruction(instructions, lightsArray, lightOnCount) {
  const [action, startX, startY, endX, endY] = destructInstructions(instructions); 

  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      switch (action) {
        case ACTION.ON: {
          if (lightsArray[i][j] === 0) {
            lightOnCount++;
            lightsArray[i][j] = 1;
          }
          break;
        }
        case ACTION.OFF: {
          if (lightsArray[i][j] === 1) {
            lightOnCount--;
            lightsArray[i][j] = 0;
          }
          break;
        }
        case ACTION.TOGGLE: {
          if (lightsArray[i][j] === 1) {
            lightOnCount--;
            lightsArray[i][j] = 0;
          } else {
            lightOnCount++;
            lightsArray[i][j] = 1;
          }
          break;
        }
        default:
          break;
      }
    }
  }
  return lightOnCount;
}

function getBrightnessOfLightsWithInstructionOf(instructions, lightsArray, totalBrightnessCount) {
  const [action, startX, startY, endX, endY] = destructInstructions(instructions);

  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      switch (action) {
        case ACTION.ON: {
          totalBrightnessCount++;
          lightsArray[i][j]++;
          break;
        }
        case ACTION.OFF: {
          if (lightsArray[i][j] > 0) {
            totalBrightnessCount--;
            lightsArray[i][j]--;
          }
          break;
        }
        case ACTION.TOGGLE: {
          totalBrightnessCount += 2;
          lightsArray[i][j] += 2;
          break;
        }
        default:
          break;
      }
    }
  }
  return totalBrightnessCount;
}

const getSixthQAnswer = function() {
  const fileData = fileService.getFileData('Q6/input.txt').split('\n');
  let lightsArray = getInitLightsArray(1000);
  console.log(
    'Advent of Code 2015 Q:6 S:1 = ',
    fileData.reduce((acc, instructions) => {
      return getResultsOfInstruction(instructions, lightsArray, acc);
    }, 0)
  );  

  lightsArray = getInitLightsArray(1000);

  console.log(
    'Advent of Code 2015 Q:6 S:2 = ',
    fileData.reduce((acc, instructions) => {
      return getBrightnessOfLightsWithInstructionOf(instructions, lightsArray, acc);
    }, 0)
  );
};

module.exports = {
  getInitLightsArray,
  getResultsOfInstruction,
  getBrightnessOfLightsWithInstructionOf,
  getSixthQAnswer
};
