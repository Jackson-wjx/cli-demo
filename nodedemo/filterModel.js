'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (filePath, ext, callback) => {
  const extStr = '.' + ext;
  fs.readdir(filePath, (err, list) => {
    if (err) {return callback(err)};
    const filterList = list.filter((item) => path.extname(item) === extStr);
    callback(null, filterList)
  });
}