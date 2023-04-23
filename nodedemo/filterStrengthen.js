'use strict'

const fileFilter = require('./filterModel')
fileFilter(process.argv[2], process.argv[3], (err, list) => {
  if (err) console.log(err);
  list.forEach(item => console.log(item))
})