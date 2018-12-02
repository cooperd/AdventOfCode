"use strict";
const fileService = require("../../FileService/fileService");

const calcChecksum = function(boxIds) {
  let checkSumInput = {
    exactlyTwo: 0,
    exactlyThree: 0
  };
  boxIds.map(boxId => {
    checkForRepeted(boxId, checkSumInput);
  });

  return checkSumInput.exactlyThree * checkSumInput.exactlyTwo;
};

const checkForRepeted = function(boxId, checkSumInput) {
  let hasTwo = false;
  let hasThree = false;
  while (boxId.length > 1) {
    let tempBoxId = boxId;
    const boxIdElement = boxId[0];
    let previousTempBoxIdLength;

    do {
      previousTempBoxIdLength = tempBoxId.length;
      tempBoxId = tempBoxId.replace(boxIdElement, "");
    } while (tempBoxId.length !== previousTempBoxIdLength);

    switch (boxId.length - tempBoxId.length) {
      case 2: {
        if (!hasTwo) {
          checkSumInput.exactlyTwo += 1;
        }
        hasTwo = true;
        break;
      }
      case 3: {
        if (!hasThree) {
          checkSumInput.exactlyThree += 1;
        }
        hasThree = true;
        break;
      }
    }
    boxId = tempBoxId;
  }
};

const findCommonLettersWithOneDiff = function(boxIds) {
  let commonLetters = "Boxes Not Found";
  boxIds.forEach(boxId => {
    for (let i = 0; i < boxIds.length; i++) {
      let originalBoxId = boxIds[i];
      let comparedBoxId = boxIds[i];
      for (let j = 0; j < boxId.length; j++) {
        const boxIdElement = boxId[j];
        comparedBoxId = comparedBoxId.replace(boxIdElement, "");
      }
      if (comparedBoxId.length === 1) {
        commonLetters = originalBoxId.replace(comparedBoxId, "");
        return;
      }
    }
  });
  return commonLetters;
};

const getSecondQ2018Answer = function() {
  const fileData = fileService.getFileData("Q2/input.txt", 2018).split("\n");
  console.log("Advent of Code 2018 Q:2 S:1 = ", calcChecksum(fileData));
  console.log("Advent of Code 2018 Q:2 S:2 = ", findCommonLettersWithOneDiff(fileData));
};

module.exports = {
  calcChecksum,
  findCommonLettersWithOneDiff,
  getSecondQ2018Answer
};
