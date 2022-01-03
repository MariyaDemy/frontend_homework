"use strict";

// assignment 1 Создать форму в HTML с 2 полями ввода и кнопкой отправки. Получить эту форму
// на событие отправки этой формы (т е нажатие кнопки), сделать кнопку неактивной и
// очистить форму
let btn = document.getElementById("btn");
const onBtnClick = (e) => {
    let form = document.forms[0];
    form.reset();
    e.target.disabled = true;
    e.preventDefault();
}
btn.addEventListener('click', onBtnClick);

// const onSubmit = (e) =>{
//     e.preventDefault();
//     let formElements = e.target.elements;
//     for(let i = 0; i < formElements.length-1; i++){
//         console.log(formElements[i].value);
//     }
//     e.target.reset();
// }
// document.forms[1].addEventListener('submit', onSubmit);


// assignment 2 Создать форму в HTML с полем ввода и кнопкой отправки, на submit формы менять
// значение поля ввода на произвольное
const onSubmit = (e) =>{
    let formElements = e.target.elements;
    formElements[0].value = "magic";
    e.preventDefault();  
}
document.forms[1].addEventListener('submit', onSubmit);

// assignment 3 Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки.
// На submit формы вывести значения поля ввода и имена всех отмеченных полей
// checkbox.

const onFormSubmit = (e) => {
    
    let elements = e.target.elements;
    console.log(elements['text'].value);
    if (elements[1].checked === true ) {
        console.log(elements[1].name)}
    else if (elements[2].checked === true ) {
        console.log(elements[2].name)} 
    e.preventDefault();    
}
document.forms[2].addEventListener('submit', onFormSubmit);

// assignment 4 Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, если
// поля ввода пустое, делать фокус на поле ввода.

const addFocus = (e) => {    
    let elements = e.target.elements;
    if (elements[0].value === '' ) {
        elements[0].focus();
    }
    e.preventDefault();    
}
document.forms[3].addEventListener('submit', addFocus);


// assignment 5 Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения.
// Для поля телефона задать максимальное количество символов 13, сообщение может
// быть большим. При submit формы создавать объект со всеми значениями формы и
// выводить его.
const createObj = (e) => {    
    let elements = e.target.elements;
    let data = {};
    data.name = elements[0].value;
    data.surname = elements[1].value;
    data.tel = elements[2].value;
    data.message = elements[3].value;
    console.log(data);
    e.preventDefault();    
}
document.forms[4].addEventListener('submit', createObj);




let point = 0;
const showCoord = (e) => {
    if (window.pageYOffset > point) {
        console.log('down');
    } else {
        console.log('up');
    }
    point = window.pageYOffset;
}
window.addEventListener('scroll', showCoord)