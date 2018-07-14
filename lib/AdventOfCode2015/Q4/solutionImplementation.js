'use strict';
const md5 = require('md5');

const concatInputWithIndex = function(input, index) {
  return input + index;
};

const hasXLeadingZeros = function(input, x) {
  let leadingZeros = Array(x);
  leadingZeros = leadingZeros.fill('0', 0, x).join('');
  return input.indexOf(leadingZeros) === 0;
};

const getIndexSuffixOfInputThatHasXZerosInMD5Hash = function(input, x = 5) {
  let indexSuffix = 0;
  let concatedInput = concatInputWithIndex(input, indexSuffix);
  let md5Hash = md5(concatedInput);

  while (!hasXLeadingZeros(md5Hash, x)) {
    indexSuffix++;
    concatedInput = concatInputWithIndex(input, indexSuffix);
    md5Hash = md5(concatedInput);
  }

  return indexSuffix;
};

const getFourthQAnswer = function() {
  const input = 'bgvyzdsv';
  console.log(
    'Advent of Code 2015 Q:4 S:1 = ',
    getIndexSuffixOfInputThatHasXZerosInMD5Hash(input)
  );
  console.log(
    'Advent of Code 2015 Q:4 S:2 = ',
    getIndexSuffixOfInputThatHasXZerosInMD5Hash(input, 6)
  );
};

module.exports = {
  getIndexSuffixOfInputThatHasXZerosInMD5Hash,
  getFourthQAnswer
};
