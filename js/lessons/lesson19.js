const input = document.querySelector('.input')
const res = document.querySelector('.res')

const debounce = (fn, ms) => {

    let timeout;
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    }
}





const setText = () => {
    res.innerHTML = input.value

}


const setTextDebounce = debounce(setText, 1000)

input.addEventListener('keyup', setTextDebounce)
