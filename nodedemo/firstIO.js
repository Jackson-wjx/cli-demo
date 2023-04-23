'use strict'
const fs = require('fs')
// const { Url } = require("url");
// console.log(process.argv)
const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString()
const arr = str.split('\n')
console.log(arr.length - 1)