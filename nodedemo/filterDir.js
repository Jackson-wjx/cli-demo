'use strict';

const fs = require('fs');

const keyStr = '.' + process.argv[3]

fs.readdir(process.argv[2], (err, list) => {
  list.forEach((item) => {
    // path.extname(file) === ext 优化
    if (item.includes(keyStr)) {
      console.log(item)
    }
  });
});
