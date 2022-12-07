let message;


function foo(arg) {
    if (typeof arg != 'string') {
        message = 'Функция не является строкой'
    } else {
        message = 'Это строка Это строкаЭто строкаЭто строкаЭто строкаЭто строкаЭто строка'
    }
}
foo('ffr')

console.log(message)
message.trim();

if (message.length > 30) {
    console.log(message.slice(0, 30) + '...')
}



