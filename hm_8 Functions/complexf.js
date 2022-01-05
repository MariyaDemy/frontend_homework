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


    

