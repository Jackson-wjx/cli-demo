'use strict'
// console.log(process.argv) 
const numList = process.argv.slice(2);
// console.log(numList) 
// process.argv.forEach(item )
let sum =0;
numList.forEach(item => {
  sum += +item
})
console.log(sum) 
