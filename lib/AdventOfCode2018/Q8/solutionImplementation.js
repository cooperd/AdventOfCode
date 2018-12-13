"use strict";
const fileService = require("../../FileService/fileService");

const calcEntriesMetadata = function(treeList) {
  return getEntriesMetadata(treeList, parseInt(treeList[0]), parseInt(treeList[1]), 0).count;
};

const getEntriesMetadata = function(treeList, numOfNodes, metadataEntries, headIndex, secondQ) {
  let count = 0;
  if (numOfNodes === 0) {
    let endIndex = 0;
    for (let i = headIndex + 2; i < headIndex + 2 + metadataEntries; i++) {
      count += parseInt(treeList[i]);
      endIndex = i;
    }
    return { count, endIndex };
  }
  let nextHeadIndex = headIndex + 2;

  let nodeListValue = [];
  while (numOfNodes > 0) {
    let data = getEntriesMetadata(treeList, parseInt(treeList[nextHeadIndex]), parseInt(treeList[nextHeadIndex + 1]), nextHeadIndex, secondQ);
    numOfNodes--;
    if (secondQ) {
      nodeListValue.push(data.count);
    } else {
      count += data.count;
    }
    nextHeadIndex = data.endIndex + 1;
  }


  for (let i = nextHeadIndex; i < nextHeadIndex + metadataEntries; i++) {
    let metadata = parseInt(treeList[i]);
    if (secondQ) {
      count += nodeListValue.length > metadata - 1 ? nodeListValue[metadata - 1] : 0;
    } else {
      count += metadata;
    }
  }

  let endIndex = nextHeadIndex + metadataEntries - 1;
  return { count, endIndex };
};

const calcValueOfRootNode = function(treeList) {
  return getEntriesMetadata(treeList, parseInt(treeList[0]), parseInt(treeList[1]), 0, true).count;
};

const getEightQ2018Answer = function() {
  const fileData = fileService.getFileData("Q8/input.txt", 2018);
  console.log("Advent of Code 2018 Q:8 S:1 = ", calcEntriesMetadata(fileData.split(" ")));
  console.log("Advent of Code 2018 Q:8 S:2 = ", calcValueOfRootNode(fileData.split(" ")));
};

module.exports = {
  calcEntriesMetadata,
  calcValueOfRootNode,
  getEightQ2018Answer
};
