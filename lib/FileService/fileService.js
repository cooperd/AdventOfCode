const fs = require('fs');
const path = require('path');

const getFileData = function(fileWithPathName, year) {
  return fs.readFileSync(path.join(__dirname, `../AdventOfCode${year}/`) + fileWithPathName, 'utf8');
};

module.exports = {
  getFileData
};
