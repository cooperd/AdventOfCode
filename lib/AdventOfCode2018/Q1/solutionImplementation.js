"use strict";
const fileService = require("../../FileService/fileService");

const calibrateFrequency = function(frequencies) {
  return frequencies.reduce((acc, frequent) => {
    return acc + parseInt(frequent);
  }, 0);
};

const frequencySeenTwice = function(frequencies) {
  let frequenciesMap = {
    "0": 1
  };
  let currentFrequency = 0;
  let duplicatedFrequency = 0;
  let hasDuplicate = false;

  while (!hasDuplicate) {
    frequencies.reduce((acc, frequent) => {
      currentFrequency = acc + parseInt(frequent);
      if (frequenciesMap[currentFrequency] !== undefined && !hasDuplicate) {
        duplicatedFrequency = currentFrequency;
        hasDuplicate = true;
      }
      frequenciesMap[currentFrequency] = frequenciesMap[currentFrequency] ? 2 : 1;
      return currentFrequency;
    }, currentFrequency);
  }

  return duplicatedFrequency;
};


const getFirstQ2018Answer = function() {
  const fileData = fileService.getFileData("Q1/input.txt", 2018).split("\n");
  console.log("Advent of Code 2018 Q:1 S:1 = ", calibrateFrequency(fileData));
  console.log("Advent of Code 2018 Q:1 S:2 = ", frequencySeenTwice(fileData));
};

module.exports = {
  calibrateFrequency,
  frequencySeenTwice,
  getFirstQ2018Answer
};
