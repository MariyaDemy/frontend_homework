"use strict";

// assignment 
let person = {
    name: "Mariya",
    age: 21,
    sayIntro(){
        alert(`My name is ${this.name} and I am ${this.age} years old`)
    }
}
person.sayIntro();
console.log(person.toString());

// assignment 1
// Создать объект car с набором свойств по желанию. 
// Вывести в цикле все ключи и значения объекта 

let Car = {
    make: "Tesla",
    model: "S",
    "type of drive": "all-wheel"
}
for(let key in Car) {
    console.log(key, Car[key]);
} 


/* assignment 2.
Создать объект user со свойствами name, email, phone, id. 
Скопировать этот объект со всеми свойствами в новую переменную newUser. */

let user = {
    name: 'Kerstin',
    email: 'Kers@gmail.com',
    phone: '+1 302 246 0000',
    id: 'kerstin266'
};

let newUser = Object.assign({}, user);
console.log(newUser);

let User = {};
for (let key in user) {
    User[key] = user[key];
};
console.log(User);

// assignment 3
// Создать объект circle со свойствами: radius, color. 
// Также создать в объекте метод calculateCircumference(), 
// при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).

let circle = {
    radius: 20,
    color: "green",
    calculateCircumference() {
        let circumference = 2 * Math.PI * this.radius;
        return circumference;
    },
};
console.log(circle.calculateCircumference());

// assignment 4
// Создать объект message с полем text и методами: setMessage(string), showMessage().
// При вызове метода setMessage() в поле text записывается переданная в качестве аргумента строка.
// При вызове метода showMessage() вызывается alert() с содержимым поля text


let message = {
    text: "",
    setMessage(string) {
        this.text = string;
    },
    showMessage() {
        alert(this.text);
    }
};
message.setMessage("pineapple");
message.showMessage();


// assignment 5
// Создать объект Rectangle с параметрами height и width и 
// методом getArea(), который возвращает площадь 

const Rectangle = {
    height: 10,
    width: 20,
    getArea() {
        return this['height'] * this['width'];
    }
};
console.log(Rectangle.width);
console.log(Rectangle.height);
console.log(Rectangle.getArea());

// assignment 6
// Напишите функцию isEmpty(obj), 
// которая возвращает true, если у объекта нет свойст, иначе false

const fruits = {};

const isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty(fruits));
console.log(isEmpty(Rectangle));

// assignment 7
// Создать объект selfGeneratedUser с методами:
// 1) getInfo() при вызове которого мы через prompt() поочередно получим данные об
// name, email, phone пользователя и запишем их в соответствующие свойства объекта.
// 2) introduce(), при выводе которого мы поочередно выводим с помощью alert name, email, phone.
// Если поля нет - не выводим его, переходим к другому полю.

let selfGeneratedUser = {
    getInfo() {
        selfGeneratedUser["name"] = prompt("What is you name?");
        selfGeneratedUser["email"] = prompt("What is your e-mail?");
        selfGeneratedUser["tel"] = prompt("What is your phone number?");
    },
    introduce() {
        if (selfGeneratedUser.hasOwnProperty("name") === true) {
            alert(selfGeneratedUser["name"]);
        }
        if (selfGeneratedUser.hasOwnProperty("email") === true) {
            alert(selfGeneratedUser["email"]);
        }
        if (selfGeneratedUser.hasOwnProperty("tel") === true) {
             alert(selfGeneratedUser["tel"]);
        }     
    }
}