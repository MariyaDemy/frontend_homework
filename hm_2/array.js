// assignment 1
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles.splice(styles.length - 2, 1, 'Классика');
alert(styles.shift(0));
styles.unshift('Рэп', 'Регги');
console.log(styles);

// assignment 2
// Создайте калькулятор для введённых значений
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт число 15.
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива
let values = [];
for (let f = 0; f < 3; f++) {
    let value = +prompt('Enter any numbers you like');
    if (value === 15) {
        values.push(value)
        break;
    }
    else { values.push(value) }
}
let valuesSum = values.reduce((sum, item) => { return sum + item; });
alert(valuesSum);








