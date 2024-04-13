// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// **************************************************************************************
// const weeck = {
//   1: "Понедельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
//   6: "Суббота",
//   7: "Воскресенье",
// };
// console.log(weeck[2]);
// **************************************************************************************
// **************************************************************************************z
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// **************************************************************************************
// const user = {
//   name: "Kate",
//   surname: "Tsch",
//   age: "27",
// };
// console.log(
//   `Имя: ${user.name}, Фамилия: ${user.surname}, возраст: ${user.age}`
// );
// **************************************************************************************
// **************************************************************************************
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.
// **************************************************************************************
// const user = {
//   name: "Kate",
//   surname: "Tsch",
//   age: "27",
// };
// console.log(
//   `Имя: ${user.name}, Фамилия: ${user.surname}, возраст: ${user.age}`
// );
// user.patronymic = prompt("Введите отчество: ");
// console.log(user);
// delete user.surname;
// console.log(user);
// **************************************************************************************
// **************************************************************************************
// / Задание 2:
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
// **************************************************************************************
// const arrWeekDay = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const arrDayNumber = [1, 2, 3, 4, 5, 6, 7];
// const week = {};
// for (let i = 0; i < 7; i++) {
//   week[arrWeekDay[i]] = arrDayNumber[i];
//   console.log(arrWeekDay[i], arrDayNumber[i]);
// }
// console.log(week);
// **************************************************************************************
// **************************************************************************************
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
/*Цикл "forin" перебирает все перебираемые ключи объекта*/
// **************************************************************************************
// const object = {
//   x: 1,
//   y: 2,
//   z: 3,
// };
// for (const key in object) {
//   object[key] = object[key] ** 2;
// }
// console.log(object);
// **************************************************************************************
// **************************************************************************************
// Задание 3:
// Найдите сумму всех чисел приведенного объекта.
// const obj = {
//   iodsuf: {
//     asd: 1,
//     zxc: {
//       khvxc: {
//         ncxvm: 9,
//       },
//     },
//     qwd: 3,
//   },
//   gerg: {
//     joij: {
//       shdjk: 100,
//     },
//     kjn: 5,
//     iyu: 6,
//   },
//   xcnkv: {
//     oirje: 7,
//     iuhdv: 8,
//   },
//   idb: 1000,
// };
// function sum(obj) {
//   let curr = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       curr += obj[key];
//     } else{
//         curr+=sum(obj[key]);
//     }
//   }
//   return curr;
// }
// sum(obj);
// console.log(sum(obj));
// **************************************************************************************
// **************************************************************************************
// Задание 4:
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.
// **************************************************************************************
const riddle = {
  question: "Зимой и летом одним цветом",
  answer: ["елка", "ель", "ёлка"],
  hints: ["это зелёное", "это с иголками"],
  askQuestion() {
    let userAnswer = prompt(`Введите ответ на загадку: ${this.question}`);
    for (let i = 0; i < this.answer.length; i++) {
      if (userAnswer.toLocaleLowerCase() === this.answer[i]) {
        alert("Поздравляем!!!");
        return;
      }
    }
    for (let i = 0; i < this.hints.length; i++) {
      alert(this.hints[i]);
      userAnswer = prompt(`Введите ответ на загадку: ${this.question}`);
      if (this.answer.includes(userAnswer.toLocaleLowerCase())) {
        alert("Поздравляем!!!");
        return;
      }
    }
    alert("Вы проиграли");
  },
};
riddle.askQuestion();

// const riddle = {
//   question: "Зимой и летом одним цветом",
//   answer: ["елка", "ель", "ёлка"],
//   askQuestion() {
//     const userAnswer = prompt(
//       `Введите ответ на загадку: ${this.question}`
//     ).toLowerCase;
//     let flag = false;
//     if (this.answer.includes(userAnswer)) {
//       flag = true;
//       alert("Поздравляем!!!");
//     }
//     if (flag === false) {
//       alert("Неправильно");
//     }
//   },
// };
// riddle.askQuestion();
// **************************************************************************************
// **************************************************************************************

// **************************************************************************************

// **************************************************************************************
// **************************************************************************************
