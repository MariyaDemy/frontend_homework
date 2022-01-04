// assignment 1 Создать произвольный массив и пройти по нему с помощью цикла for .. of 

let arr = [1,2];
for (item of arr) {
    console.log(item);
};

// assignment 2 Существует список ul на странице. Получить все текстовые значения элементов списка.
// Создать из них массив и к каждому элементу массива добавить его порядковый номер.
// Вывести полученный массив

console.log(Array.from(document.getElementsByTagName('li')).map((el,number) => {
    return number + 1 + ") " + el.innerText;}));

// assignment 3 Напишите функцию sumPrices(prices), которая возвращает сумму всех цен
//  с помощью метода Object.values

const prices = {
    oranges: 6,
    clementines: 5,
    lemons: 4
}

const sumPrices = function (obj) {
    return Object.values(obj).reduce((sum, item) => {
        return sum + item;})
}
console.log(sumPrices(prices));


// assignment 4 Присвоить каждое свойство объекта к отдельной переменной 
let product = {
    name: "John",
    price: 30,
    sold: false
};

let { name: productName,  price: productPrice, sold: productStatus} = product;
alert(productStatus);

// assignment 5 Присвоить первое и второе значение массива к соответствующим переменным, 
// а остальные значения сложить

let [givenName, surname, ...rest] = ["Tony", "Stark", 1 , 45, 2, 5, 34, 9, 11];
let sum = rest.reduce((sum, item) => {
    return sum + item;});

console.log(givenName, surname, sum);

