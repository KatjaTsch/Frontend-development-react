# Движок JavaScript при проверке на равенство всегда приводит данные к числу.

* [] == ![] // true
Пустой массив при преобразовании в число даёт 0.
+[] // 0
Отрицания массива — это преобразование массива в булев тип, что даёт true, а
затем отрицание булева типа, что даёт false.
![] // false
И в итоге преобразование полученного булева значения false в число даёт нам 0.
А 0 == 0 - true.

# По стандарту JavaScript следующие значения и типы приводятся к false:
● "" (пустая строка);
● 0, -0, NaN (0 и NaN);
● null, undefined;
● false.
А эти значения и типы приводятся к true:
● "Hello" (непустые строки);
● 42;
● true;
● [ ], [ 1, "2", 3 ] (массивы);
● { }, { a: 42 } (объекты);
● function foo() { .. } (функции).

Комментарий к ДЗ_1:
Екатерина, здравствуйте :)
1 - Когда выводите расчитываемые значения пользователю - округляйте. Попробуйте ввести 21, посмотрите на результат, мы получим число 69.80000000000001. JavaScript не всегда может "правильно" посчитать некоторые операции, все из-за особенностей рассчетов, которые используются в языке (такое во многих языках встречается). Чтобы округлить число, можно использовать метод Math.round, например:
Math.round(num) округлит до целого числа по правилам математики.
Если мы хотим чтобы округление было до определенного знака после запятой, например, хотим 2 знака после запятой иметь (если они не нули), то можем пойти на хитрость, сначала умножить на 100 число, округлить его и потом поделить на 100:

const PI = 3.14159265359;
console.log(Math.round(PI * 100) / 100); // 3.14
При умножении на 100, мы получаем число 314.159265359, затем округляем по правилам математики, остается 314, после чего делим на 100 и получаем 3.14.
Либо, если мы выводим пользователю результат в строку, то можно превратить число в строку округлив до определенного количества знаков дробной части, например num.toFixed(2) округлит до 2-х чисел в дробной части числа значение переменной num.
Так как обе переменные не меняются в программе, лучше создать их как const.
Если вы ждете от пользователя число, при этом не проверяя что он ввел, то лучше сразу приводить его ввод в число (в prompt мы изначально получаем строку, странно температуру хранить в виде строки), вместо prompt лучше написать +prompt или Number.parseFloat(prompt(...)), чтобы сразу получить число.
console.log не нужен, туда будет выведено то, что возвращает alert, после того как выполнится, а alert возвращает всегда undefined.
2 - naMe - нет, так не стоит называть, лучше тогда назвать username.
Идеально.


