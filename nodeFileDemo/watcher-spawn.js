'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename) {
  throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  // spawn()返回的对象是ChildProcess。它的stdin、stdout、stderr属性都是Stream，可以用作输入和输出。使用pipe()方法把子进程的输出内容直接传送到标准输出流。
  // ls.stdout.pipe(process.stdout);

  let output = '';
  ls.stdout.on('data', chunk => output += chunk);

  ls.on('close', () => {
    const parts = output.split(/\s+/);
    console.log(parts[0], parts[4], parts[8]);
  })
})

console.log(`Now watching ${filename} for changes...`);