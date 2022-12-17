// Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const weekDiv = document.querySelector('.week') // отображу данные на странице 
const week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
const toDay = new Date();


const weekFunc = function () {

    week.forEach(function (item) {
        return item
    })
}




weekFunc()


weekDiv.innerHTML = week
