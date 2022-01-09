// assignment 1
class Car {
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
    changeColor(newColor) {
        return this.color = newColor;
    }
}

let car = new Car('BMW', 2012, 'red');
console.log(car.changeColor('blue'));

// assignment 2
// класс Person. Вы должны заполнить метод Constructor, чтобы
// принять имя как строку и возраст как число, реализовать метод getInfo получения
// информации, который должен вернуть, например, “johns age 34”

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name}'s age is ${this.age}`
    }
}

let person = new Person('Mariya', 21);
console.log(person.getInfo());

// assignment 3

// класс Cat, который расширяет Animal, и заменить метод
// speak, чтобы вернуть имя кошки + мяу. например «Mr Whiskers meows.». Атрибут name
// передается с this.name

class Animal {
    constructor(name) {
    this.name = name;
}
    speak() {
        alert(this.name + ' says hi');
    };
}


class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(this.name + ' meows')
    }
}

let cat = new Cat("Louise");
cat.speak();


// assignment 4
// Создать класс Person со стандартными свойствами (имя, возраст) и действиями(идти,
// разговаривать, есть) человека, от него наследовать классы Ребенок и взрослый со своими
// особенными методами и свойствами (н-р, у ребенка - плакать или ходить в школу)

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this.__name;
    }
    set name(value) {
        this.__name = value;
    }
    get age() {
        return this.__age;
    }
    set age(value) {
        this.__age = value;
    }

    go(){
        console.log("I'm walking");
    };
    speak(){
        console.log("I'm talking");
    };
    eat(){
        console.log("that's what I'm lovin' ");
    };
}

let human = new Human("Vlad", 23);
human.eat();

class Todler extends Human {
    constructor(name) {
        super(name);
        super(age);
    }
    cry(){
        console.log("a-a-a-a-a-a");
    }
}

class Adult extends Human {
    constructor(name) {
        super(name);
        super(age);
    }
    complain(){
        console.log("I have to pay bills");
    }
}

// last assignment 
// Создать класс Ball, тип которого regular, если аргумент не передан, super, если передан
// аргумент “superBall”


class Ball {
    constructor(type) {
        if (type == null) {
            this.type = "regular";
        }  else {
            this.type = type;
        } 
    };
};

let ball = new Ball();
let Ball2 = new Ball("superBall");
console.log(ball.type);