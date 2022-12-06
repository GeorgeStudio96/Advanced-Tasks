let lang = 'efdef'


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


let langResult = lang === 'ru' ? console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение') : console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday ')




let langArr = [['lang', 'ru'], ['lang', 'en']]

langArr[0].push('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение')
langArr[1].push('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday')

console.log(langArr)



let namePerson = 'Александр'

let namePersonResult = namePerson === 'Артем' ? console.log('Директор') : console.log('Студент')
let namePersonResult2 = namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Студент')
