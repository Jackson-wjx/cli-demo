'use strict'

const net = require('net')

const zeroFill = (i) => {
  return (i < 10 ? '0' : '') + i;
}

const now = () => {
  const d = new Date();
  return `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}\n`
}


const server = net.createServer(socket => {
  socket.end(now())
})

server.listen(Number(process.argv[2]))