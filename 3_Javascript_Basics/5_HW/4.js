"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/
const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

// for (let i = 0; i < products.length; i++) {
//   if ("photos" in products) {
//     console.log(products[i].photos);
//   }
// }

// for (let i = 0; i < products.length; i++) {
//   if (products.has) {

//   }
// }
// Задание 1.
// const filterProducts = products.filter((product) => {
//   if (product.photos.length !== 0) {
//   }
// });
// console.log(filterProducts);

// for (let i = 0; i < products.length; i++) {
//   const filterProducts = products.filter((item) => {
//     if (products[i].photos === "number") {
//       return item;
//     }
//   });
// }

// Задание 2.
// products.sort(function (a, b) {
//   if (a.price > b.price) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(products);
