'use strict'

const http = require('http');

http.get(process.argv[2], (respone) => {
  respone.setEncoding('utf8');
  respone.on('data', (data) => {
    console.log(data)
  })
})

// 官方
// 'use strict'
//     const http = require('http')
    
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)