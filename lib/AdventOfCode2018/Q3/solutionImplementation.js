"use strict";
const fileService = require("../../FileService/fileService");

const parseClaim = function(claim){
  const temp = claim.split(' ');
  const [x, y] = temp[2].substring(0, temp[2].length-1).split(',').map(x => parseInt(x));
  const [width, height] = temp[3].split('x').map(x => parseInt(x));

  return {
    id: temp[0].substring(1),
    x, y, width, height
  }

};

const findOverlayInches = function(claims) {
  const claimsObj = claims.map(claim => parseClaim(claim));
  let fabricSpace = {};

  claimsObj.forEach(claim => {
    for (let i = claim.x; i < claim.x + claim.width; i++) {
      for (let j = claim.y; j < claim.y + claim.height; j++) {
        if(!fabricSpace[i + ',' + j]){
          fabricSpace[i + ',' + j] = claim.id
        } else {
          fabricSpace[i + ',' + j] = 'X'
        }
      }
    }
  });

  let numOfOverlayInches = 0;
  Object.keys(fabricSpace).forEach( inch => {
    if(fabricSpace[inch] === 'X'){
      numOfOverlayInches++;
    }
  });

  return numOfOverlayInches;
};

const findNotOverlapClaim = function(claims){
  const claimsObj = claims.map(claim => parseClaim(claim));
  let fabricSpace = {};
  let claimsMap = {};

  claimsObj.forEach(claim => {
    claimsMap[claim.id] = {overlap: false};
    for (let i = claim.x; i < claim.x + claim.width; i++) {
      for (let j = claim.y; j < claim.y + claim.height; j++) {
        if(!fabricSpace[i + ',' + j]){
          fabricSpace[i + ',' + j] = claim.id;
        } else {
          claimsMap[claim.id] = {overlap: true};
          if(fabricSpace[i + ',' + j] !== 'X') {
            claimsMap[fabricSpace[i + ',' + j]] = {overlap: true};
            fabricSpace[i + ',' + j] = 'X';
          }
        }
      }
    }
  });

  let result = null;

  Object.keys(claimsMap).forEach( id => {
    if(!claimsMap[id].overlap){
      result = id;
    }
  });

  return result;
};

const getThirdQ2018Answer = function() {
  const fileData = fileService.getFileData("Q3/input.txt", 2018).split('\n');
  console.log("Advent of Code 2018 Q:2 S:1 = ", findOverlayInches(fileData));
  console.log("Advent of Code 2018 Q:2 S:2 = ", findNotOverlapClaim(fileData));
};

module.exports = {
  findOverlayInches,
  findNotOverlapClaim,
  getThirdQ2018Answer
};
