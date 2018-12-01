'use strict';
const fileService = require('../../FileService/fileService');

function isContainAtLeastThreeVowels(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return (
    input.length - input.split('').filter(char => !vowels.includes(char)).length >= 3
  );
}

function isContainAtLeastOneLetterTwiceInARow(input) {
  return input.search(/(.)\1+/) !== -1;
}

function isContainAtLeastOnePatternOfXYX(input) {
  return input.search(/(.)(.)\1+/) !== -1;
}

function isContainPairOfTwoLetters(input) {
  return input.search(/(..)(.)*\1+/) !== -1;
}

function isContainExcludedStings(input, excludedStrings) {
  return excludedStrings.some(val => input.indexOf(val) !== -1);
}

const isNiceOrNoughty = function(input) {
  const excludedStrings = ['ab', 'cd', 'pq', 'xy'];
  const hasAtLeastThreeVowels = isContainAtLeastThreeVowels(input);
  const hasAtLeastOneLetterTwiceInARow = isContainAtLeastOneLetterTwiceInARow(input);
  const hasExcludedStrings = isContainExcludedStings(input, excludedStrings);

  if (hasAtLeastThreeVowels && hasAtLeastOneLetterTwiceInARow && !hasExcludedStrings) {
    return 'NICE';
  }

  return 'NOUGHTY';
};

const isNiceOrNoughtyWithNewRules = function(input) {
  const hasAtLeastOnePatternOfXYX = isContainAtLeastOnePatternOfXYX(input);
  const hasPairOfTwoLetters = isContainPairOfTwoLetters(input);

  if (hasAtLeastOnePatternOfXYX && hasPairOfTwoLetters) {
    return 'NICE';
  }

  return 'NOUGHTY';
};

const getFifthQAnswer = function() {
  const fileData = fileService.getFileData('Q5/input.txt', 2015).split('\n');
  console.log(
    'Advent of Code 2015 Q:5 S:1 = ',
    fileData
      .map(str => isNiceOrNoughty(str))
      .sort()
      .lastIndexOf('NICE') + 1
  );

  console.log(
    'Advent of Code 2015 Q:5 S:2 = ',
    fileData
      .map(str => isNiceOrNoughtyWithNewRules(str))
      .sort()
      .lastIndexOf('NICE') + 1
  );
};

module.exports = {
  isNiceOrNoughty,
  isNiceOrNoughtyWithNewRules,
  getFifthQAnswer
};
