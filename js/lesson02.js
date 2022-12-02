// ресурс https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// русурс https://proglib.io/p/5-5-preobrazovanie-znacheniy-v-stroku-ili-chislo-v-javascript-2022-05-15
// ресурс https://www.youtube.com/watch?v=fvO3JORn8Uc


// файл изменен

let num = 266219

let array = 123;

// создам новый массив из переменной array. Затем использую метод split, чтобы разделить значение переменной на каждую единицу (1, 2, 3)
// после использую метод map, чтобы из одного массива, создать другой

let newArr = ('' + array).split('').map(Number)

console.log(newArr)
// для проверки, выведу в консоль индекс каждого значения нового массива

console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])

// теперь решаем задачу, перемножим переменную num с каждым значением



console.log((num * newArr[0])) // 266219 * 1 
console.log((num * newArr[1])) // 266219 * 2 
console.log((num * newArr[2])) // 266219 * 3

// альтерантивный вариант с forEach 


newArr.forEach(function (item, index) {
    console.log('Альтерантинвый вариант с использованием forEach')
    console.log(item * num)
})



console.log((num * newArr[0]) ** 3)
console.log((num * newArr[1]) ** 3)
console.log((num * newArr[2]) ** 3)

let arrResult1 = (num * newArr[0]) ** 3
let arrResult2 = (num * newArr[1]) ** 3
let arrResult3 = (num * newArr[2]) ** 3

// сначала преобразуем переменную, которая является типом NUMBER в STRING и только потом переберем методом для срок slice 


console.log(String(arrResult1).slice(0, 2))
console.log(String(arrResult2).slice(0, 2))
console.log(String(arrResult3).slice(0, 2))






