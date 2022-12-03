let num = 266219

let array = 123;

let newArr = ('' + array).split('').map(Number)

let sumNewArr = newArr.map(item => item * num)
console.log(sumNewArr)
let newSum = sumNewArr.map(item => item ** 3)
console.log(newSum)
let newSumRes = newSum.map(item => String(item).slice(0, 2))
console.log(newSumRes)