// 同一台计算机上的两个进程之间通信
'use strict'
const fs = require('fs')
const net = require('net')
const fileName = process.argv[2]

if (!fileName) {
  throw Error('Error: No filename specified.')
}

net.createServer(connection => {
  // Reporting
  console.log('Subscriber connected')
  connection.write(`Now watching "${fileName}" for changes...\n`)

  // Watcher setup
  const watcher = fs.watch(fileName, () => connection.write(`File changed: ${new Date()}\n`))

  // clean up
  connection.on('close', () => {
    console.log('Subscriber disconnected.');
    watcher.close()
  })
}).listen('/tmp/watcher.sock', () => console.log('Listening for Subscribers...'))