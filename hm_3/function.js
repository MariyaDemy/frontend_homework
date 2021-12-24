// assignment 0
// Лизе нужно написать функцию sayHello(name), которая возвращает
// приветствие для пользователя. Тем не менее, она влюблена в пользователя
// с именем “Mark”, и хотела бы поприветствовать его немного иначе.
// Помогите ей)
let sayHello = function (name) {
    switch (name) {
        case 'Oleg':
            return 'Hello, Oleg!';
            break;
        case 'Viktor':
            return 'Hello, Viktor!';
            break;
        case 'Mark':
            return 'Hi, Mark!';
            break;
        default: 'Hello, new user!';
    }
}
sayHello('Mark');

// assignment 1
let min = (a, b) => a < b ? a : b;
min(2, 5);

// assignment 2
let pow = (x, n) => x ** n;

// assignment 3 
let isEven = (n) => n % 2 === 0 ? true : false;
isEven(4);

// assignment 4 Slice
let deleteChars = (str) => str.slice(1, str.length - 1);
deleteChars('Hello');

// assignment 5 'Floors' Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж,
// и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж
// (передается как целое число), и возвращает реальный.
// Кроме того, ваша функция должна работать и на подвальных этажах.
let floorConverter = (num) => {
    if (num === 13) {
        return 'does not exist';
    }
    else if (num >= 0 && num < 13) {
        num++;
    }
    else return num;
}
console.log(floorConverter(13));

// assignment 6 Перепишите функцию
// - заменив if else на конструкцию switch (convertType1)
// - через Function Expression (convertType2)
// - с помощью стрелочного синтаксиса (convertType3)
// function convertType(value, toType) {
//     if (toType === 'boolean') {
//         return Boolean(value);
//     } else if (toType === 'string') {
//         return String(value);
//     } else if (toType === 'number') {
//         return Number(value);}}
// console.log(convertType('my string', 'boolean'));

function convertType1(value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
    }
}
console.log(convertType1('my string', 'boolean'));

// let convertType2 = function (value, toType) {
//     if (toType === 'boolean') {
//         return Boolean(value);
//     } else if (toType === 'string') {
//         return String(value);
//     } else if (toType === 'number') {
//         return Number(value);
//     }
// }
// console.log(convertType2('my string', 'boolean'));

// let convertType3 = (value, toType) => {
//     if (toType === 'boolean') {
//         return Boolean(value);
//     } else if (toType === 'string') {
//         return String(value);
//     } else if (toType === 'number') {
//         return Number(value);
//     }
// }
// console.log(convertType3('my string', 'boolean'));

// asignment 7
// Написать функцию transformArray(arr, index1, index2, adding), принимающий
// в качестве аргументов:
// 1) arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// 2) index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно
// поменять между собой местами (fpos и clfw нужно поменять местами)
// 3) adding - строка, которую необходимо дописать в конец к каждому элементу массива
// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно
// вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]


const transformArray = function (arr, index1, index2, adding) {

    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + adding;
    }
    return arr;
}
console.log(transformArray(['fngp', 'kgei', 'fpos', 'clfw'], 2, 3, 'green'));

// assignment 8

// Нужно написать функцию, в которую мы передаем число, суммируем цифры
// данного числа до тех пор, пока не останется одна цифра
const digitalRoot = function (number) {
    let arr = number.toString().split('');
    let result = arr.reduce((sum, item) => +item + sum, 0);
    return result > 9 ? digitalRoot(result) : result;
}
console.log(digitalRoot(737));