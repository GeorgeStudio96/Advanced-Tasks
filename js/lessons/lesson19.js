const input = document.querySelector('.input')
const res = document.querySelector('.res')


const setText = () => {
    res.innerHTML = input.value

}

input.addEventListener('keyup', debounce(setText, 300))





function debounce(callback, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}