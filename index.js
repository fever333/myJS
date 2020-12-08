let name;
do {
    name = prompt('Твое имя?');
} while (name === "" || name === null || !isNaN(+name))



// const name = validateStringInput('Как тебя зовут?')
// const surName = validateStringInput('Какая у тебя фамилия')
// const lastName = validateStringInput('Какое твоё отчество')
// const age = validateNumberInput('Сколько тебе лет?')
// let gender = confirm('Твой пол мужской?')  ? 'Мужской' : 'Женский'
// let pensionForm



// function validateStringInput(message) {
//     let string;
//     do {
//     string = prompt(message);
//     } while (string === "" || string === null || !isNaN(+string));

//     return string;
// }

// function validateNumberInput(message) {
//     let num;
//     do {
//     num = prompt(message);
//     } while (num === "" || num === null || isNaN(+num));

//     return num;
// }


// if((age >= 65 && gender === 'Мужской') || (age >= 55 && gender === 'Женский')) {
//     pensionForm = 'Да'
// } else pensionForm = 'Нет'


// alert(`
// Имя: ${name}
// Фамилия: ${surName}
// Отчество: ${lastName}
// Твой возраст в годах: ${age}
// Твой возраст в днях: ${age * 365}
// Твой возраст через 5 лет ${age + 5}
// Твой пол: ${gender}
// Вы на пенсии: ${pensionForm}
// `)



// let i = 0;
// while (i < 3) {
//     console.log(i)
//     i++;
// }

// let i = 3  
//     while(i) {
//         console.log(i);
//         i--
//     }

// let i = 0;
// 

// for (let i = 0;i < 3; i++) {
//     console.log(i)
// }

// let sum = 0;

// while(true) {
//     let value = +prompt('Введите число',"")

//     if (!value) break;

//     sum +=value;
// }
// console.log('Сумма: ' + sum)


// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i)
// }
// let a = 2 + 2

// switch (true) {
//     case 3:
//         console.log('Маловато');
//         break;
//     case 3 < 1:
//         console.log('В точку!');
//         break;
//     case 5:
//         console.log('Перебор');
//         break;
//         default:
//         console.log('Нет таких значений')
// }



