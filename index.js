const app = () => {
const firstName = createMessageString('Name?')
const surName = createMessageString('Surname?')
const lastName = createMessageString('Lastname?')
const age = +createMessageNumber('Age?')
let gender = confirm('Man or Wooman?') ? 'Man' : 'Wooman'
let ageInDays = 365
let pensionForm

if(gender === 'Man' && age >= 65) {
  pensionForm = 'Yes'
} else if(gender === 'Wooman' && age >= 55) {
  pensionForm = 'Yes'
} else {
  pensionForm = 'No'
}
anketa(firstName,lastName,surName,age,ageInDays,gender,pensionForm)

}


function createMessageString(message) {
  let string;
  do {
    string = prompt(message)
  } while (string === '' || string === null || !isNaN(+string))
  return string
}

function createMessageNumber(message) {
  let num;
  do {
    num = prompt(message)
  } while (num === '' || num === null || isNaN(+num))
  return num
}


function anketa(firstName,lastName,surName,age,ageInDays,gender,pensionForm) {
  alert(`
  Name: ${firstName}
  surName: ${surName}
  Lastname: ${lastName}
  Gender: ${gender}
  Age: ${age}
  Age in years ${age + 5}
  Age in days ${+age * ageInDays}
  Retired: ${pensionForm}
  `)
}

app()
// обязательно спросить
// while(num === ''|| num === null || !isNaN(+num)) // Валидация на число работает
// while(num === ''|| num === null || num === !isNaN(+num)) // Валидация на число не работает


// function createMessage( message,validateToString) {
//   let num
//   validateToString()
//   function validateToString() {
//     do {
//       num = prompt(message)
//     } while(num === null || num === '' || num === !isNaN(+num)) 
//   }
//   return num
// }
// function validateGender(manOrWooman) {
//   let num 
//   if(num => 65 && num === true) {

//   }
//   num = confirm(manOrWooman) ? 'Мужчина' : 'Женщина'
  
//   return num
// }
// function anketa() { 
//   alert(`
//   Name: ${message}
//   Surname: ${messagee}
//   Lastname: ${message}
//   Age: ${message}
//   Age after five year: ${message + 5}
//   Age in days: ${message * 365}
//   Gender: ${message}
//   `)
// }
// anketa()


// do {
//   string = prompt(message);
// } while (string === "" || string === null || !isNaN(+string));
// return string;

// const app = (message,func) => {
//   message = createMessage('Name?')
//   message = createMessage('Surname')
//   message = createMessage('Lastname?')
//   message = +createMessage('age?')
//   message = validateGender('Man or Wooman?')
//   anketa()
//   }


// function sayHi() {
//   console.log('Всем привет')
// }

// sayHi()


// let userName = 'Вася';

// function showMessage() {
//   userName = 'Петя';

//   let message = 'Привет,' + userName;


//   console.log(message)
// }
// console.log(userName);
// showMessage()
// console.log(userName)

// function showMessage(from,text) {
//   console.log(from,text)
//   console.log(from + ':' + text); 
// }

// showMessage('Аня','Привет');
// showMessage('Аня','Как дела?')

// function showMessage(from,text = 'текст не добавлен') {
//   console.log(from + ':' + text)
// }

// showMessage('Аня')

// function sum(a,b) {
//   return a + b;
// }

// let result = sum(1,2);
// console.log(result)


// function sum(a,b) {
//   return a + b;
// }

// let sum = (a,b) => {
//   return a + b;
// }



// let user = {
//   name: "Иван",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }

 // теперь в переменной clone находится абсолютно независимый клон объекта
// clone.name = "Пётр"; // изменим в нём данные

// console.log(user);
// console.log(clone)

// let user = [{name:'Иван'},{age:30}];
// for(let key of user) {
//   console.log(key)
// }



// let name;
// do {
//     name = prompt('Твое имя?');
// } while (name === "" || name === null || !isNaN(+name))

// let key = prompt('tvoe imya?','philipp')


// switch (key) {
//     case String():
//         break
// }

// console.log(key)


// const n = prompt('tvoe imya?')


// console.log(String(n))
// switch (n) {
//   case '':
//     alert( 'pustaya stroka');
//     break;
//   case null:
//     alert( 'escape i enter ne doljni rabotat' );
//     break;
//   case Number(n):
//     alert( 'cifri ne rabotaiut');
//     break;
//   case String(n):
//     alert('teper vse horosho');
//     break
// }

// console.log(name)
// console.log(typeof name)


// function min(a,b) {
//     if(a < b) {
//       return a
//     } return b
// }
// console.log(min(1,1))



// function min(a,b) {
//     a < b ? a : b
// }

// min(2, 5)  
// min(3, -1)
// min(1, 1) 




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

// const user = {
//     fistName:'John',
//     lastName:'Doe',
//     age:19,
//     pet: {
//         type:'Rabbit',
//     },
// };

// console.log(user);
// console.log(user.fistName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.pet);
// console.log(user.pet.type);

// const numbers = [1,2,3]
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])


// const numbersLength = numbers.length;
// console.log('Length',numbersLength)

// const numbers = [1,2,3];
// numbers.push(4); // добавит в конце 4
// numbers.unshift(0) // добавит 0 в начало

// console.log(numbers.length)

// const numbers = [1,2,3];

// numbers.pop(); // удалит цифру 3
// numbers.shift(1); // удалит цифру 1

// console.log(numbers)

// const numbers = [1,2,3];

// for (let index = 0;index < numbers.length; index++) {
//     console.log(numbers[index])
// }


// Задание! Поиск данных в массиве.
// Создадим массив объектов, который будет содержать данные о пользователях;
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert;
// прим:

// Если совпадения не произошло вывести alert с ошибкой:
// “No results found for your request”




// if(user ==="your name") {
//     alert('Ashton')
// } else {
//     alert('noname')
// }




// let data = [ 
  
  
//     {
//       firstName: "Ashton",
//       lastName: "Kutcher",
//       age: 40,
//     },
//     {
//       firstName: "Bradley",
//       lastName: "Pitt",
//       age: 54,
//     },
//     {
//       firstName: "Hannah",
//       lastName: "Dakota",
//       age: 24,
//     },
    
//   ];

  

//   const firstName = prompt('fisrtName?');

//   let flag = true;

//   for( let index = 0; index < data.length; index++) {  
//     if(data[index].firstName.toLowerCase() === firstName.toLowerCase()) {
//         alert(firstName)
//         flag = false
    
//     } 
//   }

// if(flag) {
//     alert('Error')
// }
// debugger;


//   const age = +prompt('Age?');

//   let flag = true;

//   for( let index = 0; index < data.length; index++) {
//       if(data[index].age === age) {
//         alert(age)
//         flag = false
//     } else if(data[index].firstName === age) {

//     }
//   }

// if(flag) {
//     alert('Error')
// }