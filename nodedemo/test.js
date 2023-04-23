'use strict';
// pipe 类似一个复制程序
var fs = require('fs');

var rs = fs.createReadStream('a.txt');
var ws = fs.createWriteStream('b.txt');

rs.pipe(ws);
