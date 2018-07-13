const fs = require('fs');
var path = require('path');

const getFileData = function(fileWithPathName) {
  return fs.readFileSync(path.join(__dirname, '/') + fileWithPathName, 'utf8');
};

module.exports = {
  getFileData
};
