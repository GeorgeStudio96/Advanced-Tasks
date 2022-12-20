let currentTime = document.querySelector('.current-time')
let currentTimeMin = document.querySelector('.current-time.min')



function getAllTimes() {

    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]

    let mounths = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ]




    const currentDate = function () {
        let date = new Date();
        let day = date.getDay();
        let currentDay = date.getDate();
        let mounth = date.getMonth();
        let year = date.getFullYear();

        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + date.getHours()
        }
        let minute = date.getMinutes();
        if (minute < 10) {
            minute = '0' + date.getMinutes();
        }
        let second = date.getSeconds();
        if (second < 10) {
            second = '0' + date.getSeconds()
        }


        let timeCorrect = [
            'час',
            'часа',
            'часов'
        ]

        let timeCorrectMinute = [
            'минута',
            'минуты',
            'минут'
        ]

        let timeCorrectSecond = [
            'секунда',
            'секунды',
            'секунд'
        ]


        let currentMin = timeCorrectMinute[0]

        if (minute === 1 || minute === 21 || minute === 31 || minute === 41 || minute === 51) {
            currentMin = timeCorrectMinute[0]
        } else if (minute % 10 === 2 || (minute % 10 === 3) || (minute % 10 === 4)) {
            currentMin = timeCorrectMinute[1]
        } else {
            currentMin = timeCorrectMinute[2]
        }

        let currentSec = timeCorrectSecond[0]

        if (second === 1 || second === 21 || second === 31 || second === 41 || second === 51) {
            currentSec = timeCorrectSecond[0] // секунда
        } else if (second % 10 == 2 || second % 10 == 3 || second % 10 == 4) {
            currentSec = timeCorrectSecond[1] // секунды
        } else {
            currentSec = timeCorrectSecond[2] // секунд
        }



        let currentHourse = timeCorrect[0]

        if (hours === 1 || hours === 21) {
            currentHourse = timeCorrect[0] // час
        } else if ((hours % 10 === 2) || (hours % 10 === 3) || (hours % 10 === 4)) {
            currentHourse = timeCorrect[1] // часа
        } else {
            currentHourse = timeCorrect[2] // часов
        }




        let result = 'Сегодня ' + days[day] + ' ' + currentDay + ' ' + mounths[mounth] + ` ${year} года` + '—' + hours + ' ' + currentHourse + ' ' + minute + ' ' + currentMin + ' ' + second + ' ' + currentSec

        return result
    }

    const currentDateMin = function () {
        let date = new Date();
        console.log(date.getMonth());
        let currentDay = date.getDate();
        if (currentDay < 10) {
            currentDay = '0' + date.getDate()
        }

        let currentMonth = date.getMonth()
        if (currentMonth < 10) {
            currentMonth = '0' + date.getMonth()
        }

        let currentYear = date.getFullYear()

        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + date.getHours()
        }

        let minute = date.getMinutes();
        if (minute < 10) {
            minute = '0' + date.getMinutes();
        }

        let second = date.getSeconds();
        if (second < 10) {
            second = '0' + date.getSeconds();
        }




        let result = currentDay + '.' + (currentMonth + 1) + '.' + currentYear + '—' + hours + ':' + minute + ':' + second

        return result
    }



    currentTime.innerHTML = currentDate()
    currentTimeMin.innerHTML = currentDateMin()

}




setInterval(getAllTimes, 1000)












