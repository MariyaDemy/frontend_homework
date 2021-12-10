let headline = document.getElementById("my-first-elem");
let containers = document.querySelectorAll(".container");
let wrapper = document.querySelector(".wrapper");
let elements = document.querySelectorAll(".element");
// let newElements = [];
// newElements.push(elements[0], elements[1]);
let newElements = Array.prototype.slice.call(elements, 0, 2);
console.log(headline);
console.log(containers);
console.log(wrapper);
console.log(elements);
console.log(newElements);
headline.classList.add("color");
console.log(headline);
let par = document.querySelector("p");
par.style.color = "skyblue";



// CHESS BOARD
const onButtonClick = function () {
    let tableElement = document.createElement("table");
    for (let i = 0; i < 8; i++) {
        let rowElement = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let dataElement = document.createElement("td");
            if (i % 2 === 1 && j % 2 === 1 || i % 2 === 0 & j % 2 === 0) {
                dataElement.classList.add("blacky");
            }
            rowElement.appendChild(dataElement);
        }
        tableElement.appendChild(rowElement);
    }
    document.body.appendChild(tableElement);
}

