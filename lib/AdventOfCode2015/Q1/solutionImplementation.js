'use strict';
const fileService = require('../../FileService/fileService');

const firstSection = function(input) {
  return input.reduce((acc, val) => {
    switch (val) {
      case '(':
        acc++;
        break;
      case ')':
        acc--;
        break;
      default:
        break;
    }

    return acc;
  }, 0);
};

const secondSection = function(input) {
  for (let i = 0; i < input.length; i++) {
    let newInput = input.slice(0, i + 1);
    if (firstSection(newInput) === -1) return i + 1;
  }
};

const getFirstQAnswer = function() {
  const fileData = fileService.getFileData('Q1/input.txt', 2015).split('');
  console.log('Advent of Code 2015 Q:1 S:1 = ', firstSection(fileData));
  console.log('Advent of Code 2015 Q:1 S:2 = ', secondSection(fileData));
};

module.exports = {
  firstSection,
  secondSection,
  getFirstQAnswer
};
