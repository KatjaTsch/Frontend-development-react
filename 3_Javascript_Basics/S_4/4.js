// Задание 1
// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.
// *************************************************************************************
// const array = [1, 2, 3];
// console.log(array);
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(array[index]);
// }
// *************************************************************************************
// *************************************************************************************
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.
// *************************************************************************************
// const arr = [5, "85", 78, true];
// console.log(arr.length);
// *************************************************************************************
// *************************************************************************************
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.
// *************************************************************************************
// const arr = ["a", "b", "c"];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);
// *************************************************************************************
// *************************************************************************************
// Задание 2:
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.
// *************************************************************************************
// const arr = [1, 2, 3];
// for (let index = 0; index < arr.length; index++) {
//   arr[index]++;
// }
// console.log(arr);
// let a = 5;
// let b = a++; /* постинкремент - вернёт старое значение, которое было до увеличения.
//  Следовательно, в "b" пойдёт "5", а в "а" - "6". ОТВЕТ: 6 5*/
// console.log(a, b);
// let a = 5;
// let b = ++a; /*преинкремент ОТВЕТ:  6 6*/
// console.log(a, b);
//  МАССИВ - ЭТО ССЫЛКА НА ТО, ГДЕ В ПАМЯТИ НАХОДЯТСЯ ДАННЫЕ ИЗ МАССИВА.
// ПОЭТОМУ ЗАЧАСТУЮ МАССИВ ЗАДАЁТСЯ ЧЕРЕЗ "CONST". Т.Е. МАССИВ = ЭТО КАК БАНКОВСКАЯ КАРТОЧКА.
// *************************************************************************************
// *************************************************************************************
// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length); /**ОТВЕТ: 9.
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.
// *************************************************************************************
// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);
// *************************************************************************************
// *************************************************************************************
// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.
// *************************************************************************************
// const arr = [1, "kljh", "5", false, true];
// // console.log(arr.splice(2, 2));
// // console.log(arr.splice(2, 0, 500));
// console.log(arr.splice(2, 2, 500, 400));
// console.log(arr);
// console.log(arr.length);
// *************************************************************************************
// *************************************************************************************
// Задание 3:
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// *************************************************************************************
// for (let index = 11; index <= 33; index++) {
//   console.log(index);
// }
// *************************************************************************************
// *************************************************************************************
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.
// *************************************************************************************
// for (let index = 0; index <= 100; index++) {
//   if (index % 2 !== 0) {
//     console.log(index);
//   }
// }
// *************************************************************************************
// *************************************************************************************
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// *************************************************************************************
// for (let index = 100; index >= 0; index--) {
//   console.log(index);
// }
// *************************************************************************************
// *************************************************************************************
// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.
// *************************************************************************************
// let num = 2;
// let count = 0;
// while (num <= 1000) {
//   num = num * 3;
//   count++;
// }
// console.log(count);
// console.log(num);
// *************************************************************************************
// *************************************************************************************
// Задание 4:
// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// *************************************************************************************
// const array = [2, 5, 9, 15, 1, 4];
// for (let index = 0; index < array.length; index++) {
//   if (array[index] >= 3 && array[index] <= 10) {
//     console.log(array[index]);
//   }
// }
// *************************************************************************************
// array.forEach(function (num) {
//   if (num >= 3 && num <= 10) {
//     console.log(num);
//   }
// });
// *************************************************************************************
// const filterArr = array.filter(function (num) {
//   if (num >= 3 && num <= 10) {
//     return true;
//   }
//   return false;
// });
// console.log(filterArr);
// *************************************************************************************
// const filterArr = array.filter((num) => num >= 3 && num <= 10);
// console.log(filterArr);
// *************************************************************************************
// *************************************************************************************
// 2. Найдите сумму четных чисел от 2 до 100.
// *************************************************************************************
// let summ = 0;
// for (let index = 2; index <= 100; index++) {
//   if (index % 2 === 0) {
//     console.log((summ = summ + index));
//   }
// }
// *************************************************************************************
// *************************************************************************************
// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.
// *************************************************************************************
// const array = [2, 5, 9, 3, 1, 4];
// let summ = 0;
// for (let index = 0; index < array.length; index++) {
//   summ += array[index];
// }
// console.log(summ);
// *************************************************************************************
// *************************************************************************************
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// *************************************************************************************
// let str = "-";
// for (let index = 0; index < 10; index++) {
//   str = str + index + "-";
// }
// console.log(str);
// *************************************************************************************
// *************************************************************************************
// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.// *************************************************************************************
// const array = [2, 5, 9, 0, 3, 1, 4];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     break;
//   }
//   console.log(array[i]);
// }
// *************************************************************************************
// *************************************************************************************
// Задание 5:
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.
// *************************************************************************************
// const arr = []; /**Math.trunc(Math.random(10)*10) */
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.trunc(Math.random(10) * 101));
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
//     console.log(arr[i]);
//   }
// }
// *************************************************************************************
// *************************************************************************************
// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.
// *************************************************************************************
// const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 3) {
//     count++;
//   }
// }
// console.log(array);
// console.log(count);
// *************************************************************************************
// *************************************************************************************
// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
// *************************************************************************************
// const array = [1, 2, 3, 4, 5];
// console.log(array);
// array.splice(1, 2);
// console.log(array);
// *************************************************************************************
// *************************************************************************************