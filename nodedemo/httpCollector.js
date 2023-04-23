'use strict'

const http = require('http');

let finalData = '';

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    // console.log(data)
    finalData += data;
  })
  response.on('end', () => {
    console.log(finalData.length)
    console.log(finalData)
  })
})

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })