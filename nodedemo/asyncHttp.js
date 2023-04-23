// 'use strict'

// const http = require('http');

// const reqOne = process.argv[2];
// const reqTwo = process.argv[3];
// const reqThree = process.argv[4];
// let resOne = '';
// let resTwo = '';
// let resThree = '';

// const PromiseOne = new Promise((resolve, reject) => {
//   http.get(reqOne, (response) => {
//     response.setEncoding('utf8');
//     response.on('data', (data) => {
//       resOne += data;
//     })
//     response.on('end', () => {
//       // console.log('resOne', resOne)
//       resolve(resOne)
//     })
//   })
// })

// const PromiseTwo = new Promise((resolve, reject) => {
//   http.get(reqTwo, (response) => {
//     response.setEncoding('utf8');
//     response.on('data', (data) => {
//       resTwo += data;
//     })
//     response.on('end', () => {
//       // console.log('resTwo', resTwo)
//       resolve(resTwo)
//     })
//   })
// })

// const PromiseThree = new Promise((resolve, reject) => {
//   http.get(reqThree, (response) => {
//     response.setEncoding('utf8');
//     response.on('data', (data) => {
//       resThree += data;
//     })
//     response.on('end', () => {
//       // console.log('resThree', resThree)
//       resolve(resThree)
//     })
//   })
// })

// const getAllRes = async() => {
//   await PromiseOne.then((res => {
//     console.log(res)
//   }));
//   await PromiseTwo.then((res => {
//     console.log(res)
//   }));
//   await PromiseThree.then((res => {
//     console.log(res)
//   }));
// }

// getAllRes();


'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}


