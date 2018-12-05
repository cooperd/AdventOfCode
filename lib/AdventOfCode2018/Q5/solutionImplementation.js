"use strict";
const fileService = require("../../FileService/fileService");

const getUnitsAfterPolymerReact = function (polymer) {
  let index = 0;
  polymer = polymer.split('');
  while (index + 1 < polymer.length) {
    if (polymer[index].toUpperCase() === polymer[index+ 1] && polymer[index] === polymer[index+ 1].toLowerCase() ||
      polymer[index].toLowerCase() === polymer[index+ 1] && polymer[index] === polymer[index+ 1].toUpperCase()) {
      polymer.splice(index, 2);
      if(index !== 0){
        index--;
      }
    } else {
      index++;
    }
  }
  return polymer.length;
};

const getShortestLengthByOneCharDropOfPolymer = function(polymer){
  const charArr = 'abcdefghijklmnopqrstuvwxyz';
  let minLength = polymer.length;
  for (let i = 0; i < charArr.length; i++) {
    let copy = polymer;
    let charArrElement = charArr[i];
    let reg =  new RegExp(charArrElement, 'g');
    copy = copy.replace(reg, '');
    reg =  new RegExp(charArrElement.toUpperCase(), 'g');
    copy = copy.replace(reg, '');
    minLength = Math.min(getUnitsAfterPolymerReact(copy), minLength);
  }
  return minLength;
};

const getFifthQ2018Answer = function () {
  const fileData = fileService.getFileData("Q5/input.txt", 2018);
  console.log("Advent of Code 2018 Q:5 S:1 = ", getUnitsAfterPolymerReact(fileData));
  console.log("Advent of Code 2018 Q:5 S:2 = ", getShortestLengthByOneCharDropOfPolymer(fileData));
};

module.exports = {
  getUnitsAfterPolymerReact,
  getShortestLengthByOneCharDropOfPolymer,
  getFifthQ2018Answer
};
