// assignment Создать функцию, которая возводит x в степент n.
    
let pow = (a, b) => {
    return b !== 1 ? a * pow(a, b - 1) : a;
}
console.log(pow(4, 2));

// assignment 1 Напишите функцию printMessage(), которая выводит сообщения на экран каждые n секунд.

const printMessage = function (n) {
    setInterval(() => alert("any message"), n);
};
printMessage(7000);

// assignment 2 Напишите функцию, которая выводит через 5 секунд на экран сообщение "Прошло 5 секунд"

let printM = function (n) {
    setInterval(() => alert("Прошло 5 секунд"), n);
}
printM(5000);

// assignment 3
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
// начиная от from и заканчивая to

const printNumbers = function (from, to) {
    for (i = from; i <= to; i++) {
        alert(i);
    }
    let timer = setInterval(() => {
        alert(i);
    },1000);

    setTimeout(() => {clearInterval(timer);}, to);
}

printNumbers(5,10);


// assignment 4
// По нажатию на кнопку показывать сообщение через 5 секунд, 
// в течение которых должно появляться слово "loading", 
// а после появления сообщения  - скрываться

let showMessage = function () { 
    let loading = document.createElement("div");
    loading.innerText = "loading...";
    document.querySelector("button").after(loading);

    setTimeout (() => {
        loading.remove();
    }, 5000);
    
    setTimeout(() => {
        alert('konnichiwa');
    }, 5000)

    // or
    
    // setTimeout (() => {
    //     loading.innerText = "konnichiwa";
    // }, 5000);
}
document.querySelector("button").addEventListener("click", showMessage)


// FUNC-GENERATOR


function* fibi() {
  yield lVal = 0;
  yield cVal = 1;
  while (true) {
    [lVal, cVal] = [cVal, lVal + cVal];
        yield lVal;
  }
}
    
let seq = fibi();
console.log(seq);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next());


// Создать генератор, который возвращает на каждый вызов четное число
// из промежутка, переданного в аргументы генератора: generator(from, to)

function* generateEvenNums(from, to) {
    for (let i = from; i<=to;i++) {
        if (i % 2 === 0) {
            yield i;
        }
    }
}

let sequence = generateEvenNums(0,20);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value); // 6


