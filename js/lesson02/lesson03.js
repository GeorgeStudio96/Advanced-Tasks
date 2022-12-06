let lang = 'ru'


if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение')
} else if (lang == 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday ')
} else {
    console.log('Язык не определен')
}



switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение')
        break;
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday ')
        break;
    default:
        console.log('Язык не определен')
        break;
}


const fromIndexToKey = { 'ru': 0, 'en': 1 }

const langArrIndex = fromIndexToKey[lang];
const langArr = [['Пн', 'Вт'], ['Mn', 'Tu']];

console.log(langArr[langArrIndex])



let namePerson = 'Александр'

let namePersonResult = namePerson === 'Артем' ? console.log('Директор') : console.log('Студент')
let namePersonResult2 = namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Студент')
