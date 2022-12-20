const ul = document.querySelectorAll('ul')
const li = document.querySelectorAll('ul > li')
const button = document.querySelector('button')
const input = document.querySelector('input')


console.log(ul);
console.log(li)
console.log(button)
console.log(input)


const addTask = function () {

    let cloneLi = li[0].cloneNode(true)
    cloneLi.innerHTML = input.value

    ul[0].append(cloneLi)
    input.value = ''
}

button.addEventListener('click', function () {
    addTask();
})
