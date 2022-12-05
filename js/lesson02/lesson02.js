let arr = 266219
let newArr = ('' + arr).split('').map(Number)

let sum = newArr.reduce(function (prev, item, index) {
    return prev * newArr[index]
})
console.log(sum)

const newSum = String(sum ** 3)

console.log(newSum)

let newResult = newSum.slice(0, 2)
console.log(newResult)
