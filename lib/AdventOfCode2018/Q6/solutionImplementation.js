"use strict";
const fileService = require("../../FileService/fileService");

const getPoint = function(pointStr) {
  const [x, y] = pointStr.split(", ").map(point => parseInt(point));
  return { x, y };
};

const mdistance = function(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
};

function hasDuplicates(array, value, index) {
  let temp = array.splice(index, 1);
  return array.indexOf(value) !== -1;
}

const calcLargestArea = function(points) {
  points = points.map(p => getPoint(p));
  let maxX = 0;
  let maxY = 0;
  points.forEach(p => maxX = Math.max(maxX, p.x));
  points.forEach(p => maxY = Math.max(maxY, p.y));

  let distances = new Array(points.length).fill(0);
  let infinite = "infinite";
  let maxArea = 0;

  for (let i = 0; i <= maxY + 1; i++) {
    for (let j = 0; j <= maxX + 1; j++) {
      let tempDistances = points.map(p => mdistance(j, i, p.x, p.y));
      let minDistance = Math.min(...tempDistances);
      let minIndex = tempDistances.indexOf(minDistance);
      let sameDistance = hasDuplicates(tempDistances, minDistance, minIndex);

      if (i === 0 || j === 0 || i === maxY + 1 || j === maxX + 1) {
        distances[minIndex] = infinite;
      }
      if (distances[minIndex] !== infinite && !sameDistance) {
        distances[minIndex]++;
        maxArea = Math.max(maxArea, distances[minIndex]);
      }
    }
  }
  return maxArea;
};

const calcLargestRegion = function(points, maxDistance) {
  points = points.map(p => getPoint(p));
  let maxX = 0;
  let maxY = 0;
  points.forEach(p => maxX = Math.max(maxX, p.x));
  points.forEach(p => maxY = Math.max(maxY, p.y));

  let maxArea = 0;

  for (let i = 0; i <= maxY + 1; i++) {
    for (let j = 0; j <= maxX + 1; j++) {
      let allDistances = points.reduce((acc, p) => acc + mdistance(j, i, p.x, p.y), 0);
      maxArea += allDistances < maxDistance ? 1 : 0;
    }
  }

  return maxArea;
};

const getSixthQ2018Answer = function() {
  const fileData = fileService.getFileData("Q6/input.txt", 2018);
  console.log("Advent of Code 2018 Q:6 S:1 = ", calcLargestArea(fileData.split("\n")));
  console.log("Advent of Code 2018 Q:6 S:2 = ", calcLargestRegion(fileData.split("\n"), 10000));
};

module.exports = {
  calcLargestArea,
  calcLargestRegion,
  getSixthQ2018Answer
};
