'use strict'
const fs = require('fs')
// const { Url } = require("url");
// console.log(process.argv)
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  const str = data.split('\n')
  console.log(str.length - 1)
});
