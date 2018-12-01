'use strict';
const fileService = require('../../FileService/fileService');

const calcBoxWrapper = function(boxDimentions) {
  const [l, w, h] = boxDimentions.split('x');
  const side1 = l * w;
  const side2 = l * h;
  const side3 = h * w;

  const minSide = Math.min(side1, Math.min(side2, side3));
  const surfase = 2 * side1 + 2 * side2 + 2 * side3;

  return minSide + surfase;
};

const calcBoxListWrapper = function(boxList, calcFunction) {
  return boxList.reduce((acc, boxDimentions) => {
    acc += calcFunction(boxDimentions);
    return acc;
  }, 0);
};

const calcRibbonLength = function(boxDimentions) {
  const dimentions = boxDimentions.split('x');
  const [l, w, h] = dimentions;
  const sortedDimention = dimentions.sort((a, b) => a - b);
  const [min1, min2] = sortedDimention;

  return min1 * 2 + min2 * 2 + l * w * h;
};

const getSecondQAnswer = function() {
  const fileData = fileService.getFileData('Q2/input.txt', 2015).split('\n');
  console.log(
    'Advent of Code 2015 Q:2 S:1 = ',
    calcBoxListWrapper(fileData, calcBoxWrapper)
  );
  console.log(
    'Advent of Code 2015 Q:2 S:2 = ',
    calcBoxListWrapper(fileData, calcRibbonLength)
  );
};

module.exports = {
  calcBoxWrapper,
  calcRibbonLength,
  getSecondQAnswer
};
