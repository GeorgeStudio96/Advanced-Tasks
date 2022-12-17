
// function foo(x, y) {
//     return x * y
// }
function foo2(x, y) {
    return x + y
}


function myReduce(initialState, array, f) {

    let res = initialState

    for (let i = 0; i < array.length; i++) {
        res = f(res, array[i])
    }

    return res


}

let resReduce = myReduce(0, [10, 10], (x, y) => x + y)
console.log(resReduce);


let resReduce2 = myReduce('', ['hello ', 'world', '!'], foo2)
console.log(resReduce2);
